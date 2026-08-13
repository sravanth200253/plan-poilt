const PLANS = [
  {
    tag: "FREE",
    price: "$0",
    period: "/forever",
    description: "For anyone who wants a smarter daily plan.",
    features: ["Daily AI schedule", "Mood-based planning", "1 goal at a time"],
    featured: false,
  },
  {
    tag: "PRO",
    price: "$12",
    period: "/month",
    description: "For people who plan every part of their week.",
    features: [
      "Daily, weekly & monthly plans",
      "Unlimited goals",
      "Productivity analytics",
      "Smart re-planning",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#F0E6D3] py-24 dark:bg-[#1B1610]">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          PRICING
        </span>

        <h2 className="mx-auto mt-6 max-w-xl text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Start free. Upgrade when it earns it.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.tag}
              className={
                plan.featured
                  ? "relative rounded-3xl bg-gradient-to-br from-[#2B231A] to-[#1A140F] p-8 text-left text-white shadow-[0_20px_50px_-15px_rgba(74,55,40,0.5)]"
                  : "relative rounded-3xl bg-white p-8 text-left shadow-sm dark:bg-[#221C15]"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-4 py-1 text-xs font-bold text-white shadow-md">
                  Most Popular
                </span>
              )}

              <div
                className={
                  plan.featured
                    ? "text-xs font-bold tracking-widest text-[#C8876A]"
                    : "text-xs font-bold tracking-widest text-[#C8876A]"
                }
              >
                {plan.tag}
              </div>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span
                  className={
                    plan.featured ? "text-sm text-[#D8CBBB]" : "text-sm text-[#8B6F47]"
                  }
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={
                  plan.featured
                    ? "mt-3 text-sm text-[#D8CBBB]"
                    : "mt-3 text-sm text-[#6B5A4A]"
                }
              >
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-[#C8876A]">✓</span>
                    <span
                      className={
                        plan.featured ? "text-[#F0EBE3]" : "text-[#4A3728] dark:text-[#F0EBE3]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={
                  plan.featured
                    ? "mt-8 flex h-11 items-center justify-center rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white transition hover:-translate-y-0.5"
                    : "mt-8 flex h-11 items-center justify-center rounded-full border border-[#4A3728]/15 text-sm font-bold text-[#4A3728] transition hover:-translate-y-0.5 dark:border-white/15 dark:text-[#F0EBE3]"
                }
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
