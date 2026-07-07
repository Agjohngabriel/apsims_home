import { useState, useEffect, useRef } from 'react';
import { SAMPLE_PROMPTS, STOCK_DB } from '../data/content';
import './Simulator.css';

function parseSale(text) {
  const t = text.toLowerCase();
  const m = t.match(/sold\s+(\d+)\s+(bags?|cartons?|bottles?|tins?|pieces?|sachets?|crates?|packs?|units?)?\s*(?:of\s+)?([a-z][a-z\s]+?)\s+for\s+(?:₦|naira|n)?\s*([\d,]+)\s*(?:naira)?/i);
  if (m) {
    return { kind: 'sale', qty: parseInt(m[1], 10), unit: (m[2] || 'units').replace(/s$/, ''), product: m[3].trim(), amount: parseInt(m[4].replace(/,/g, ''), 10) };
  }
  const m2 = t.match(/sold\s+(\d+)\s+([a-z][a-z\s]+?)\s+for\s+(?:₦|naira|n)?\s*([\d,]+)/i);
  if (m2) {
    return { kind: 'sale', qty: parseInt(m2[1], 10), unit: 'unit', product: m2[2].trim(), amount: parseInt(m2[3].replace(/,/g, ''), 10) };
  }
  return null;
}

function parseStockQuery(text) {
  const t = text.toLowerCase();
  const m = t.match(/how many\s+([a-z\s]+?)\s+(?:do i have|left|remaining|in stock)/i)
         || t.match(/stock\s+(?:of\s+)?([a-z\s]+?)\??$/i)
         || t.match(/check\s+stock(?:\s+of\s+([a-z\s]+))?/i);
  if (m) return { kind: 'stock', product: (m[1] || '').trim() || 'everything' };
  return null;
}

