import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative h-[100dvh] md:min-h-screen w-full bg-forest overflow-hidden flex flex-col items-center justify-center md:justify-start pt-0 md:pt-12">

      {/* 2. Headline Layer (Positioned high and massive) */}
      <div className="absolute top-[15%] sm:top-[20%] md:top-[12%] lg:top-[8%] w-full flex flex-col items-center select-none pointer-events-none z-10 px-4">
        <h1 className="text-[clamp(50px,20vw,14vw)] md:text-[14vw] leading-[0.9] md:leading-[1] font-wide text-[#F9F5EB] uppercase text-center tracking-[-0.05em] drop-shadow-2xl">
          EXPRESSO
        </h1>
        <h1 className="text-[clamp(50px,20vw,14vw)] md:text-[14vw] leading-[0.7] font-wide text-gold uppercase text-center tracking-[-0.05em] drop-shadow-2xl mt-[-3vw] md:mt-[-2vw]">
          YOURSELF
        </h1>
      </div>

      {/* 3. Central Backdrop & Coffee Glass */}
      <div className="relative flex items-center justify-center w-full max-w-7xl z-30 px-4 mt-20 md:mt-auto mb-[-5%] md:mb-[-4%] translate-y-[10%] md:translate-y-0">
        
        {/* Main Product Image */}
        <div className="relative pointer-events-auto group">
             <img 
             src="/iced_coffee.png" 
             alt="Iced Coffee" 
             draggable="false"
             className="relative w-[120dvw] sm:w-[90dvw] md:w-[95dvw] max-w-none md:max-w-[1200px] h-auto pointer-events-none z-20 drop-shadow-[0_60px_120px_rgba(0,0,0,0.8)] -translate-y-12 md:-translate-y-12 select-none" 
            />
        </div>

        {/* 4. Tilted Yellow Ribbons */}
        <div className="absolute w-[280%] md:w-[180%] h-[40px] md:h-[50px] bg-gold rotate-[-4deg] top-[85%] md:top-[55%] z-[25] flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] pointer-events-none overflow-hidden">
           <div className="flex whitespace-nowrap gap-8 md:gap-12">
              {[...Array(6)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex whitespace-nowrap gap-6 md:gap-12">
                   {['CAPPUCCINO', 'DOPPIO', 'GALAO', 'MOCHA', 'LATTE', 'ESPRESSO'].map((name, i) => (
                    <div key={name + i + groupIndex} className="flex items-center gap-2 md:gap-4">
                        <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-forest rounded-sm" />
                        <span className="text-lg md:text-xl font-wide text-forest tracking-tighter uppercase">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
           </div>
        </div>

        <div className="absolute w-[280%] md:w-[180%] h-[40px] md:h-[50px] bg-gold rotate-[4deg] top-[85%] md:top-[55%] z-[15] flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] pointer-events-none overflow-hidden">
           <div className="flex whitespace-nowrap gap-8 md:gap-12">
              {[...Array(8)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex whitespace-nowrap gap-6 md:gap-12">
                   {['PREMIUM COFFEE', 'PURE BLEND', 'FRESH ROAST', 'COLD BREW'].map((name, i) => (
                    <div key={name + i + groupIndex} className="flex items-center gap-2 md:gap-4">
                        <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-forest rounded-sm" />
                        <span className="text-lg md:text-xl font-wide text-forest tracking-tighter uppercase">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
           </div>
        </div>
      </div>





      {/* 6. Product Previews (Right Side) */}
      <div className="hidden md:flex absolute right-6 md:right-13 top-[20%] flex-col items-end gap-10 z-40">
         
         <div className="flex flex-col gap-6">
            {['/vanilla_perfect.png', '/caramel_perfect.png', '/chocolate_perfect.png'].map((img, i) => (
              <div key={i} className="w-16 h-16 rounded-2xl transition-all duration-500 cursor-pointer shadow-xl overflow-hidden group">
                 <img 
                  src={img}
                  alt={`Flavor ${i}`} 
                  draggable="false"
                  className="w-full h-full object-contain group-hover:scale-125 transition-transform select-none" 
                  />
              </div>
            ))}
         </div>
      </div>

      {/* 7. Center Left Seal Section */}
      <div className="hidden md:flex absolute left-10 top-[40%] -translate-y-1/2 z-40 items-center gap-6">
         <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center scale-90 md:scale-100">
            {/* Outer spinning dotted ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" />
            
            {/* Inner static circle */}
            <div className="w-[85%] h-[85%] rounded-full bg-white flex flex-col items-center justify-center p-2 md:p-3 text-center z-10">
               <span className="text-[6px] md:text-[8px] font-black text-forest uppercase leading-none mb-0.5">COFFEE SHOP</span>
               <div className="w-4 md:w-6 h-[1px] bg-forest/20 mb-0.5" />
               <span className="text-[8px] md:text-[10px] font-heading font-black text-forest">PREMIUM</span>
            </div>
         </div>
      </div>

      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-13 z-20 w-full md:max-w-[250px] text-center md:text-right pointer-events-none px-6">
         <p className="text-[10px] md:text-[10px] italic font-bold text-white/40 md:text-white/30 leading-relaxed uppercase tracking-[0.25em] md:tracking-wider">
          Premium beans. Roasted daily. Shared locally.
         </p>
      </div>
    </div>
  );
};

export default Hero;
