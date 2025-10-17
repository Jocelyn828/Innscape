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

const pricingFeatures = [
  "Monthly Travel Credits",
  "Monthly Club Fee",
  "Bonus Credit (Quarterly)",
  "Insider Hotel (Room upgrades)",
  "Credit Validity",
  "Credit Top-Up",
];

const pricingPlans = [
  {
    tier: "Lite",
    price: "RM225",
    features: {
      "Monthly Travel Credits": "200",
      "Monthly Club Fee": "RM25",
      "Bonus Credit (Quarterly)": "-",
      "Insider Hotel (Room upgrades)": "-",
      "Credit Validity": "36 months",
      "Credit Top-Up": "-",
    },
  },
  {
    tier: "Standard",
    price: "RM389",
    features: {
      "Monthly Travel Credits": "350",
      "Monthly Club Fee": "RM39",
      "Bonus Credit (Quarterly)": "88",
      "Insider Hotel (Room upgrades)": "-",
      "Credit Validity": "36 months",
      "Credit Top-Up": "-",
    },
  },
  {
    tier: "Premium",
    price: "RM665",
    features: {
      "Monthly Travel Credits": "600",
      "Monthly Club Fee": "RM69",
      "Bonus Credit (Quarterly)": "125",
      "Insider Hotel (Room upgrades)": "Exclusive",
      "Credit Validity": "36 months",
      "Credit Top-Up": "Exclusive",
    },
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
      <p>travel smarter, live freer</p>
      <button className="primary-btn">Join the Waitlist</button>
    </div>
  </section>
);

const FeatureHighlights = () => (
  <section className="features">
    {featureHighlights.map((feature) => (
      <article key={feature.title} className="feature-card">
        <div className="placeholder-img" aria-hidden="true"></div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </article>
    ))}
  </section>
);

const Comparison = () => (
  <section className="comparison">
    <h1>Save Monthly, Escape Often</h1>
    <p className="subtitle">Save monthly, escape often</p>
    <div className="comparison-grid">
      {comparisonCards.map((card) => (
        <div key={card.title} className="comparison-card">
          <h2>{card.title}</h2>
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
    <h1>Pricing</h1>
    <p className="subtitle">Compare the tiers at a glance</p>
    <div className="pricing-table">
      <div className="pricing-features">
        <h2>Features</h2>
        <hr />
        <ul>
          {pricingFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="pricing-columns">
        {pricingPlans.map((plan) => (
          <div key={plan.tier} className="pricing-column">
            <div className="pricing-column-header">
              <h2>{plan.tier}</h2>
              <p className="price">{plan.price}</p>
            </div>
            <hr />
            <ul>
              {pricingFeatures.map((feature) => (
                <li key={feature}>{plan.features[feature] || "–"}</li>
              ))}
            </ul>
            <button className="pricing-cta">Join</button>
          </div>
        ))}
      </div>
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
      <h1>Common Questions</h1>
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

const joinTiers = ["Lite", "Standard", "Premium"];

const JoinForm = () => {
  const [selectedTier, setSelectedTier] = React.useState(joinTiers[0]);

  return (
    <section className="join-form">
      <h1>Join the Waitlist</h1>
      <p className="subtitle">Pro-join &amp; waived first month club fee</p>

      <div className="join-tier-buttons">
        {joinTiers.map((tier) => (
          <button
            key={tier}
            type="button"
            className={`join-tier ${selectedTier === tier ? "active" : ""}`}
            onClick={() => setSelectedTier(tier)}
          >
            {tier}
          </button>
        ))}
      </div>

      <form
        className="join-form-fields"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const email = formData.get("email");
          alert(`Thanks for joining the ${selectedTier} waitlist, ${email}!`);
          event.currentTarget.reset();
        }}
      >
        <input type="hidden" name="tier" value={selectedTier} />
        <input
          type="email"
          name="email"
          placeholder="your email"
          aria-label="Email address"
          required
        />
        <button type="submit" className="join-submit">
          Submit
        </button>
      </form>
    </section>
  );
};

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
      <JoinForm />
    </main>
    <Footer />
  </>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
