import { type FC } from 'react';

const TrustBar: FC = () => {
  const logos = [
    'Webflow',
    'CAFE BABEL',
    'Coffee #1',
    'JACOBS',
    'THE COFFEE HOUSE',
    'COSO COFI',
    'Webflow',
    'CAFE BABEL',
    'Coffee #1',
    'JACOBS',
    'THE COFFEE HOUSE',
    'COSO COFI',
  ];

  return (
    <section className="bg-gold w-full py-4 md:py-8 overflow-hidden relative border-y-2 border-forest/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20 px-6 md:px-12">
        {/* Title Side */}
        <div className="flex-shrink-0 z-20 bg-gold md:pr-16 relative w-full md:w-auto text-center md:text-left">
          <h3 className="text-forest font-black uppercase text-[12px] sm:text-[14px] md:text-[1.4vw] lg:text-[1.6vw] leading-[1.1] tracking-tighter">
            TRUSTED BY MANY CAFE <br className="hidden md:block" /> EVERYWHERE
          </h3>
        </div>

        {/* Marquee Side */}
        <div className="flex-1 overflow-hidden relative w-full">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-8 md:gap-20 grayscale opacity-90 group hover:grayscale-0 transition-all duration-700">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-forest font-black uppercase text-[18px] sm:text-[22px] md:text-[2vw] tracking-tighter select-none px-4">
                {logo}
              </span>
            ))}
          </div>
          
          {/* Fades for smooth edge blending */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gold via-gold/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gold via-gold/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
