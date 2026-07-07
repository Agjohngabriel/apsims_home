import { COMPARE_ROWS, COMPARE_COLS } from '../data/content';
import './CompareSection.css';

export default function CompareSection() {
  return (
    <section id="compare" className="section" data-screen-label="Compare">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="section-label">vs The competition</div>
            <h2 className="section-title">
              24 inventory tools for Nigerian SMEs. <em>None</em> live in WhatsApp.
            </h2>
          </div>
          <p className="section-sub">
            Most inventory tools are built for accountants or office workers — you need a laptop,
            a login, and time to learn them. APSIMS is built for the trader who's serving
            a customer right now and has thirty seconds to log a sale.
          </p>
        </div>

        <div className="compare-wrap">
          <div className="compare">
            <table>
              <thead>
                <tr>
                  <th />
                  {COMPARE_COLS.map((c, i) => (
                    <th key={i} className={i === COMPARE_COLS.length - 1 ? 'us' : ''}>
                      <div className={`col-name ${i === COMPARE_COLS.length - 1 ? 'us-name' : ''}`}>{c}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => {
                  const [feature, ...cells] = row;
                  return (
                    <tr key={i}>
                      <td className="feature">{feature}</td>
                      {cells.map((c, j) => {
                        const isUs = j === cells.length - 1;
                        return (
                          <td key={j} className={isUs ? 'us' : ''}>
                            {c === 'yes'     && <i className="ti ti-check yes" />}
                            {c === 'no'      && <i className="ti ti-x no" />}
                            {c === 'partial' && <span className="partial">Partial</span>}
                            {c === 'yes-us'  && <span className="yes-us"><i className="ti ti-check" />Yes</span>}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="compare-footnote">
            Feature assessment based on publicly available information as of July 2026. Subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}
