// File: app/page.tsx
// Versi ini telah didesain ulang sepenuhnya dengan prinsip UI/UX
// untuk menciptakan portofolio yang modern, bersih, dan menarik.

import React from 'react';

// --- Data Section ---
// Semua informasi Anda tetap terpusat di sini agar mudah diubah.
const personalInfo = {
  name: "Muhammad Aqil",
  title: "Biomedical Engineering Student",
  email: "muhammad.aqil6604@gmail.com",
  linkedin: "https://www.linkedin.com/in/aqilarsul/",
  github: "https://github.com/aqilarsul",
  bio: "Seorang mahasiswa Teknik Biomedis yang berspesialisasi dalam AI untuk diagnostik medis dan teknologi wearable. Bersemangat untuk menerapkan keahlian machine learning dan rekayasa perangkat lunak untuk berinovasi dalam solusi perawatan pasien.",
  profileImage: "/profile.jpg",
};

const skills = {
  technical: ["Python", "Machine Learning", "Data Science", "Embedded Systems", "TensorFlow", "VGG16", "U-Net", "Google Sheets", "Medical AI"],
  soft: ["Leadership", "Analytical Thinking", "Project Management", "Stakeholder Communication", "Problem-Solving", "Teamwork"],
};

const experiences = [
    {
        role: "President",
        company: "AIESEC in Surabaya",
        period: "Feb 2025 - Sekarang",
    },
    {
        role: "OD Data Manager",
        company: "AIESEC in Indonesia",
        period: "Feb 2025 - Sekarang",
    },
    {
        role: "IT Engineer Intern",
        company: "Neurabot Lab",
        period: "Jan 2025 - Feb 2025",
    },
    {
        role: "Machine Learning Path Cohort",
        company: "Bangkit Academy",
        period: "Sep 2024 - Des 2024",
    },
];

const projects = [
    {
        title: "HASHSCOPE: Analisis Tren Konten",
        description: "Aplikasi mobile berbasis machine learning untuk membantu influencer mengidentifikasi dan meramalkan tren konten dengan menganalisis data dari platform media sosial.",
        tech: ["Python", "Predictive Modeling", "Data Scraping", "Mobile App"],
        imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=HASHSCOPE",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Diagnosis Pneumonia dengan VGG16",
        description: "Alat deep learning untuk mendiagnosis pneumonia dari rontgen dada, mencapai akurasi validasi lebih dari 92%. Diterapkan dengan antarmuka Gradio di Hugging Face.",
        tech: ["Python", "TensorFlow", "VGG16", "Gradio", "Hugging Face"],
        imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=Pneumonia+AI",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "SIGN2SPEAK: Sarung Tangan Penerjemah",
        description: "Perangkat bantu wearable menggunakan sensor fleksibel dan Arduino untuk menerjemahkan gerakan bahasa isyarat menjadi ucapan melalui aplikasi Android. Meraih Juara 3 di MRCST 2025.",
        tech: ["Arduino (C++)", "Embedded Systems", "Flex Sensors", "Android"],
        imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=SIGN2SPEAK",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Segmentasi Kanker Payudara dengan U-Net",
        description: "Merancang dan melatih model deep learning U-Net untuk segmentasi semantik pada gambar mammogram untuk membantu deteksi dini kanker payudara.",
        tech: ["Python", "TensorFlow", "U-Net", "Medical Imaging"],
        imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=U-Net+Cancer+AI",
        liveUrl: "#",
        repoUrl: "#",
    },
];

// --- Komponen Ikon (Tetap sama, hanya diberi tipe properti yang lebih baik) ---
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

// --- Komponen Halaman Utama ---
export default function PortfolioPage() {
  return (
    <>
      {/* Header / Navigasi */}
      <header className="bg-slate-900/75 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors">
            {personalInfo.name}
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">Tentang</a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Pengalaman</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Proyek</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Kontak</a>
          </div>
        </nav>
      </header>

      {/* Konten Utama */}
      <main className="container mx-auto px-6">
        
        {/* Seksi Hero */}
        <section id="hero" className="min-h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Muhammad Aqil
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-2 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Hubungi Saya
              </a>
              <div className="flex items-center gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-7 h-7" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <GithubIcon className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seksi Tentang Saya */}
        <section id="about" className="py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-white">Tentang Saya</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Sebagai mahasiswa di Universitas Airlangga, saya memiliki hasrat mendalam pada titik temu antara teknologi dan kesehatan. Perjalanan saya di teknik biomedis didorong oleh keinginan untuk menciptakan solusi inovatif yang dapat membuat perbedaan nyata dalam diagnostik dan perawatan pasien. Melalui proyek akademis dan praktis, saya telah membangun fondasi yang kuat dalam machine learning, analisis citra medis, dan sistem tertanam.
              </p>
            </div>
            <div className="order-1 lg:order-2 bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Keahlian Utama</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Teknis</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map(skill => (
                      <span key={skill} className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map(skill => (
                      <span key={skill} className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seksi Pengalaman */}
        <section id="experience" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Pengalaman Profesional</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 pb-12">
                <div className="absolute left-0 top-1">
                    <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center ring-4 ring-slate-900">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    </div>
                </div>
                <p className="text-lg font-semibold text-cyan-400">{exp.role}</p>
                <p className="text-md text-slate-400 mb-1">{exp.company}</p>
                <time className="text-sm text-slate-500">{exp.period}</time>
              </div>
            ))}
          </div>
        </section>

        {/* Seksi Proyek */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Proyek Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.title} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group transition-all hover:border-cyan-500/50 hover:bg-slate-800">
                <div className="overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={`Gambar Proyek ${project.title}`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-4 border-t border-slate-700">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 font-semibold text-sm">Lihat Demo</a>
                    )}
                    {project.repoUrl !== "#" && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 font-semibold text-sm">Kode GitHub</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seksi Kontak */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Mari Terhubung</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Saya selalu terbuka untuk diskusi mengenai proyek baru, ide-ide kreatif, atau kesempatan untuk menjadi bagian dari tim yang inovatif. Jangan ragu untuk menghubungi saya.
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block bg-cyan-500 text-white font-bold py-4 px-8 rounded-md hover:bg-cyan-600 transition-colors duration-300 text-lg shadow-lg shadow-cyan-500/20"
          >
            Kirim Email
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="container mx-auto py-6 px-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Dibuat dengan Next.js dan Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
