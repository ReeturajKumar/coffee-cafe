import { type FC } from 'react';
import { motion } from 'framer-motion';

const StoreStats: FC = () => {
  return (
    <section className="bg-cream w-full py-8 px-10 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Stats Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-10">
            <h2 className="text-[12vw] lg:text-[8vw] font-black text-dark-brown leading-none">
              48
            </h2>
            <p className="text-[20px] md:text-[1.8vw] font-bold text-dark-brown mt-2 uppercase tracking-tighter">
              Offline Store in This Country
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[550px]">
            {/* Employees */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-dark-brown opacity-80">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[18px] font-black text-dark-brown mb-2 tracking-tight uppercase">
                  120 Employees
                </h4>
                <p className="text-dark-brown/60 text-[14px] leading-snug">
                  Our passionate team is dedicated to providing you with the finest coffee and service every day.
                </p>
              </div>
            </div>

            {/* Business Years */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-dark-brown opacity-80">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[18px] font-black text-dark-brown mb-2 tracking-tight uppercase">
                  10 Years in Business
                </h4>
                <p className="text-dark-brown/60 text-[14px] leading-snug">
                  Celebrating 10 years of delivering premium quality and exceptional experiences worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Map Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex items-center justify-center"
        >
          <img 
            src="/map.webp" 
            alt="Store Locations Map" 
            className="w-[90%] h-[50%] md:w-[80%] object-contain mx-auto" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StoreStats;
