'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title?: string;
  graphicSrc?: string;
}

const SectionSubHeader = ({
  graphicSrc = '/assets/images/ilustrasii-logo.png',
}: SectionHeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-0 md:min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50"
      >
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 opacity-20">
            <div className="mesh-bg w-full h-full" />
          </div>
        </div>

        {/* Floating Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb-1 absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-r from-slate-300/10 to-slate-200/10 rounded-full blur-3xl" />
          <div className="floating-orb-2 absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-slate-200/10 to-slate-300/10 rounded-full blur-3xl" />
          <div className="floating-orb-3 absolute -bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-slate-300/10 to-slate-200/10 rounded-full blur-3xl" />
        </div>

        {/* Geometric Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 right-20 transform transition-all duration-2000 delay-500 ${
              isVisible ? 'opacity-40 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
            }`}
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-slate-400/50 rounded-lg rotate-45 animate-pulse" />
              <div className="absolute inset-2 border border-slate-300/40 rounded rotate-45 animate-spin-slow" />
            </div>
          </div>

          <div
            className={`absolute bottom-20 left-20 transform transition-all duration-2000 delay-700 ${
              isVisible ? 'opacity-40 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'
            }`}
          >
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300/15 to-slate-200/15 rounded-full animate-pulse" />
              <div className="absolute inset-1 bg-gradient-to-r from-slate-200/20 to-slate-300/15 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6 h-full">
          <div className="flex flex-col justify-start pt-4 pb-4  md:pt-20 md:pb-12 min-h-0 md:min-h-[60vh]">
            {/* Mobile (balanced left-right) */}
        {/* Mobile (smaller text weight, one-line, bigger logo) */}
          <div className="block md:hidden">
            <div
              className={`flex items-center justify-between gap-4 transform transition-all duration-1200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Left: Heading */}
              <div className="basis-[50%]">
                <h1
                  className="font-semibold tracking-tight leading-snug text-neutral-900"
                  style={{
                    fontSize: 'clamp(18px, 5.5vw, 24px)', // lebih kecil
                  }}
                >
                  <span className="block">Change the way</span>
                  <span className="block whitespace-nowrap">you carry everyday.</span>
                </h1>
              </div>

              {/* Right: Logo lebih besar */}
              <div className="basis-[50%] flex justify-end">
                {graphicSrc && (
                  <Image
                    src={graphicSrc}
                    alt="Doodle illustration"
                    width={200}
                    height={200}
                    className="h-auto"
                    style={{ width: 'clamp(120px, 32vw, 200px)' }} // lebih gede
                    priority
                  />
                        )}
                      </div>
                    </div>
                  </div>


            {/* Desktop Layout */}
            <div className="hidden md:block max-w-7xl mx-auto w-full">
              <div
                className={`text-center mb-8 md:mb-16 transform transition-all duration-1200 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div
                  className={`mx-auto mb-8 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full transition-all duration-1000 delay-300 ${
                    isVisible ? 'w-32' : 'w-0'
                  }`}
                />
                <h1 className="text-balance font-black tracking-tight leading-tight text-neutral-900 mb-6"
                    style={{
                      // Fluid desktop heading: 40px — 7vw — 72px
                      fontSize: 'clamp(40px, 7vw, 72px)',
                    }}>
                  <span className="block">Change the way</span>
                  <span className="block">you carry everyday.</span>
                </h1>
                <div
                  className={`mx-auto mt-8 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full transition-all duration-1000 delay-700 ${
                    isVisible ? 'w-24' : 'w-0'
                  }`}
                />
              </div>

              {/* Illustration container */}
              <div
                className={`flex justify-center transform transition-all duration-1200 delay-800 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-slate-200/10 via-slate-100/5 to-slate-200/10 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />
                  <div className="absolute -inset-4 bg-gradient-to-r from-slate-200/15 to-slate-300/15 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-500" />

                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/60 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-slate-50/10 rounded-3xl" />
                    <div className="relative">
                      {graphicSrc && (
                        <Image
                          src={graphicSrc}
                          alt="Seize the day illustration"
                          width={560}
                          height={200}
                          className="h-auto filter drop-shadow-2xl"
                          // Fluid width desktop: 320px — 36vw — 520px
                          style={{ width: 'clamp(320px, 36vw, 520px)' }}
                          priority
                        />
                      )}
                    </div>

                    {/* Floating accents */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-slate-400 rounded-full animate-ping opacity-60" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-slate-500 rounded-full animate-pulse opacity-60" />
                    <div className="absolute top-1/2 -right-4 w-3 h-3 bg-slate-400 rounded-full animate-pulse opacity-60 delay-500" />
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-slate-300/40 rounded rotate-45 animate-spin-slow" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border border-slate-300/40 rounded-full animate-pulse" />
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute top-1/4 -left-8 w-3 h-3 bg-slate-400 rounded-full animate-bounce opacity-50" />
                  <div className="absolute bottom-1/4 -right-8 w-2 h-2 bg-slate-500 rounded-full animate-ping opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Global Styles */}
      <style jsx global>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker { animation: ticker 15s linear infinite; }

        @keyframes mesh-animation {
          0%, 100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
          50% { background-position: 100% 50%; filter: hue-rotate(10deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }

        .mesh-bg {
          background: linear-gradient(45deg,
            rgba(100,116,139,0.1) 0%,
            rgba(120,113,134,0.1) 25%,
            rgba(71,85,105,0.1) 50%,
            rgba(100,116,139,0.1) 75%,
            rgba(100,116,139,0.1) 100%);
          background-size: 400% 400%;
          animation: mesh-animation 12s ease-in-out infinite;
        }
        .floating-orb-1 { animation: float 8s ease-in-out infinite; }
        .floating-orb-2 { animation: float-delayed 10s ease-in-out infinite; }
        .floating-orb-3 { animation: float 12s ease-in-out infinite reverse; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

        .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0,0,0,0.25); }
      `}</style>
    </>
  );
};

export default SectionSubHeader;
