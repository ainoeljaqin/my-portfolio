import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Gamepad2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const MatrixEffect = () => {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = new Array(columns).fill(0);
    
    const interval = setInterval(() => {
      const newMatrix = drops.map((drop, i) => {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        drops[i] = drops[i] * 20 > window.innerHeight && Math.random() > 0.975 ? 0 : drops[i] + 1;
        return {
          char,
          x: i * 20,
          y: drops[i] * 20,
          opacity: Math.random() * 0.3 + 0.1
        };
      });
      setMatrix(newMatrix);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {matrix.map((drop, i) => (
        <div
          key={i}
          className="absolute text-teal-accent font-mono text-sm"
          style={{
            left: drop.x,
            top: drop.y,
            opacity: drop.opacity,
            transform: 'translateZ(0)'
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

const TypewriterText = ({ text, delay = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayedText}
      <span className={`inline-block w-0.5 h-6 bg-teal-accent ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
    </span>
  );
};

const Home = () => {
  const handleScrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixEffect />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-white via-grey to-white bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          
          <div className="text-xl md:text-2xl text-grey mb-12 h-8">
            <TypewriterText text={personalInfo.title} delay={80} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={handleScrollToProjects}
              className="bg-teal-accent text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-teal-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-accent/20 min-w-[180px]"
            >
              View Projects
            </button>
            
            <button
              onClick={handleScrollToContact}
              className="border border-grey text-white px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:border-teal-accent hover:text-teal-accent transition-all duration-300 hover:scale-105 min-w-[180px]"
            >
              Contact Me
            </button>
          </div>
          
          <ChevronDown 
            className="animate-bounce text-grey hover:text-teal-accent transition-colors cursor-pointer mx-auto" 
            size={32} 
            onClick={handleScrollToProjects}
          />
        </div>
      </section>
      
      {/* Quick Highlight Banner */}
      <section className="py-20 bg-gradient-to-r from-black via-dark-grey/5 to-black border-y border-dark-grey/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-normal text-white leading-relaxed">
              "{personalInfo.tagline}"
            </blockquote>
            
            <div className="flex justify-center items-center gap-8 mt-12">
              <div className="flex items-center gap-3 text-grey">
                <Code size={24} className="text-teal-accent" />
                <span className="font-mono text-sm uppercase tracking-wider">Backend</span>
              </div>
              <div className="flex items-center gap-3 text-grey">
                <Gamepad2 size={24} className="text-teal-accent" />
                <span className="font-mono text-sm uppercase tracking-wider">Games</span>
              </div>
              <div className="flex items-center gap-3 text-grey">
                <BookOpen size={24} className="text-teal-accent" />
                <span className="font-mono text-sm uppercase tracking-wider">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;