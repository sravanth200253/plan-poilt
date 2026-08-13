export function FinalCta() {
  return (
    <section className="bg-[#F7F1E7] py-24 dark:bg-[#171310]">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#2B231A] to-[#1A140F] px-8 py-16 text-center shadow-[0_30px_70px_-20px_rgba(74,55,40,0.5)]">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Your best day is one plan away.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#D8CBBB]">
            Generate your first AI schedule in under 30 seconds. No credit
            card required.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-8 text-sm font-bold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
          >
            Generate My AI Plan
          </a>
        </div>
      </div>
    </section>
  );
}
