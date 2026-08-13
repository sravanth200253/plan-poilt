export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#F7F1E7] py-24 dark:bg-[#171310]">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          TESTIMONIALS
        </span>

        <h2 className="mx-auto mt-6 max-w-xl text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Be one of our first stories
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base text-[#6B5A4A] dark:text-[#D8CBBB]">
          We just launched — real stories from PlanPilot users will show up
          here as our community grows.
        </p>

        <div className="mx-auto mt-14 max-w-md rounded-2xl border-2 border-dashed border-[#C8876A]/30 bg-white/40 px-8 py-12 dark:bg-white/5">
          <span className="text-3xl">⭐</span>
          <p className="mt-3 text-sm font-medium text-[#8B6F47]">
            No testimonials yet
          </p>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            Try PlanPilot free and your story could be featured right here.
          </p>
        </div>
      </div>
    </section>
  );
}
