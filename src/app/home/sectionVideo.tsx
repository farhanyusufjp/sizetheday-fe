'use client';

import React, { useEffect, useRef, useState } from 'react';

interface VideoGiftProps {
  videoSrcMp4: string;
  videoSrcWebm?: string;
  posterSrc?: string;
  caption?: string;
  className?: string;
}

const VideoGiftPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <VideoGift
        videoSrcMp4="/assets/videos/gift-sample.mp4"
        videoSrcWebm="/assets/videos/gift-sample.webm"
        posterSrc="/assets/videos/gift-poster.jpg"
        caption="SORA — Let color be your voice."
        className=""
      />
    </main>
  );
};

const VideoGift: React.FC<VideoGiftProps> = ({
  videoSrcMp4,
  videoSrcWebm,
  posterSrc,
  caption,
  className = '',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setIsVisible(e.isIntersecting));
      },
      { threshold: 0.25 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Autoplay control ketika terlihat / tidak
    if (isVisible) {
      const play = async () => {
        try {
          await v.play();
        } catch {
          // Jika autoplay keganjel policy, biarkan silent (muted + controls off)
        }
      };
      play();
    } else {
      v.pause();
    }
  }, [isVisible]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative ${className}`}
        aria-label="Video Gift Section"
      >
        {/* MOBILE: Full-bleed, tinggi penuh layar, rasio 9:16 */}
        <div className="block md:hidden">
          <div className="relative w-full h-[100svh]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              muted
              loop
              autoPlay
              poster={posterSrc}
              preload="metadata"
            >
              {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
              <source src={videoSrcMp4} type="video/mp4" />
              {/* Fallback minimal */}
            </video>

            {/* Optional gradient overlay biar teks terbaca */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

            {/* Caption (opsional) */}
            {caption && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/95 text-sm font-medium drop-shadow">
                  {caption}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP/TABLET: Card rapi, rasio 16:9 di tengah */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-2xl backdrop-blur-sm`}
              style={{
                // rasio 16:9; tinggi nyaman ~70vh tapi dibatasi max
                aspectRatio: '16 / 9',
                maxHeight: '72vh',
              }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                muted
                loop
                autoPlay
                poster={posterSrc}
                preload="metadata"
              >
                {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
                <source src={videoSrcMp4} type="video/mp4" />
              </video>

              {/* Soft edges vignette (opsional) */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5" />

              {/* Caption */}
              {caption && (
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-slate-900/95 text-base font-semibold bg-white/70 backdrop-blur px-3 py-1.5 rounded-full inline-block shadow">
                    {caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* extras minor */}
      <style jsx global>{`
        /* Untuk iOS Safari biar address bar nggak ganggu tinggi: pakai 100svh di atas */
      `}</style>
    </>
  );
};

export default VideoGiftPage;
