import Simulator from '../components/Simulator';
import './SimulatorSection.css';

export default function SimulatorSection() {
  return (
    <section id="try" className="section alt" data-screen-label="Try it live">
      <div className="shell">
        <div className="sim-grid">
          <div className="sim-copy">
            <div className="section-label">Try it live</div>
            <h2 className="section-title">
              Type a sale. <em>See it logged.</em>
            </h2>
            <p className="section-sub" style={{ marginTop: 16, marginBottom: 0 }}>
              This is a real-feeling demo running in your browser. Type a sale the way you'd
              say it, or ask for stock or a report. The bot replies in plain English with
              the numbers that matter.
            </p>
          </div>
          <Simulator />
        </div>
      </div>
    </section>
  );
}
