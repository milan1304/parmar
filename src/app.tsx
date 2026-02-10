import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Download,
  Linkedin,
  Github,
  Shield
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS_DATA, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  CERTIFICATIONS_DATA 
} from './constants';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll spy for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, mobile = false }) => (
    <a 
      href={href}
      className={`
        ${mobile ? 'block py-3 text-lg border-b border-gray-100' : 'text-sm font-medium transition-colors duration-200'} 
        ${activeSection === href.replace('#', '') ? 'text-accent' : 'text-slate-600 hover:text-slate-900'}
      `}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-800 tracking-tight">Milan<span className="text-accent">Parmar</span></span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <NavLink href="#hero" label="Home" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#education" label="Education" />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg border-t border-slate-100 px-4 py-2">
            <NavLink href="#hero" label="Home" mobile />
            <NavLink href="#skills" label="Skills" mobile />
            <NavLink href="#experience" label="Experience" mobile />
            <NavLink href="#education" label="Education" mobile />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        
        {/* Hero Section */}
        <section id="hero" className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="lg:text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-accent text-xs font-semibold uppercase tracking-wide mb-6">
                Available for opportunities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium mb-8">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                {PERSONAL_INFO.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-slate-600">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md w-full sm:w-auto justify-center">
                  <Mail size={18} />
                  {PERSONAL_INFO.email}
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md w-full sm:w-auto justify-center">
                  <Phone size={18} />
                  {PERSONAL_INFO.phone}
                </a>
                <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-500 w-full sm:w-auto justify-center">
                  <MapPin size={18} />
                  {PERSONAL_INFO.address}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS_DATA.map((skill, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.category}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {EXPERIENCE_DATA.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <p className="text-accent font-medium text-lg">{job.company}</p>
                      </div>
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold whitespace-nowrap">
                        {job.period}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {job.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center">
                    <Download size={20} className="rotate-180" /> 
                  </div>
                  Education
                </h3>
                <div className="space-y-8 relative pl-6 border-l-2 border-slate-100">
                  {EDUCATION_DATA.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-accent"></div>
                      <h4 className="text-lg font-bold text-slate-900">{edu.school}</h4>
                      <p className="text-accent font-medium">{edu.degree}</p>
                      {edu.subtitle && <p className="text-slate-500 text-sm mt-1">{edu.subtitle}</p>}
                      <div className="mt-2 text-sm text-slate-400 font-medium">{edu.location} • {edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  Certifications
                </h3>
                <div className="grid gap-3">
                  {CERTIFICATIONS_DATA.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-50 hover:border-blue-100 hover:text-accent transition-colors">
                      <div className="min-w-[20px]">
                        <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                      </div>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white mb-2">{PERSONAL_INFO.name}</p>
              <p className="text-sm">Building robust IT infrastructure for the future.</p>
            </div>
            
            <div className="flex gap-4">
               {/* Placeholders for social links if they were provided */}
               <div className="p-2 rounded-full bg-slate-800 hover:bg-accent hover:text-white transition-colors cursor-pointer">
                 <Mail size={20} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
