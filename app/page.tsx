// File: app/page.tsx (Updated Version)

import React from 'react';

// --- Data Section ---
// You can easily update your information here.

const personalInfo = {
  name: "Muhammad Aqil",
  title: "Biomedical Engineering Student",
  email: "muhammad.aqil6604@gmail.com",
  linkedin: "https://www.linkedin.com/in/aqilarsul/",
  github: "https://github.com/aqilarsul", // Add your GitHub link here
  bio: "Biomedical Engineering student specializing in AI for medical diagnostics and wearable technology. Passionate about applying machine learning and software engineering skills to innovate patient care solutions. Proven ability to build and validate deep learning models and prototype embedded health sensors.",
  profileImage: "/profile.jpg", // Pastikan Anda menaruh foto di folder `public`
};

const skills = {
  technical: ["Python", "Machine Learning", "Data Science", "Embedded Systems", "TensorFlow", "VGG16", "U-Net", "Google Sheets", "Medical AI"],
  soft: ["Leadership", "Analytical Thinking", "Project Management", "Stakeholder Communication", "Problem-Solving", "Teamwork"],
};

const experiences = [
    {
        role: "President",
        company: "AIESEC in Surabaya",
        period: "Feb 2025 - Present",
        description: [
            "Lead a 96-member organization across 9 departments, setting strategic direction and managing operations.",
            "Drive organizational growth and member development by overseeing key performance indicators and strategic initiatives.",
        ],
    },
    {
        role: "OD Data Manager",
        company: "AIESEC in Indonesia",
        period: "Feb 2025 - Present",
        description: [
            "Designed, built, and maintained the national performance dashboard using Google Sheets and advanced formulas.",
            "Analyzed organizational data to prepare and deliver quarterly diagnostic reports, contributing to winning a global OD Award.",
        ],
    },
    {
        role: "IT Engineer Intern",
        company: "Neurabot Lab",
        period: "Jan 2025 - Feb 2025",
        description: [
            "Contributed to the development and training of a pneumonia diagnosis model using a VGG16 CNN.",
            "Preprocessed and augmented a large dataset of chest X-ray images, helping the model achieve over 90% accuracy.",
        ],
    },
    {
        role: "Machine Learning Path Cohort",
        company: "Bangkit Academy by Google, GoTo & Traveloka",
        period: "Sep 2024 - Dec 2024",
        description: [
            "Completed a rigorous curriculum in Machine Learning, Deep Learning with TensorFlow, and Data Analysis.",
            "Collaborated in an agile team to develop a capstone project from ideation to deployment.",
        ],
    },
];

const projects = [
    {
        title: "HASHSCOPE: ML for Content Trend Analysis",
        description: "A machine learning-based mobile application to help influencers identify and forecast content trends by analyzing data from social media platforms like X and YouTube.",
        tech: ["Python", "Predictive Modeling", "Data Scraping", "Mobile App Integration"],
        imageUrl: "https://placehold.co/600x400/1a202c/718096?text=HASHSCOPE",
        liveUrl: "#", // Add live link here
        repoUrl: "#", // Add repo link here
    },
    {
        title: "Pneumonia Diagnosis using VGG16",
        description: "A deep learning tool to diagnose pneumonia from chest X-rays. The VGG16 model achieved over 92% validation accuracy and was deployed with a Gradio interface on Hugging Face.",
        tech: ["Python", "TensorFlow", "Keras", "VGG16", "Gradio", "Hugging Face"],
        imageUrl: "https://placehold.co/600x400/1a202c/718096?text=Pneumonia+AI",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "SIGN2SPEAK: Sign Language Translator Glove",
        description: "A wearable assistive device using flex sensors and an Arduino to translate sign language gestures into audible speech via an Android app. Achieved 3rd Place at MRCST 2025.",
        tech: ["Arduino (C++)", "Embedded Systems", "Flex Sensors", "Android"],
        imageUrl: "https://placehold.co/600x400/1a202c/718096?text=SIGN2SPEAK",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "U-Net for Breast Cancer Segmentation",
        description: "Engineered and trained a U-Net deep learning model for semantic segmentation of mammogram images to aid in the early detection of breast cancer.",
        tech: ["Python", "TensorFlow", "U-Net", "Medical Image Analysis", "Dice Score", "IoU"],
        imageUrl: "https://placehold.co/600x400/1a202c/718096?text=U-Net+Cancer+AI",
        liveUrl: "#",
        repoUrl: "#",
    },
];


// --- Icon Components ---
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);


// --- Main Page Component ---
export default function PortfolioPage() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-wider">
      
      <nav className="bg-gray-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl text-cyan-400">{personalInfo.name}</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#experience" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section id="hero" className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-4xl">
            {/* Menggunakan tag <img> standar */}
            <img 
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg" 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-cyan-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">{personalInfo.title}</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex justify-center space-x-6">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <LinkedinIcon className="w-8 h-8" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <GithubIcon className="w-8 h-8" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <MailIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-gray-400 mb-4">
                I am an undergraduate student at Airlangga University with a deep-seated passion for the intersection of technology and healthcare. My journey into biomedical engineering is driven by a desire to develop innovative solutions that can make a tangible difference in patient diagnostics and care.
              </p>
              <p className="text-lg text-gray-400">
                Through my academic coursework and hands-on projects, I have cultivated a strong foundation in machine learning, medical image analysis, and embedded systems. I am particularly interested in creating assistive technologies and AI-driven diagnostic tools. I thrive in collaborative environments and am dedicated to leveraging my skills to contribute to impactful medical-tech advancements.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">My Skills</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map(skill => (
                    <span key={skill} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map(skill => (
                    <span key={skill} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
          <div className="relative border-l-2 border-cyan-400/30 ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 pl-12">
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-cyan-400 rounded-full ring-8 ring-gray-900">
                  <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"></path>
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="block mb-2 text-lg font-normal leading-none text-cyan-400">{exp.company}</p>
                <time className="block mb-3 text-sm font-normal leading-none text-gray-500">{exp.period}</time>
                <ul className="list-disc list-inside text-gray-400">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="mb-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 font-semibold">Live Demo</a>
                    )}
                    {project.repoUrl !== "#" && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 font-semibold">GitHub Repo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team. Feel free to reach out to me.
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors duration-300 text-lg"
          >
            Say Hello
          </a>
        </section>

      </main>

      <footer className="bg-gray-800/50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors duration-300">
                <MailIcon className="w-6 h-6" />
              </a>
          </div>
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
