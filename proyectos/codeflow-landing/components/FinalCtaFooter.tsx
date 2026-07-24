"use client";

export default function FinalCtaFooter() {
  return (
    <section id="contacto" className="bg-[#0F172A] text-white">
      <div className="px-6 py-16 sm:py-24 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          ¿Tu negocio también pierde tiempo decidiendo?
        </h2>

        <div className="mt-8 sm:mt-10">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#10B981] text-[#0F172A] font-semibold rounded-xl px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg transition-transform duration-150 ease-out hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.5)]"
          >
            Comentá qué te frena y te escribo
          </a>
        </div>

        <p className="mt-4 text-sm text-white/60">
          Sin compromiso. Respondo en menos de 24hs.
        </p>
      </div>

      <footer className="border-t border-white/10 px-6 py-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-wide text-white">
            [MARCA]
          </span>

          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
