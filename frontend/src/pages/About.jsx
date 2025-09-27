import React from 'react';
import { personalInfo, skills, experience, education } from '../data/mockData';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-dark-grey/10 rounded-lg p-6 border border-dark-grey/30 hover:border-teal-accent/50 transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
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

const ExperienceCard = ({ exp }) => {
  return (
    <div className="border-l-2 border-teal-accent/30 pl-6 pb-8 relative">
      <div className="absolute w-3 h-3 bg-teal-accent rounded-full -left-2 top-2"></div>
      <div className="text-sm text-grey font-mono uppercase tracking-wider mb-2">{exp.period}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
      <div className="text-teal-accent font-mono text-sm uppercase tracking-wider mb-3">{exp.role}</div>
      <p className="text-grey mb-2">{exp.description}</p>
      <p className="text-white text-sm">{exp.details}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-teal-accent to-white bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-grey text-lg max-w-2xl mx-auto">
            Get to know the person behind the code and the passion driving my work.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-dark-grey/10 rounded-lg p-8 border border-dark-grey/30 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-teal-accent/20 to-teal-accent/5 rounded-full flex items-center justify-center border border-teal-accent/30">
                <div className="text-6xl text-teal-accent">🧑‍💻</div>
              </div>
              
              <h2 className="text-2xl font-display font-bold text-white mb-2">{personalInfo.name}</h2>
              <p className="text-teal-accent font-mono text-sm uppercase tracking-wider mb-4">{personalInfo.title}</p>
              <p className="text-grey text-sm mb-6">📍 {personalInfo.location}</p>
              
              <div className="space-y-2 text-sm">
                <p className="text-grey">
                  <span className="text-white font-mono">Email:</span> {personalInfo.email}
                </p>
                <p className="text-grey">
                  <span className="text-white font-mono">GitHub:</span> {personalInfo.github}
                </p>
                <p className="text-grey">
                  <span className="text-white font-mono">LinkedIn:</span> {personalInfo.linkedin}
                </p>
              </div>
            </div>
          </div>
          
          {/* Bio & Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Bio</h2>
              <div className="space-y-4">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="text-grey leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <SkillCard key={category} title={category} skills={skillList} />
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Experience & Projects</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
              <div className="bg-dark-grey/10 rounded-lg p-6 border border-dark-grey/30">
                <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
                <p className="text-teal-accent font-mono text-sm uppercase tracking-wider mb-2">{education.institution}</p>
                <p className="text-grey mb-4">Expected Graduation: {education.expectedGraduation}</p>
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
      </div>
    </div>
  );
};

export default About;