// File: app/layout.tsx
// Desain ini mengatur dasar dari seluruh halaman,
// memastikan latar belakang biru gelap dan teks putih teraplikasi secara global.

import type { Metadata } from "next";
// Menggunakan font 'Inter' untuk tampilan yang bersih dan modern
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Muhammad Aqil",
  description: "Portofolio Profesional Muhammad Aqil, seorang Mahasiswa Teknik Biomedis yang bersemangat dalam inovasi teknologi medis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Menambahkan !scroll-smooth untuk navigasi yang lebih mulus saat mengklik menu
    <html lang="id" className="!scroll-smooth">
      {/* Kelas ini adalah kunci dari tampilan baru Anda:
          - bg-slate-900: Warna biru sangat gelap sebagai latar belakang
          - text-slate-300: Warna putih pudar untuk teks agar nyaman dibaca
      */}
      <body className={`${inter.className} bg-slate-900 text-slate-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
