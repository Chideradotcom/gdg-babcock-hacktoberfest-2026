import { createRoot } from "react-dom/client";
import "./style.css";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18" className="arrow">
    <path d="M3.5 9h10M9.5 4.5 14 9l-4.5 4.5" />
  </svg>
);

function App() {
  return (
    <main className="page-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="GDG AI Grader home">
          <span className="brand-mark">G</span>
          <span>GDG <em>AI</em> Grader</span>
        </a>
        <a className="nav-button" href="#workspace">Open workspace <Arrow /></a>
      </nav>

      <section className="hero hero-centered container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> AI-ASSISTED GRADING</p>
          <h1>Clear feedback.<br /><span>Less busywork.</span></h1>
          <p className="hero-text">Review AI suggestions, adjust when needed, and share thoughtful feedback with every learner.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workspace">Start grading <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-inner">
          <p>HOW IT WORKS</p>
          <div className="proof-items"><span><b>1.</b> Upload</span><i /><span><b>2.</b> Review</span><i /><span><b>3.</b> Share feedback</span></div>
        </div>
      </section>
    </main>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
