import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
interface NavbarUAProps {
  onLanguageChange: (lang: 'en' | 'ua') => void;
}
export function NavbarUA({ onLanguageChange }: NavbarUAProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(250, 248, 245, 0)', 'rgba(250, 248, 245, 0.8)']
  );
  const navBackdrop = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Місія',
    href: '#mission'
  },
  {
    name: 'Послуги',
    href: '#services'
  },
  {
    name: 'Підхід',
    href: '#approach'
  },
  {
    name: 'Вплив',
    href: '#impact'
  }];

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBackdrop,
        borderBottom: `1px solid`,
        borderColor: navBorder
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-xl font-bold text-navy-500 tracking-tight leading-tight">
                Mind+Heart <span className="text-sage-400">Collaboration</span>
              </span>
              <span className="text-[10px] sm:text-xs text-navy-400/70 tracking-widest uppercase leading-tight mt-0.5">
                Технології з серцем
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-navy-400 hover:text-sage-400 transition-colors duration-200">

                {link.name}
              </a>
            )}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-navy-500/10 pl-6 ml-2">
              <button
                onClick={() => onLanguageChange('en')}
                className="text-sm font-medium text-navy-400/60 hover:text-navy-500 transition-colors">

                EN
              </button>
              <span className="text-navy-400/30">/</span>
              <button className="text-sm font-bold text-navy-500" disabled>
                UA
              </button>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-navy-500 text-white text-sm font-medium rounded-full hover:bg-navy-400 transition-colors duration-300 shadow-lg shadow-navy-500/20">

              Зв'язатися
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('en')}
                className="text-xs font-medium text-navy-400/60">

                EN
              </button>
              <span className="text-navy-400/30 text-xs">/</span>
              <span className="text-xs font-bold text-navy-500">UA</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-500 p-2"
              aria-label="Toggle menu">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        className="md:hidden absolute top-20 left-0 right-0 bg-cream-100 border-b border-white/50 shadow-xl p-4 flex flex-col space-y-4">

          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="text-base font-medium text-navy-500 hover:text-sage-400 py-2 border-b border-sage-100"
          onClick={() => setIsMobileMenuOpen(false)}>

              {link.name}
            </a>
        )}
          <a
          href="#contact"
          className="w-full text-center px-5 py-3 bg-navy-500 text-white font-medium rounded-lg hover:bg-navy-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}>

            Зв'язатися
          </a>
        </motion.div>
      }
    </motion.nav>);

}