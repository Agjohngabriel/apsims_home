import { useState, useEffect, useRef, useMemo } from 'react';

function MBubble({ side = 'in', time, children, typing = false }) {
  return (
    <div className={`mp-bub ${side} ${typing ? 'typing' : ''}`}>
      {typing ? (
        <div className="mp-dots"><span /><span /><span /></div>
      ) : (
        <>
          <div className="mp-bub-c">{children}</div>
          {time && (
            <div className="mp-bub-t">
              {time}{side === 'out' && <i className="ti ti-checks" />}
            </div>
          )}
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

export default function HeroChatScene() {
  const SCRIPT = useMemo(() => ([
    { kind: 'out', time: '10:12', text: 'Sold 30 bags of rice for ₦48,000' },
    { kind: 'typing' },
    {
      kind: 'in', time: '10:12', node: (
        <><b>Sale logged ✓</b><br />30 bags · Rice 50kg<br />Revenue <b>₦48,000</b><br />Stock left: <b>70 bags</b></>
      ),
    },
    { kind: 'out', time: '10:13', text: "What's my profit this week?" },
    { kind: 'typing' },
    {
      kind: 'in', time: '10:13', node: (
        <><b>Weekly profit: ₦43,200</b><br />Revenue ₦184k · Margin <b>23.4%</b><br />Top seller: Rice 50kg</>
      ),
    },
    { kind: 'out', time: '10:14', text: 'Send full report PDF' },
    { kind: 'typing' },
    { kind: 'doc', name: 'Weekly_Report.pdf', meta: '4 pages · 142 KB · PDF', caption: <><b>Here you go.</b> Sent automatic.</> },
  ]), []);

  const [visible, setVisible] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let timer;
    function tick() {
      if (cancelled) return;
      const cur = SCRIPT[visible];
      let delay;
      if (!cur) {
        timer = setTimeout(() => { if (!cancelled) setVisible(0); }, 3500);
        return;
      }
      if (cur.kind === 'typing') delay = 1100;
      else if (cur.kind === 'out') delay = 900;
      else if (cur.kind === 'doc') delay = 2400;
      else delay = 1800;

      timer = setTimeout(() => { if (!cancelled) setVisible(v => v + 1); }, delay);
    }
    tick();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [visible, SCRIPT]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible]);

  const items = SCRIPT.slice(0, visible);

  return (
    <div className="mp-phone">
      <div className="mp-notch" />
      <div className="mp-screen">
        <div className="mp-status">
          <span>10:14</span>
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
            <div className="mp-stat">online · inventory assistant</div>
          </div>
          <i className="ti ti-video" />
          <i className="ti ti-dots-vertical" />
        </div>
        <div className="mp-body" ref={bodyRef}>
          <div className="mp-day">TODAY</div>
          {items.map((it, i) => {
            if (it.kind === 'typing' && i < items.length - 1) return null;
            if (it.kind === 'out')    return <MBubble key={i} side="out" time={it.time}>{it.text}</MBubble>;
            if (it.kind === 'in')     return <MBubble key={i} side="in"  time={it.time}>{it.node}</MBubble>;
            if (it.kind === 'doc')    return <MDocBubble key={i} name={it.name} meta={it.meta} caption={it.caption} />;
            if (it.kind === 'typing') return <MBubble key={i} side="in" typing />;
            return null;
          })}
        </div>
        <div className="mp-composer">
          <div className="mp-bar">
            <i className="ti ti-mood-smile" />
            <span className="mp-ph">Message</span>
            <i className="ti ti-paperclip" />
          </div>
          <div className="mp-send"><i className="ti ti-microphone" /></div>
        </div>
      </div>
    </div>
  );
}
