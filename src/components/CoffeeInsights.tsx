import { type FC } from 'react';
import { motion } from 'framer-motion';

const CoffeeInsights: FC = () => {
  const articles = [
    {
      id: 1,
      date: "20",
      month: "FEB",
      tag: "Insight",
      readTime: "5 min read",
      title: "The Art of Roasting: Crafting Pr...",
      desc: "Explore how expert roasting techniques elevate the flavor of premium beans, creating a sublime café experience.",
      img: "https://images.pexels.com/photos/2159129/pexels-photo-2159129.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2159129.jpg&fm=jpg"
    },
    {
      id: 2,
      date: "20",
      month: "FEB",
      tag: "Insight",
      readTime: "5 min read",
      title: "From Farm to Cup: The Journe...",
      desc: "Discover the meticulous process behind sourcing, roasting, and serving the finest coffee beans in our café.",
      img: "https://images.pexels.com/photos/702251/pexels-photo-702251.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
    },
    {
      id: 3,
      date: "20",
      month: "FEB",
      tag: "Insight",
      readTime: "5 min read",
      title: "Why Premium Beans Ma...",
      desc: "Learn how the quality of beans impacts the taste and overall enjoyment of your favorite café brews.",
      img: "https://images.pexels.com/photos/2159131/pexels-photo-2159131.jpeg"
    }
  ];

  return (
    <section className="bg-cream w-full py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8 md:gap-10">
          <div className="flex-1 text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[24px] sm:text-[28px] md:text-[2.5vw] font-black text-chocolate-brown leading-[1.1] mb-4"
            >
              Little Coffee Insight For You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-chocolate-brown/60 text-[14px] md:text-[16px] leading-relaxed max-w-[600px]"
            >
              Discover the stories and artistry behind every perfect brew.
            </motion.p>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block bg-gold text-white font-bold py-4 px-10 rounded-full self-start md:self-auto"
          >
            Explore Our Article
          </motion.button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-start gap-5 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-[24px] font-black text-chocolate-brown leading-none">{article.date}</span>
                  <span className="text-[12px] font-bold text-chocolate-brown/60 uppercase tracking-widest">{article.month}</span>
                </div>
                
                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-[12px] font-black uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-chocolate-brown/40 text-[12px] font-bold">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[20px] md:text-[22px] font-black text-chocolate-brown leading-tight mb-3">
                {article.title}
              </h3>
              <p className="text-dark-brown/60 text-[14px] leading-relaxed line-clamp-3">
                {article.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeInsights;
