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
      <section
        ref={sectionRef}
        className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#145FE2]/10 via-[#F8E180]/20 to-[#145FE2]/5 ${className}`}
      >
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent" />

          {/* Dynamic mesh background */}
          <div className="absolute inset-0 opacity-40">
            <div className="sora-mesh-bg w-full h-full" />
          </div>

          {/* Animated geometric pattern (pakai primary) */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23145FE2' fill-opacity='0.8' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                animation: "patternFloat 25s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Floating Orbs (primary + secondary) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="sora-orb-1 absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#145FE2]/20 to-[#F8E180]/20 rounded-full blur-3xl" />
          <div className="sora-orb-2 absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-[#F8E180]/20 to-[#145FE2]/10 rounded-full blur-3xl" />
          <div className="sora-orb-3 absolute -bottom-24 left-1/3 w-72 h-72 bg-gradient-to-r from-[#145FE2]/15 to-[#F8E180]/15 rounded-full blur-3xl" />

          {/* Decorative rings */}
          <div
            className={`absolute top-32 right-1/4 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-30 scale-100 rotate-0"
                : "opacity-0 scale-50 rotate-180"
            }`}
          >
            <div className="w-24 h-24 border-2 border-[#145FE2]/35 rounded-full" />
            <div className="absolute inset-4 border border-[#F8E180]/40 rounded-full animate-spin-very-slow" />
          </div>
        </div>

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
                    <div className="absolute -inset-16 bg-gradient-to-r from-[#145FE2]/20 to-[#F8E180]/20 rounded-[3rem] blur-3xl group-hover:blur-4xl transition-all duration-700" />
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#145FE2]/15 to-[#F8E180]/15 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-500" />

                    {/* Card */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-[#145FE2]/25 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                      {/* Soft inner gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#145FE2]/5 to-[#F8E180]/10 rounded-3xl" />

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
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#145FE2] to-[#F8E180] rounded-full animate-ping" />
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#F8E180] to-[#145FE2] rounded-full animate-pulse" />
                      <div className="absolute top-1/4 -right-6 w-4 h-4 bg-gradient-to-r from-[#145FE2] to-[#F8E180] rounded-full animate-bounce" />

                      {/* Corner ornaments */}
                      <div className="absolute top-6 left-6 w-10 h-10 border-2 border-[#145FE2]/25 rounded rotate-45 animate-spin-very-slow" />
                      <div className="absolute bottom-6 right-6 w-8 h-8 border border-[#F8E180]/40 rounded-full animate-pulse" />
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
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/60">
                    {/* Soft bg tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#145FE2]/5 to-[#F8E180]/10 rounded-3xl" />

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
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#145FE2] to-[#F8E180] transform scale-x-0 sora-expand-line rounded-full" />
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
                          With two distinctive palettes, SORA invites you to{" "}
                          <span className="relative font-bold text-[#145FE2] bg-[#F8E180]/40 px-2 py-1 rounded-lg">
                            express your energy
                          </span>{" "}
                          — whether bold or warm — in your own way.
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
                            className={`mb-6 h-1 bg-gradient-to-r from-[#145FE2] to-[#F8E180] rounded-full transition-all duration-1000 delay-1500 ${
                              isVisible ? "w-20" : "w-0"
                            }`}
                          />
                          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-gradient-to-r from-[#145FE2] to-[#F8E180] bg-clip-text leading-tight">
                            Let color be your voice.
                          </h2>
                          {/* Underline */}
                          <div
                            className={`mt-6 h-2 bg-gradient-to-r from-[#145FE2] to-[#F8E180] rounded-full transition-all duration-1000 delay-1700 ${
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

        @keyframes sora-shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
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
            rgba(20, 95, 226, 0.16) 0%,
            rgba(248, 225, 128, 0.16) 25%,
            rgba(20, 95, 226, 0.16) 50%,
            rgba(248, 225, 128, 0.16) 75%,
            rgba(20, 95, 226, 0.16) 100%
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

        .sora-shimmer {
          animation: sora-shimmer 4s infinite;
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

        /* Extra soft big shadow */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default SectionDescription;
