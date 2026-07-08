import { useEffect, useState } from 'react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGithub, SiFigma, SiPostman } from 'react-icons/si';
import './App.css';

const skills = [
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  // { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', Icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', Icon: SiMysql, color: '#00758F' },
  { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' }
];

function App() {
  const [theme, setTheme] = useState('dark');

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo gradient-text">Nayan.dev</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle" style={{ marginLeft: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h2 className="hero-subtitle animate-fade-in">MERN Developer</h2>
        <h1 className="hero-title animate-fade-in delay-1">
          Hi, I'm <span className="gradient-text hero-title-gradient">Nayan Vavadiya.</span>
        </h1>
        <p className="hero-description animate-fade-in delay-2">
          I build responsive, scalable, and user-friendly websites with modern UI/UX practices.
          Specializing in the MERN stack to deliver complete web solutions.
        </p>
        <div className="hero-cta animate-fade-in delay-3">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
        <div className="social-links animate-fade-in delay-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="mailto:nayanvavdiya062@gmail.com" className="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">About Me</h2>
        <div className="glass-panel about-content">
          <div className="about-text">
            <p>
              I am a final-year <span className="about-highlight">Computer Science and Design</span> undergraduate with strong hands-on experience in full-stack web development.
            </p>
            <p>
              My expertise revolves around the <span className="about-highlight">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). I have a deep passion for building intuitive, responsive interfaces and backing them up with scalable and robust backend systems.
            </p>
            <p>
              Whether I'm developing a real-time analytics dashboard or integrating AI features, I always strive to implement <span className="about-highlight">modern UI/UX practices</span> to deliver the best user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-marquee">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <div className="skill-badge" key={`${skill.name}-${index}`}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.Icon size={20} />
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="glass-panel experience-card">
              <h3>Nexotips Infotech</h3>
              <h4>Frontend Developer Intern</h4>
              <div className="experience-meta">
                <span>May 2026 – June 2026</span>
                <span>Surat, Gujarat</span>
              </div>
              <ul>
                <li>Contributed to the development of the Typing Test Pro application by building responsive frontend interfaces.</li>
                <li>Performed manual testing on live company projects to identify UI/functional issues before deployment.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="glass-panel experience-card">
              <h3>Webito Infotech</h3>
              <h4>React Developer</h4>
              <div className="experience-meta">
                <span>January 2026 – April 2026</span>
                <span>Remote</span>
              </div>
              <ul>
                <li>Integrated REST APIs using Axios to fetch and display dynamic inventory and user data, optimizing frontend performance.</li>
                <li>Created responsive Admin Dashboards featuring multi-panel user management and real-time data visualization.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="glass-panel experience-card">
              <h3>Shonayavkash</h3>
              <h4>Frontend Developer</h4>
              <div className="experience-meta">
                <span>June 2025 – July 2025</span>
                <span>Surat, Gujarat</span>
              </div>
              <ul>
                <li>Built modular and maintainable user interfaces using HTML, CSS, and JavaScript.</li>
                <li>Gained hands-on experience in responsive design and effective cross-functional teamwork.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">

          <div className="glass-panel project-card">
            <h3 className="project-title">
              Inventory Management System
            </h3>
            <div className="project-tech">MERN Stack</div>
            <p className="project-desc">
              A full-stack system to manage products, categories, suppliers, and customers. Features a real-time analytics dashboard and modern responsive UI using React with status tracking capabilities.
            </p>
            <div className="project-links">
              <a href="https://github.com/Nayanvavadiya/Inventory-Management-System" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Source Code
              </a>
            </div>
          </div>

          <div className="glass-panel project-card">
            <h3 className="project-title">
              AI Resume Skill Analyzer
            </h3>
            <div className="project-tech">MERN Stack & Gemini AI</div>
            <p className="project-desc">
              Developed a system to extract key skills from multiple resumes using AI-driven analysis. It includes a resume matching system that compares candidate profiles against job requirements to identify skill gaps.
            </p>
            <div className="project-links">
              <a href="https://github.com/Nayanvavadiya/Resume-skill-analyzer" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Source Code
              </a>
            </div>
          </div>

          <div className="glass-panel project-card">
            <h3 className="project-title">
              Typing Test App
            </h3>
            <div className="project-tech">React.js</div>
            <p className="project-desc">
              A responsive typing test application designed to help users track their typing speed and accuracy. Features an interactive UI and detailed performance metrics.
            </p>
            <div className="project-links">
              <a href="https://github.com/Nayanvavadiya/MonkeyType_Clone" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Source Code
              </a>
              <a href="https://monkey-type-clone-eight.vercel.app/" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
            </div>
          </div>

          <div className="glass-panel project-card">
            <h3 className="project-title">
              Resume Builder
            </h3>
            <div className="project-tech">React.js</div>
            <p className="project-desc">
              An intuitive web application allowing users to effortlessly create, customize, and export professional resumes in a few clicks, providing real-time previews.
            </p>
            <div className="project-links">
              <a href="https://github.com/Nayanvavadiya/Resume-builder" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Source Code
              </a>
              <a href="https://nynresumebuilder.vercel.app/" target="_blank" rel="noreferrer" className="project-link hover:text-cyan-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section
      <section id="education" className="scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">Education</h2>
        <div className="glass-panel education-card">
          <h3>A D Patel Institute of Technology</h3>
          <h4>B.Tech in Computer Science and Design</h4>
          <div className="education-meta">
            <span>2023 – 2027</span>
          </div>
          <div className="education-score">CGPA: 8.09</div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact-section scroll-animate" style={{ opacity: 0 }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>+91 7016473164</span>
          </div>
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:nayanvavdiya062@gmail.com">nayanvavdiya062@gmail.com</a>
          </div>
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Surat, Gujarat</span>
          </div>
        </div>

        {/* <a href="mailto:nayanvavdiya062@gmail.com" className="btn-primary">Say Hello</a> */}
      </section>

      {/* Footer */}
      <footer>
        <p>Designed & Built by Nayan Vavadiya &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;
