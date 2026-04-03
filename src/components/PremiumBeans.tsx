import { type FC } from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 1 }, 
  visible: {
    opacity: 1, 
    transition: {
      staggerChildren: 0.25, 
      delayChildren: 0.3
    }
  }
};

const wordVariants: Variants = {
  hidden: { 
    color: "rgba(255, 255, 255, 0.15)", // Initially visible but dimmed (grey)
    transition: { duration: 0.5 }
  },
  visible: { 
    color: "rgba(255, 255, 255, 1)", // Solid 'white' reveal
    transition: { 
      duration: 0.1, // Near-instant per word once its turn starts
      staggerChildren: 0.05 
    } 
  }
};

const charVariants: Variants = {
  hidden: { color: "rgba(255, 255, 255, 0.15)" },
  visible: { color: "rgba(255, 255, 255, 1)" }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

interface AnimatedWordProps {
  word: string;
}

const AnimatedWord: FC<AnimatedWordProps> = ({ word }) => {
  return (
    <motion.span 
      variants={wordVariants}
      className="inline-block"
    >
      {word.split('').map((char, index) => (
        <motion.span 
          key={index}
          variants={charVariants}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const PremiumBeans: FC = () => {
  return (
    <section className="bg-forest w-full pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      <div className="max-w-[1550px] mx-auto text-center">
        <motion.h2 
          className="text-[11vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[7.5vw] font-wide uppercase tracking-tighter text-center leading-[1.05] md:leading-[1.05]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <AnimatedWord word="USE" />{" "}
          <motion.div variants={imageVariants} className="inline-block align-middle w-[18vw] md:w-[12vw] h-[9vw] md:h-[6vw] rounded-full overflow-hidden border border-white/20 shadow-2xl mx-[1vw]">
             <img src="/inline_coffee_brewing_1775200257253.png" className="w-full h-full object-cover" alt="" />
          </motion.div>{" "}
          <AnimatedWord word="PREMIUM" />{" "}
          
          <AnimatedWord word="ARABICA" />{" "}
          <motion.div variants={imageVariants} className="inline-block align-middle w-[16vw] md:w-[9vw] h-[10vw] md:h-[6vw] rounded-full overflow-hidden border border-white/20 shadow-2xl mx-[1vw]">
             <img src="/inline_coffee_beans_1775200293524.png" className="w-full h-full object-cover" alt="" />
          </motion.div>{" "}
          <AnimatedWord word="BEANS" />{" "}
          
          <AnimatedWord word="AND" />{" "}
          <motion.div variants={imageVariants} className="inline-block align-middle w-[24vw] md:w-[18vw] h-[10vw] md:h-[7vw] rounded-full overflow-hidden border border-white/20 shadow-2xl mx-[1vw]">
             <img src="/inline_coffee_brewing_1775200257253.png" alt="" className="w-full h-full object-cover" />
          </motion.div>{" "}
          <AnimatedWord word="FRESHLY" />{" "}
          
          <AnimatedWord word="GROUND" />{" "}
          <motion.div variants={imageVariants} className="inline-block align-middle w-[13vw] md:w-[8vw] h-[13vw] md:h-[8vw] rounded-full overflow-hidden border border-white/20 shadow-2xl mx-[1vw]">
             <img src="/inline_ground_spices_1775200312293.png" alt="" className="w-full h-full object-cover" />
          </motion.div>{" "}
          <AnimatedWord word="SPICES" />{" "}
          
          <AnimatedWord word="TO" />{" "}
          <motion.div variants={imageVariants} className="inline-block align-middle w-[12vw] md:w-[6vw] h-[12vw] md:h-[6vw] rounded-full overflow-hidden border border-white/20 shadow-2xl mx-[1vw]">
             <img src="/inline_ground_spices_1775200312293.png" alt="" className="w-full h-full object-cover" />
          </motion.div>{" "}
          <AnimatedWord word="ACHIEVE" />{" "}
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -45 },
              visible: { 
                opacity: 1, scale: 1, rotate: 0,
                transition: { type: 'spring', stiffness: 120, damping: 12 }
              }
            }}
            className="inline-flex align-middle items-center justify-center w-12 h-12 md:w-[5.5vw] md:h-[5.5vw] rounded-full bg-gold hover:rotate-45 transition-transform duration-300 cursor-pointer shadow-xl mx-[1vw]"
          >
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-[3vw] md:h-[3vw] text-forest">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="3" strokeLinecap="round" />
             </svg>
          </motion.div>{" "}
          
          <AnimatedWord word="AN" />{" "}
          <AnimatedWord word="UNDENIABLY" />{" "}
          <AnimatedWord word="RICH," />{" "}
          <AnimatedWord word="FLAVOURS" />{" "}
          <AnimatedWord word="COFFEE" />
        </motion.h2>
      </div>
    </section>
  );
};

export default PremiumBeans;
