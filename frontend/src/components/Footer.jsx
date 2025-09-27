import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-dark-grey/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-3">Ainul.</h3>
            <p className="text-grey text-sm">
              Backend Developer • Game Developer • Researcher
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-grey hover:text-teal-accent transition-colors">Home</a></li>
              <li><a href="/projects" className="text-grey hover:text-teal-accent transition-colors">Projects</a></li>
              <li><a href="/about" className="text-grey hover:text-teal-accent transition-colors">About</a></li>
              <li><a href="/blog" className="text-grey hover:text-teal-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-grey hover:text-teal-accent transition-colors p-2 rounded-full border border-dark-grey/30 hover:border-teal-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`https://${personalInfo.github}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-grey hover:text-teal-accent transition-colors p-2 rounded-full border border-dark-grey/30 hover:border-teal-accent"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={`https://${personalInfo.linkedin}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-grey hover:text-teal-accent transition-colors p-2 rounded-full border border-dark-grey/30 hover:border-teal-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-dark-grey/30 text-center">
          <p className="text-grey text-sm">
            © 2025 Muhammad Ainul Yaqin — Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;