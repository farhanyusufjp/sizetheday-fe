'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface SoraIntroProps {
  wordmarkSrc?: string;
  className?: string;
}

const SectionDescription = ({
  wordmarkSrc = "/assets/images/sora-logo.png",
  className = "",
}: SoraIntroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========== MOBILE (≤ lg) — simpel: logo kiri, teks kanan ========== */}
<section className="block lg:hidden bg-white">
  {/* Strip kuning di atas */}
  <div className="h-1 w-full bg-[#F8E180]" />

  <div className="mx-auto max-w-[640px] px-4 py-6">
    <div className="grid grid-cols-[auto,1fr] items-start gap-4">
      {/* Logo kiri */}
      <div className="min-w-[96px] pt-1 flex justify-center sm:justify-start">
        <Image
          src={wordmarkSrc}
          alt="SORA wordmark"
          width={120}
          height={48}
          className="w-[110px] h-auto sm:w-[140px]"
          priority
        />
      </div>

      {/* Teks kanan */}
      <div>
        <p className="text-sm leading-relaxed text-neutral-700 text-justify [text-justify:inter-word]">
          The name SORA comes from the Sundanese word for “voice” — a reflection of how this bag
          speaks through color and form. With three distinctive color combinations, SORA invites you
          to express your energy — whether bold, calm, or warm — in your own way.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700 text-justify [text-justify:inter-word]">
          SORA speaks softly, but makes a statement.
        </p>

        <p className="mt-1 text-neutral-900 font-semibold">
          Let color be your voice.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ========== DESKTOP/TABLET (≥ lg) — versi fancy ========== */}
      <section
        ref={sectionRef}
        className={`relative hidden lg:block min-h-screen overflow-hidden bg-white ${className}`}
      >

        {/* Main Content Container */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center min-h-screen py-20">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left: Wordmark Block */}
                <div
                  className={`flex justify-center lg:justify-start transform transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-12 opacity-0 scale-95"
                  }`}
                >
                  <div className="relative group">
                    {/* Glow backdrops */}
                    <div className="absolute -inset-16 bg-gradient-to-r from-neutral-200/40 to-neutral-300/30 rounded-[3rem] blur-3xl group-hover:blur-4xl transition-all duration-700" />
                    <div className="absolute -inset-8 bg-gradient-to-r from-neutral-100/50 to-neutral-200/40 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-500" />

                    {/* Card */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-neutral-300/40 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                      {/* Soft inner gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-neutral-100/30 rounded-3xl" />

                      {/* Logo */}
                      <div className="relative">
                        <Image
                          src={wordmarkSrc}
                          alt="SORA wordmark"
                          width={300}
                          height={130}
                          className="h-auto w-[220px] md:w-[300px] filter drop-shadow-2xl"
                          priority
                        />
                      </div>

                      {/* Dots */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-neutral-700 to-neutral-900 rounded-full animate-ping opacity-30" />
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-full animate-pulse opacity-40" />
                      <div className="absolute top-1/4 -right-6 w-4 h-4 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full animate-bounce opacity-35" />

                      {/* Corner ornaments */}
                      <div className="absolute top-6 left-6 w-10 h-10 border-2 border-neutral-300/40 rounded rotate-45 animate-spin-very-slow" />
                      <div className="absolute bottom-6 right-6 w-8 h-8 border border-neutral-400/30 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div
                  className={`transform transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-12 opacity-0"
                  }`}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200/60">
                    {/* Soft bg tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/40 to-neutral-100/20 rounded-3xl" />

                    <div className="relative space-y-8 max-w-[60ch]">
                      {/* Main Description */}
                      <div
                        className={`transform transition-all duration-700 delay-700 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }`}
                      >
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
                          <span className="relative font-bold text-neutral-900 text-xl md:text-2xl">
                            The name SORA
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-700 to-neutral-900 transform scale-x-0 sora-expand-line rounded-full" />
                          </span>{" "}
                          comes from the Sundanese word for "voice" — a
                          reflection of how this bag speaks through color and
                          form.
                        </p>
                      </div>

                      {/* Secondary Description */}
                      <div
                        className={`transform transition-all duration-700 delay-900 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }`}
                      >
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
                          With three distinctive color combinations, SORA invites you to{" "}
                          <span className="relative font-bold text-neutral-900 bg-neutral-200/60 px-2 py-1 rounded-lg">
                            express your energy
                          </span>{" "}
                          — whether bold, calm, or warm — in your own way.
                        </p>
                      </div>

                      {/* Statement */}
                      <div
                        className={`transform transition-all duration-700 delay-1000 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }`}
                      >
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-800 font-medium italic">
                          SORA speaks softly, but makes a statement.
                        </p>
                      </div>

                      {/* Tagline */}
                      <div
                        className={`transform transition-all duration-700 delay-1100 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <div className="relative pt-8">
                          {/* Decorative line above */}
                          <div
                            className={`mb-6 h-1 bg-gradient-to-r from-neutral-600 to-neutral-900 rounded-full transition-all duration-1000 delay-1500 ${
                              isVisible ? "w-20" : "w-0"
                            }`}
                          />
                          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-neutral-900 leading-tight">
                            Let color be your voice.
                          </h2>
                          {/* Underline */}
                          <div
                            className={`mt-6 h-2 bg-gradient-to-r from-neutral-700 to-neutral-900 rounded-full transition-all duration-1000 delay-1700 ${
                              isVisible ? "w-40" : "w-0"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Right */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </section>

      <style jsx global>{`
        @keyframes sora-mesh-animation {
          0%,
          100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1);
          }
          33% {
            background-position: 50% 100%;
            filter: hue-rotate(0deg) brightness(1.08);
          }
          66% {
            background-position: 100% 50%;
            filter: hue-rotate(0deg) brightness(0.95);
          }
        }

        @keyframes sora-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(3deg) scale(1.05);
          }
          66% {
            transform: translateY(-10px) rotate(-2deg) scale(0.98);
          }
        }

        @keyframes patternFloat {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-80px) translateY(-80px);
          }
        }

        @keyframes spin-very-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .sora-mesh-bg {
          background: linear-gradient(
            45deg,
            rgba(23, 23, 23, 0.08) 0%,
            rgba(115, 115, 115, 0.06) 25%,
            rgba(23, 23, 23, 0.08) 50%,
            rgba(115, 115, 115, 0.06) 75%,
            rgba(23, 23, 23, 0.08) 100%
          );
          background-size: 400% 400%;
          animation: sora-mesh-animation 15s ease-in-out infinite;
        }

        .sora-orb-1 {
          animation: sora-float 10s ease-in-out infinite;
        }
        .sora-orb-2 {
          animation: sora-float 12s ease-in-out infinite reverse;
        }
        .sora-orb-3 {
          animation: sora-float 14s ease-in-out infinite;
        }

        .sora-expand-line {
          animation: sora-expand-line 1.5s ease-out 1s forwards;
        }
        @keyframes sora-expand-line {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 25s linear infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default SectionDescription;