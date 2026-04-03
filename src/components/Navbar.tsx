import { type FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Stories', active: false },
    { name: 'Coffee', active: false },
    { name: 'Equipment', active: true },
    { name: 'Store', active: false },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-forest/80 backdrop-blur-xl py-2 border-white/5 shadow-2xl' 
            : 'bg-transparent py-4 md:py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
            <span className="text-white text-[16px] md:text-[22px] font-wide tracking-tight uppercase whitespace-nowrap">
              Bean Haven Café
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-10 text-[10px] font-black text-white/50 tracking-[0.2em] uppercase">
              {menuItems.map((item) => (
                <a 
                  key={item.name}
                  className={`hover:text-gold transition-all duration-300 relative group py-2 ${
                    item.active ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${item.active ? 'scale-x-100' : ''}`} />
                </a>
              ))}
            </div>
            
            <button className="bg-white text-forest px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase hover:bg-gold hover:text-forest hover:scale-105 active:scale-95 transition-all shadow-xl">
              Order Now
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
             <button className="hidden md:block bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-black tracking-[0.1em] uppercase border border-white/20 hover:bg-white/20 transition-colors shrink-0">
              Join
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 md:w-10 md:h-10 flex flex-col items-end justify-center gap-1.5 relative z-[110] group"
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-4 md:w-6 md:h-5 flex flex-col justify-between items-end">
                <motion.span 
                  animate={{ 
                    rotate: isOpen ? 45 : 0, 
                    y: isOpen ? (window.innerWidth < 768 ? 7.5 : 9) : 0,
                    width: isOpen ? (window.innerWidth < 768 ? "20px" : "24px") : (window.innerWidth < 768 ? "20px" : "24px")
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-[1.2px] md:h-[1.5px] bg-white block rounded-full origin-right transition-all"
                />
                <motion.span 
                  animate={{ 
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-3 md:w-4 h-[1.2px] md:h-[1.5px] bg-white/70 block rounded-full ml-auto transition-all"
                />
                <motion.span 
                  animate={{ 
                    rotate: isOpen ? -45 : 0, 
                    y: isOpen ? (window.innerWidth < 768 ? -7.5 : -9) : 0,
                    width: isOpen ? (window.innerWidth < 768 ? "20px" : "24px") : (window.innerWidth < 768 ? "15px" : "18px")
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-[1.2px] md:h-[1.5px] bg-white block rounded-full origin-right transition-all"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-forest/40 backdrop-blur-md z-[80]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-forest/95 border-l border-white/5 z-[90] p-10 flex flex-col"
            >
              <div className="mt-16 flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className={`text-[28px] font-wide tracking-tighter uppercase ${
                      item.active ? 'text-gold' : 'text-white/40 hover:text-white'
                    } transition-colors cursor-pointer`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-[9px] font-black text-white/30 tracking-widest uppercase mb-5">Experience Premium Coffee</p>
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-gold text-forest py-3.5 rounded-xl font-black text-[11px] tracking-widest uppercase shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all">
                    Order Now
                  </button>
                  <button className="w-full bg-white/5 border border-white/10 text-white py-3.5 rounded-xl font-black text-[11px] tracking-widest uppercase hover:bg-white/10 transition-all">
                    Find Store
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


