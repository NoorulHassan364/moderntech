import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                TechCorp
              </a>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#services">{t('nav.services')}</NavLink>
            <NavLink href="/#about">{t('nav.about')}</NavLink>
            <NavLink href="/#portfolio">{t('nav.portfolio')}</NavLink>
            <NavLink href="/#contact">{t('nav.contact')}</NavLink>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-4">
            <MobileNavLink href="/#services" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.services')}
            </MobileNavLink>
            <MobileNavLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.about')}
            </MobileNavLink>
            <MobileNavLink href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.portfolio')}
            </MobileNavLink>
            <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.contact')}
            </MobileNavLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <a className="text-foreground/70 hover:text-foreground transition-colors duration-200">
      {children}
    </a>
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link href={href}>
    <a
      className="block px-4 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </a>
  </Link>
);