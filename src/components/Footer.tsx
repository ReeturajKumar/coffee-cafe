import { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-forest w-full pt-16 md:pt-20 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-white text-[20px] font-black tracking-tight">
              Bean Haven Café
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/80 font-medium text-[15px]">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
            <a href="#" className="hover:text-white transition-colors">Career</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-forest hover:scale-110 transition-transform"
              >
                <div className="w-5 h-5">
                  {i === 1 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03.28-1.5 1.5-1.5h2V2.14c-.35-.04-1.08-.14-2.2-.14C13.1 2 11 3.4 11 6.37v3.13H8v4h3v9h3v-9z"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                  {i === 3 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                  {i === 4 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                  {i === 5 && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186c-.272-1.033-1.078-1.84-2.091-2.113C19.566 3.655 12 3.655 12 3.655S4.433 3.655 2.593 4.073c-1.013.272-1.819 1.08-2.09 2.113C.25 8.046.25 12 .25 12s0 3.954.253 5.814c.271 1.033 1.077 1.84 2.09 2.113 1.84.418 9.407.418 9.407.418s7.567 0 9.407-.418c1.013-.273 1.819-1.08 2.091-2.113.253-1.86.253-5.814.253-5.814s0-3.954-.253-5.814zM9.75 15.56V8.44L15.906 12 9.75 15.56z"/></svg>}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[13px] md:text-[14px] text-white/50 text-center md:text-left">
          <p>
            {new Date().getFullYear()} Bean Haven Cafe. All right reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
