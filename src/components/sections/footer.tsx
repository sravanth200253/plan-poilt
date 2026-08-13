import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const COLUMNS = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const SOCIALS = [IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram];

export function Footer() {
  return (
    <footer className="bg-[#F0E6D3] pt-20 pb-8 dark:bg-[#1B1610]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo1.png" alt="PlanPilot logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                PlanPilot
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
              AI planning that reads your goals, mood, and time — so your day
              plans itself.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E6D3] text-[#8B6F47] transition hover:bg-[#C8876A] hover:text-white dark:bg-white/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold tracking-widest text-[#C8876A]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#6B5A4A] transition hover:text-[#4A3728] dark:text-[#D8CBBB] dark:hover:text-[#F0EBE3]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#C8876A]">
              STAY IN THE LOOP
            </h3>
            <p className="mt-4 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
              One email a month. Planning tips, no spam.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="h-11 w-full min-w-0 rounded-full border border-[#4A3728]/10 bg-white px-4 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/60 focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-[#4A3728]/10 pt-6 text-xs text-[#8B6F47] sm:flex-row dark:border-white/10">
          <span>© 2026 PlanPilot. All rights reserved.</span>
          <span>Made for people who&apos;d rather do than plan.</span>
        </div>
      </div>
    </footer>
  );
}
