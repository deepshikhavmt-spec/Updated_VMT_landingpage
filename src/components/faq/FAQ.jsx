import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "How soon can we expect results?",
    a: "While timelines vary by industry and strategy, most clients start seeing measurable improvements within the first 30–60 days. Sustainable growth typically compounds over 3–6 months."
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a: "We work with startups, growing businesses, and established brands alike. Our strategies are tailored based on your goals, budget, and growth stage."
  },
  {
    q: "What makes Viral Marketing Trends different from other agencies?",
    a: "We focus on performance-first marketing backed by data, transparency, and senior-level involvement. No cookie-cutter strategies—everything is customized."
  },
  {
    q: "Will I get reports and performance insights?",
    a: "Absolutely. You receive clear, transparent reports with actionable insights so you always know what’s working and where we’re optimizing."
  },
  {
    q: "Is there a long-term contract?",
    a: "No rigid lock-ins. We believe in earning long-term partnerships through results, not forcing commitments."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know before getting started with us.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              className={`faq-item ${activeIndex === i ? "active" : ""}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h4>{item.q}</h4>
                <span className="faq-icon">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
