'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title?: string;
  graphicSrc?: string;
}

const SectionSubHeader = ({
  // title = 'Change the way you carry everyday.',
  graphicSrc = '/assets/images/ilustrasii-logo.png',
}: SectionHeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-50 via-yellow-50/30 to-indigo-50"
      >
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          
          {/* Animated mesh background */}
          <div className="absolute inset-0 opacity-30">
            <div className="mesh-bg w-full h-full"></div>
          </div>
        </div>

        {/* Floating Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb-1 absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-r from-[#145FE2]/15 to-[#F8E180]/20 rounded-full blur-3xl"></div>
          <div className="floating-orb-2 absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-[#F8E180]/15 to-[#145FE2]/10 rounded-full blur-3xl"></div>
          <div className="floating-orb-3 absolute -bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-[#145FE2]/20 to-[#F8E180]/15 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right corner decoration */}
          <div className={`absolute top-20 right-20 transform transition-all duration-2000 delay-500 ${isVisible ? 'opacity-60 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'}`}>
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-[#F8E180]/60 rounded-lg rotate-45 animate-pulse"></div>
              <div className="absolute inset-2 border border-[#145FE2]/50 rounded rotate-45 animate-spin-slow"></div>
            </div>
          </div>
          
          {/* Bottom left corner decoration */}
          <div className={`absolute bottom-20 left-20 transform transition-all duration-2000 delay-700 ${isVisible ? 'opacity-60 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#145FE2]/15 to-[#F8E180]/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-[#F8E180]/20 to-[#145FE2]/15 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6 h-full">
          <div className="flex flex-col justify-center min-h-[70vh] py-12">
            
            {/* New Layout: Stacked with Better Visual Hierarchy */}
            <div className="max-w-7xl mx-auto w-full">
              
              {/* Top Section: Title with Decorative Elements */}
              <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                
                {/* Decorative top line */}
                <div className={`mx-auto mb-8 h-1 bg-gradient-to-r from-transparent via-[#145FE2] to-transparent rounded-full transition-all duration-1000 delay-300 ${
                  isVisible ? 'w-32' : 'w-0'
                }`}></div>
                
                {/* Main Headline */}
                <h1 className="text-balance text-4xl font-black tracking-tight leading-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
                  <span className="block">
                    <span className="bg-gradient-to-r from-neutral-900 via-[#145FE2] to-[#F8E180] bg-clip-text text-transparent">
                      Change the way
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#F8E180] via-[#145FE2] to-neutral-900 bg-clip-text text-transparent">
                      you carry everyday.
                    </span>
                  </span>
                </h1>
                
                {/* Subtitle */}
                {/* <div className={`max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                    Discover a new dimension of style and functionality
                  </p>
                </div> */}
                
                {/* Bottom decorative line */}
                <div className={`mx-auto mt-8 h-1 bg-gradient-to-r from-transparent via-[#F8E180] to-transparent rounded-full transition-all duration-1000 delay-700 ${
                  isVisible ? 'w-24' : 'w-0'
                }`}></div>
              </div>

              {/* Bottom Section: Illustration with Enhanced Container */}
              <div className={`flex justify-center transform transition-all duration-1200 delay-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <div className="relative group">
                  
                  {/* Multi-layer backdrop effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-[#145FE2]/10 via-[#F8E180]/5 to-[#145FE2]/10 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F8E180]/15 to-[#145FE2]/15 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Main illustration container */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F8E180]/20 to-[#145FE2]/10 rounded-3xl"></div>
                    
                    {/* Image */}
                    <div className="relative">
                      {graphicSrc && (
                        <Image
                          src={graphicSrc}
                          alt="Seize the day illustration"
                          width={400}
                          height={140}
                          className="h-auto w-[280px] md:w-[400px] filter drop-shadow-2xl"
                          priority
                        />
                      )}
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse delay-500"></div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-indigo-200/40 rounded rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border border-purple-200/40 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Orbiting elements around the container */}
                  <div className="absolute top-1/4 -left-8 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-1/4 -right-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill="white" fillOpacity="0.8"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Global Styles */}
      <style jsx global>{`
        @keyframes mesh-animation {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%; 
            filter: hue-rotate(30deg);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(-3deg); 
          }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-8px) scale(1.1);
          }
        }
        
        .mesh-bg {
          background: linear-gradient(45deg, 
            rgba(99, 102, 241, 0.1) 0%, 
            rgba(168, 85, 247, 0.1) 25%, 
            rgba(59, 130, 246, 0.1) 50%, 
            rgba(147, 51, 234, 0.1) 75%, 
            rgba(99, 102, 241, 0.1) 100%);
          background-size: 400% 400%;
          animation: mesh-animation 12s ease-in-out infinite;
        }
        
        .floating-orb-1 {
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-orb-2 {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .floating-orb-3 {
          animation: float 12s ease-in-out infinite reverse;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        /* Custom shadow utilities */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default SectionSubHeader;