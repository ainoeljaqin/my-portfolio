import React from 'react';
import { Download, User, MapPin, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { personalInfo, skills, experience, education } from '../data/mockData';

const ProfileInfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30">
      <Icon className="text-teal-accent" size={20} />
      <div>
        <p className="text-grey text-sm font-mono uppercase tracking-wider">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
};

const SkillsSection = ({ title, skillsList }) => {
  return (
    <div className="mb-6">
      <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm bg-teal-accent/10 text-teal-accent border border-teal-accent/30 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ exp }) => {
  return (
    <div className="mb-6 p-4 bg-dark-grey/10 rounded-lg border border-dark-grey/30">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-white font-semibold">{exp.title}</h4>
        <span className="text-grey text-sm font-mono">{exp.period}</span>
      </div>
      <p className="text-teal-accent font-mono text-sm uppercase tracking-wider mb-2">{exp.role}</p>
      <p className="text-grey text-sm mb-2">{exp.description}</p>
      <p className="text-white text-sm">{exp.details}</p>
    </div>
  );
};

const Profile = () => {
  const handleDownloadCV = () => {
    // Create a link element to download the actual CV
    const link = document.createElement('a');
    link.href = '/assets/Muhammad-Ainul-Yaqin-resume.pdf'; // Updated to actual CV filename
    link.download = 'Muhammad-Ainul-Yaqin-resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-teal-accent to-white bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-grey text-lg max-w-2xl mx-auto mb-8">
            Here's a quick overview of my professional journey and qualifications.
          </p>
          
          <div className="mb-8">
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 bg-teal-accent text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-teal-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-accent/20"
            >
              <Download size={18} />
              Download CV (PDF)
            </button>
          </div>
          
          {/* Note about PDF */}
          <div className="bg-teal-accent/10 border border-teal-accent/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-teal-accent font-mono text-sm">
              ✅ <strong>CV Ready:</strong> Your actual resume is now integrated and ready for download!
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Basic Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-6">Basic Information</h2>
            
            <div className="space-y-4">
              <ProfileInfoCard 
                icon={User}
                label="Name"
                value={personalInfo.name}
              />
              
              <ProfileInfoCard 
                icon={GraduationCap}
                label="Title"
                value={personalInfo.title}
              />
              
              <ProfileInfoCard 
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
              />
              
              <ProfileInfoCard 
                icon={Mail}
                label="Email"
                value={personalInfo.email}
              />
              
              <ProfileInfoCard 
                icon={Github}
                label="GitHub"
                value={personalInfo.github}
              />
              
              <ProfileInfoCard 
                icon={Linkedin}
                label="LinkedIn"
                value={personalInfo.linkedin}
              />
            </div>
          </div>
          
          {/* Skills & Experience */}
          <div className="lg:col-span-2 space-y-12">
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillsList]) => (
                  <div key={category} className="bg-dark-grey/10 rounded-lg p-6 border border-dark-grey/30">
                    <SkillsSection title={category} skillsList={skillsList} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Experience & Projects Summary</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-accent mb-4">Academic & Research</h3>
                  {experience.map((exp, index) => (
                    <ExperienceItem key={index} exp={exp} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Education</h2>
              <div className="bg-dark-grey/10 rounded-lg p-6 border border-dark-grey/30">
                <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
                <p className="text-teal-accent font-mono text-sm uppercase tracking-wider mb-2">{education.institution}</p>
                <p className="text-grey mb-2">{education.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-white">Expected Graduation: {education.expectedGraduation}</p>
                  <p className="text-teal-accent font-semibold">GPA: {education.gpa}</p>
                </div>
                <div>
                  <span className="text-white font-mono text-sm">Relevant Courses:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {education.relevantCourses.map((course, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-teal-accent/10 text-teal-accent border border-teal-accent/30 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CV Download Section */}
        <div className="text-center mt-16 py-12 border-t border-dark-grey/30">
          <h2 className="text-2xl font-semibold text-white mb-4">📄 Download My CV</h2>
          <p className="text-grey mb-6">
            Get a comprehensive overview in ATS-friendly PDF format
          </p>
          <button 
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 bg-teal-accent text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider hover:bg-teal-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-accent/20"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;