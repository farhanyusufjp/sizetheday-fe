    'use client';

    import React from 'react';

    type Testimonial = {
    name: string;
    text: string;
    rating?: number; // 1–5
    };

    interface SectionTestimonialsProps {
    title?: string;
    items?: Testimonial[];
    }

    function StarRating({ value = 5 }: { value?: number }) {
    const stars = Array.from({ length: 5 }, (_, i) => i < value);
    return (
        <div className="flex items-center gap-1 text-sm" aria-label={`${value} out of 5 stars`}>
        {stars.map((filled, idx) => (
            <svg
            key={idx}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${filled ? 'fill-current' : 'fill-transparent'} text-black`}
            aria-hidden="true"
            >
            <path
                d="M10 1.5l2.6 5.28 5.83.85-4.22 4.11.99 5.78L10 14.9l-5.2 2.62.99-5.78L1.56 7.63l5.83-.85L10 1.5z"
                stroke="currentColor"
                strokeWidth="1"
            />
            </svg>
        ))}
        </div>
    );
    }

    const SectionTestimonials: React.FC<SectionTestimonialsProps> = ({
    title = 'What they said:',
    items = [
        {
        name: 'AGUS',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        rating: 5,
        },
        {
        name: 'BUDI',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        rating: 5,
        },
        {
        name: 'SITI',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        rating: 5,
        },
    ],
    }) => {
    return (
      <section className="bg-white">
  <div className="container">
    <h2 className="mb-8 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
      {title}
    </h2>

    <div className="grid gap-7 md:grid-cols-3">
      {items.map((t, i) => (
        <article
          key={i}
          className="rounded-md border border-neutral-200 bg-[#F8E180]/70 p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]"
        >
          <StarRating value={t.rating ?? 5} />
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            {t.text}
          </p>
          <p className="mt-6 font-semibold tracking-wide">{t.name}</p>
        </article>
      ))}
    </div>
        <div className='mt-16 h-px w-full bg-neutral-300' />

  </div>
  
</section>



    );
    
    };

    export default SectionTestimonials;
