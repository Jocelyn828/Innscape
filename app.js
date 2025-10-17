const navItems = ["Features", "Discover", "Gallery", "Templates", "Updates"];

const featureHighlights = [
  {
    title: "Save Monthly",
    description:
      "Set your monthly travel fund. Part goes to your Innscape Club, the rest becomes travel credits.",
  },
  {
    title: "Book Smarter",
    description:
      "Tap into credits anytime for exclusive member-only hotel rates and insider perks.",
  },
  {
    title: "Live Freer",
    description:
      "Travel when you want, where you want — skip the pressure of prebooking or missing out.",
  },
];

const comparisonCards = [
  {
    title: "OTAs",
    bullets: [
      "Use prepaid credits anytime within 36 months — no rush",
      "Always get insider price, no need to wait for sale periods or flash sales",
      "Insider perks, milestone rewards, insider rates",
      "Insider-only deals up to 35% off BAR",
      "Save monthly — accumulate credits, use when ready",
      "Save first, go when you're ready, no stress",
    ],
  },
  {
    title: "Innscape",
    bullets: [
      "Pay full, sometimes points, small cashback",
      "Prices change daily, create FOMO",
      "Book now or miss it, fear based",
      "Loyalty points (complex, often low value)",
      "Limited perks, tough availability",
    ],
  },
];

const pricingPlans = [
  {
    tier: "Lite",
    price: "RM225",
    benefits: [
      "200 monthly credits",
      "Access to off-season deals",
      "Access to last-minute flash sales",
      "Secure payment gateway",
    ],
  },
  {
    tier: "Standard",
    price: "RM389",
    benefits: [
      "350 monthly credits",
      "Access to off-season deals",
      "Access to last-minute flash sales",
      "Price-match assurance",
      "350 annual bonus credit",
      "Secure payment gateway",
    ],
  },
  {
    tier: "Premium",
    price: "RM665",
    benefits: [
      "600 monthly credits",
      "Access to off-season deals",
      "Access to last-minute flash sales",
      "Price-match assurance",
      "750 annual bonus credit",
      "Room upgrade (subject to availability)",
    ],
  },
];

const faqs = [
  {
    question: "How do I draw Frames?",
    answer:
      "Use the navigation panel to insert a Frame, then drag to size it. Frames act as containers for everything else.",
  },
  {
    question: "How do I add images?",
    answer:
      "Click the image icon in the toolbar, choose a placeholder, or upload your own to fill the Frame.",
  },
  {
    question: "How do I add videos?",
    answer:
      "Use the media block and paste a streaming link. The player auto-adjusts to your layout.",
  },
];

const NavBar = () => (
  <header className="navbar">
    <div className="brand">
      <span className="brand-icon">F</span>
      <span className="brand-name">Innscape</span>
    </div>
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-overlay">
      <h1>Innscape</h1>
      <p>Travel smarter, live freer</p>
      <button className="primary-btn">Join the Waitlist</button>
    </div>
  </section>
);

const FeatureHighlights = () => (
  <section className="features">
    {featureHighlights.map((feature) => (
      <article key={feature.title} className="feature-card">
        <div className="../images/beach.png" aria-hidden="true"></div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </article>
    ))}
  </section>
);

const Comparison = () => (
  <section className="comparison">
    <h2>Save Monthly, Escape Often</h2>
    <p className="subtitle">Save monthly, escape often</p>
    <div className="comparison-grid">
      {comparisonCards.map((card) => (
        <div key={card.title} className="comparison-card">
          <h3>{card.title}</h3>
          <ul>
            {card.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => (
  <section className="pricing">
    <h2>Pricing</h2>
    <p className="subtitle">Choose the membership that fits your escape plan</p>
    <div className="pricing-grid">
      {pricingPlans.map((plan) => (
        <div key={plan.tier} className="pricing-card">
          <h3>{plan.tier}</h3>
          <p className="price">{plan.price}</p>
          <ul>
            {plan.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <button className="outline-btn">Join Waiting-List</button>
        </div>
      ))}
    </div>
  </section>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`}>
    <button className="faq-question" onClick={onToggle}>
      <span>{question}</span>
      <span>{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && <p className="faq-answer">{answer}</p>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section className="faq">
      <h2>Common Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="newsletter">
    <h2>Newsletter</h2>
    <p className="subtitle">Sign up</p>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Thanks for joining the waitlist!");
      }}
    >
      <input type="email" placeholder="name@example.com" required />
      <button type="submit" className="primary-btn">
        Submit
      </button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Innscape. All rights reserved.</p>
  </footer>
);

const App = () => (
  <>
    <NavBar />
    <main>
      <Hero />
      <FeatureHighlights />
      <Comparison />
      <Pricing />
      <FAQ />
      <Newsletter />
    </main>
    <Footer />
  </>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