function parseReport(text) {
  if (/(report|profit|revenue|sales\s+this|how('s| is)\s+business|weekly|monthly)/i.test(text)) {
    return { kind: 'report' };
  }
  return null;
}

function parseCredit(text) {
  const m = text.match(/(?:how much|what)\s+(?:does\s+)?([a-z\s]+?)\s+(?:owe|own)/i);
  if (m) return { kind: 'credit', customer: m[1].trim() };
  if (/credit|owe|debt/i.test(text)) return { kind: 'credit-summary' };
  return null;
}

function findStock(product) {
  if (!product) return null;
  const p = product.toLowerCase();
  for (const k of Object.keys(STOCK_DB)) {
    if (p.includes(k)) return { key: k, ...STOCK_DB[k] };
  }
  return null;
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function fmt(n) { return '₦' + n.toLocaleString('en-NG'); }
function nowTime() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
}

function botReply(text) {
  const sale = parseSale(text);
  if (sale) {
    const remaining = (findStock(sale.product)?.left || 50) - sale.qty;
    return {
      kind: 'sale-reply',
      node: <><b>Sale logged ✓</b><br />{sale.qty} {sale.unit}{sale.qty > 1 ? 's' : ''} · {capitalize(sale.product)}<br />Revenue <b>{fmt(sale.amount)}</b><br />Stock left: <b>{remaining > 0 ? remaining : '—'} {sale.unit}{remaining !== 1 ? 's' : ''}</b></>,
    };
  }

  const stockQ = parseStockQuery(text);
  if (stockQ) {
    if (stockQ.product === 'everything') {
      return { kind: 'stock-summary', node: <><b>Stock snapshot</b><br />Rice <b>58 bags</b> · Garri <b>22</b><br />Indomie <b>47 ctns</b> · Beans <b>31 bags</b><br />⚠ Oil <b>14 bottles</b> · Malt <b>9 crates</b></> };
    }
    const hit = findStock(stockQ.product);
    if (hit) {
      const warn = hit.trend === 'low';
      return {
        kind: 'stock',
        node: <>{warn ? '⚠ ' : ''}<b>{capitalize(hit.key)}</b><br />{hit.left} {hit.unit} remaining<br />{warn ? <i style={{ color: 'var(--ap-amber-deep)' }}>Stock is low — consider restocking.</i> : <span>Stock level healthy.</span>}</>,
      };
    }
    return { kind: 'stock-empty', node: <><b>{capitalize(stockQ.product)}</b> isn't in your inventory yet. Reply with <b>"Add {stockQ.product}"</b> to start tracking it.</> };
  }

  const rep = parseReport(text);
  if (rep) {
    return {
      kind: 'report',
      node: <><b>Weekly summary</b><br />Revenue <b>₦184,200</b> ↑ 12.4%<br />Profit <b>₦43,200</b> · Margin <b>23.4%</b><br />Top seller: <b>Rice 50kg</b></>,
      followUp: { kind: 'doc', name: 'Weekly_Report.pdf', meta: '4 pages · 142 KB · PDF', caption: <><b>Full PDF.</b> Tap to download.</> },
    };
  }

  const cred = parseCredit(text);
  if (cred) {
    if (cred.kind === 'credit') {
      return { kind: 'credit', node: <><b>{capitalize(cred.customer)}</b> owes <b>₦12,000</b><br />Last payment: ₦8,000 on May 12<br />Balance overdue by 8 days.</> };
    }
    return { kind: 'credit-summary', node: <><b>Outstanding credit</b><br />5 customers · <b>₦47,500</b> total<br />2 overdue. Reply <b>"List"</b> to see names.</> };
  }

  return {
    kind: 'fallback',
    node: <>Got it. Try things like:<br /><i style={{ color: 'var(--ap-ink-mid)' }}>"Sold 30 bags of rice for ₦48,000"</i><br /><i style={{ color: 'var(--ap-ink-mid)' }}>"Report this week"</i></>,
  };
}

function MBubble({ side = 'in', time, children, typing = false }) {
  return (
    <div className={`mp-bub ${side} ${typing ? 'typing' : ''}`}>
      {typing ? (
        <div className="mp-dots"><span /><span /><span /></div>
      ) : (
        <>
          <div className="mp-bub-c">{children}</div>
          {time && <div className="mp-bub-t">{time}{side === 'out' && <i className="ti ti-checks" />}</div>}
        </>
      )}
    </div>
  );
}

function MDocBubble({ name, meta, caption }) {
  return (
    <div className="mp-doc">
      <div className="mp-doc-pdf">
        <div className="mp-doc-ic"><i className="ti ti-file-text" /></div>
        <div className="mp-doc-info">
          <div className="mp-doc-name">{name}</div>
          <div className="mp-doc-meta">{meta}</div>
        </div>
        <i className="ti ti-download" style={{ color: 'var(--ap-green)', fontSize: 18 }} />
      </div>
      {caption && <div className="mp-doc-cap">{caption}</div>}
    </div>
  );
}

export default function Simulator() {
  const [convo, setConvo] = useState([
    { kind: 'in', time: '10:12', node: <>👋 Hey! I'm <b>APSIMS</b>. Type a sale, ask for a report, or check stock — I'll handle the rest.</> },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [convo, thinking]);

  function send(textOverride) {
    const text = (textOverride ?? input).trim();
    if (!text || thinking) return;

    const time = nowTime();
    setConvo(c => [...c, { kind: 'out', time, text }]);
    setInput('');
    setThinking(true);

    setTimeout(() => {
      const reply = botReply(text);
      setConvo(c => [...c, { kind: 'in', time: nowTime(), node: reply.node }]);
      if (reply.followUp) {
        setTimeout(() => {
          setConvo(c => [...c, { kind: 'doc', time: nowTime(), ...reply.followUp }]);
        }, 700);
      }
      setThinking(false);
    }, 950);
  }

  function reset() {
    setConvo([{ kind: 'in', time: '10:12', node: <>👋 Hey! I'm <b>APSIMS</b>. Type a sale, ask for a report, or check stock — I'll handle the rest.</> }]);
  }

  return (
    <div className="sim-wrapper">
      <div className="sim-phone-wrap">
        <div className="mp-phone">
          <div className="mp-notch" />
          <div className="mp-screen">
            <div className="mp-status">
              <span>{nowTime()}</span>
              <span className="mp-status-icons">
                <i className="ti ti-signal-4g" />
                <i className="ti ti-wifi" />
                <i className="ti ti-battery-3" />
              </span>
            </div>
            <div className="mp-header">
              <i className="ti ti-chevron-left" />
              <div className="mp-avatar">A</div>
              <div className="mp-who">
                <div className="mp-name">APSIMS Bot</div>
                <div className="mp-stat">online · try it live</div>
              </div>
              <button onClick={reset} title="Reset" style={{ background: 'transparent', border: 'none', color: '#fff', opacity: 0.85, cursor: 'pointer' }}>
                <i className="ti ti-refresh" style={{ fontSize: 17 }} />
              </button>
              <i className="ti ti-dots-vertical" />
            </div>
            <div className="mp-body" ref={bodyRef}>
              <div className="mp-day">TODAY</div>
              {convo.map((m, i) => {
                if (m.kind === 'out') return <MBubble key={i} side="out" time={m.time}>{m.text}</MBubble>;
                if (m.kind === 'in')  return <MBubble key={i} side="in"  time={m.time}>{m.node}</MBubble>;
                if (m.kind === 'doc') return <MDocBubble key={i} name={m.name} meta={m.meta} caption={m.caption} />;
                return null;
              })}
              {thinking && <MBubble side="in" typing />}
            </div>
            <div className="mp-composer">
              <div className="mp-bar">
                <i className="ti ti-mood-smile" />
                <input
                  className="live"
                  placeholder="Try typing a sale..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  autoComplete="off"
                />
                <i className="ti ti-paperclip" />
              </div>
              <button className="mp-send" onClick={() => send()}>
                <i className={`ti ${input.trim() ? 'ti-send' : 'ti-microphone'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sim-chips">
        {SAMPLE_PROMPTS.map((p, i) => (
          <button key={i} className="sim-chip" onClick={() => send(p.label)}>
            <i className={`ti ${p.icon}`} />{p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
