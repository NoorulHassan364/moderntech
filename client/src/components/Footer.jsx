import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                TechCorp
              </a>
            </Link>
            <p className="text-foreground/70">
              Innovative software solutions for the modern world. Building tomorrow's technology today.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/#services">Services</FooterLink>
              <FooterLink href="/#about">About Us</FooterLink>
              <FooterLink href="/#portfolio">Portfolio</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/#web-development">Web Development</FooterLink>
              <FooterLink href="/#mobile-apps">Mobile Apps</FooterLink>
              <FooterLink href="/#cloud-services">Cloud Services</FooterLink>
              <FooterLink href="/#ai-solutions">AI Solutions</FooterLink>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
            </div>
            <div className="flex items-center space-x-2 text-foreground/70">
              <Mail className="w-4 h-4" />
              <span>contact@techcorp.com</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border/40"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/70">
              © {currentYear} TechCorp. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-foreground/70">
              <Link href="/privacy">
                <a className="hover:text-foreground transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-foreground transition-colors">Terms of Service</a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a className="text-foreground/70 hover:text-foreground transition-colors">
        {children}
      </a>
    </Link>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors"
  >
    {icon}
  </a>
);
