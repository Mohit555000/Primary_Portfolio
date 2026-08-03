import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navItems = ['About', 'Projects', 'Education', 'Contact'];
  
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-lg font-display font-bold text-primary"
            onClick={handleNavClick}
          >
            MG
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 shadow-xl">
            <div className="flex flex-col p-6 pt-20 gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-primary hover:text-accent py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;