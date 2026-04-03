// Refined Recent Products Section
import { type FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import img1 from "/coffee_bag.png"
import img2 from "/img2.webp"
import img3 from "/img3.webp"
import img4 from "/img4.webp"


const OurCoffee: FC = () => {
  const products = [
    {
      name: 'Gayo Tangkengon',
      category: 'Arabica',
      price: '$43',
      rating: 4,
      image: img1
    },
    {
      name: 'Bali Kintamani',
      category: 'Arabica',
      price: '$52',
      rating: 4,
      image: img2
    },
    {
      name: 'Flores Manggarai',
      category: 'Robusta',  
      price: '$48',
      rating: 4,
      image: img3
    },
    {
      name: 'Gunung Tanggamus',
      category: 'Robusta',
      price: '$49',
      rating: 5,
      image: img4
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#fcf4ee] w-full pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-12 relative">
      <motion.div 
        className="max-w-[1550px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          <div className="flex flex-col items-start text-left gap-3 max-w-[800px]">
            <motion.h2 
              variants={itemVariants}
              className="text-[32px] sm:text-[40px] md:text-[2.2vw] font-wide text-dark-brown leading-[1.1]"
            >
              Explore Recent Products
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[14px] md:text-[0.95vw] font-medium text-dark-brown/60 uppercase tracking-widest"
            >
              THE LATEST ADDITIONS TO OUR COLLECTION
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-4 border border-forest/40 rounded-full text-forest font-black text-[13px] md:text-[0.85vw] uppercase tracking-[0.2em] hover:bg-forest hover:text-[#fcf4ee] transition-all whitespace-nowrap shadow-sm cursor-pointer"
            >
              All Products
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          {products.map((product, idx) => (
            <motion.div key={idx} className="flex flex-col items-center group cursor-pointer" variants={itemVariants}>
              {/* Product Image with Circle BG */}
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center mb-4 mx-auto">
                <div className="absolute inset-12 bg-dark-brown/5 rounded-full text-center flex items-center justify-center"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-[110%] h-[110%] object-contain relative z-10" 
                />
                
                {/* Floating Arrow Button */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-forest rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500 shadow-2xl z-20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-8 h-8">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-center gap-1.5 md:gap-2">
                <span className="text-[10px] md:text-[12px] font-bold text-dark-brown/40 uppercase tracking-[0.25em]">
                  {product.category}
                </span>
                <h3 className="text-[18px] sm:text-[22px] md:text-[1.2vw] font-black text-dark-brown leading-tight text-center">
                  {product.name}
                </h3>
                
                {/* Coffee Bean Rating Icons */}
                <div className="flex gap-1.5 my-1.5 md:my-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 md:w-3.5 h-4 md:h-4.5 rounded-full rotate-45 ${i < product.rating ? 'bg-dark-brown/80' : 'bg-dark-brown/10'}`} 
                      style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    >
                      <div className="w-[1px] h-full bg-cream/30 mx-auto transform -rotate-12"></div>
                    </div>
                  ))}
                </div>

                <p className="text-[18px] sm:text-[20px] md:text-[1.4vw] font-wide text-dark-brown">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurCoffee;
