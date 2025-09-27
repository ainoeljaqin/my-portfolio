import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for static form submission
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24" id="contact">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-teal-accent to-white bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-grey text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Let's Connect</h2>
              <p className="text-grey leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
              
              <div className="bg-teal-accent/10 border border-teal-accent/30 rounded-lg p-4 mb-8">
                <p className="text-teal-accent font-mono text-sm">
                  💡 <strong>Note:</strong> To use the contact form, replace 'your-form-id' in the code with your actual Formspree form ID.
                </p>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30 hover:border-teal-accent/50 transition-colors">
                <Mail className="text-teal-accent" size={20} />
                <div>
                  <p className="text-grey text-sm font-mono uppercase tracking-wider">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-teal-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30 hover:border-teal-accent/50 transition-colors">
                <Github className="text-teal-accent" size={20} />
                <div>
                  <p className="text-grey text-sm font-mono uppercase tracking-wider">GitHub</p>
                  <a 
                    href={`https://${personalInfo.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-accent transition-colors"
                  >
                    {personalInfo.github}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30 hover:border-teal-accent/50 transition-colors">
                <Linkedin className="text-teal-accent" size={20} />
                <div>
                  <p className="text-grey text-sm font-mono uppercase tracking-wider">LinkedIn</p>
                  <a 
                    href={`https://${personalInfo.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-accent transition-colors"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30">
                <MapPin className="text-teal-accent" size={20} />
                <div>
                  <p className="text-grey text-sm font-mono uppercase tracking-wider">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30">
                <Clock className="text-teal-accent" size={20} />
                <div>
                  <p className="text-grey text-sm font-mono uppercase tracking-wider">Response Time</p>
                  <p className="text-white">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider text-grey mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-grey/20 border border-dark-grey/30 rounded-lg text-white placeholder-grey focus:border-teal-accent focus:outline-none focus:ring-1 focus:ring-teal-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider text-grey mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-grey/20 border border-dark-grey/30 rounded-lg text-white placeholder-grey focus:border-teal-accent focus:outline-none focus:ring-1 focus:ring-teal-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-mono uppercase tracking-wider text-grey mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-grey/20 border border-dark-grey/30 rounded-lg text-white placeholder-grey focus:border-teal-accent focus:outline-none focus:ring-1 focus:ring-teal-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono uppercase tracking-wider text-grey mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-grey/20 border border-dark-grey/30 rounded-lg text-white placeholder-grey focus:border-teal-accent focus:outline-none focus:ring-1 focus:ring-teal-accent transition-colors resize-vertical"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-teal-accent/10 border border-teal-accent/30 rounded-lg">
                  <p className="text-teal-accent font-mono text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-mono text-sm">
                    ✗ Failed to send message. Please try again or contact me directly via email.
                  </p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-teal-accent text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-teal-accent/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              
              <p className="text-grey text-xs text-center">
                Form powered by Formspree - configure your form ID to enable submissions
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;