import React from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Can I accept both Paypal and Stripe?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "Where are you from?",
    answer:
      "Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.",
  },
  {
    question: "What available is refund period?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "What is your opening time?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "Can I accept both Paypal and Stripe?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "Can I accept both Paypal and Stripe?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "What available is refund period?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    question: "What available is refund period?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="heading">
        <h1> Frequently Ask Questions</h1>
      </div>
      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
