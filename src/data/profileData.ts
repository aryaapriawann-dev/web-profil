export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  year: string;
  role: string;
  demoUrl?: string;
  repoUrl?: string;
  accentColor: string;
  iconType: 'dashboard' | 'layout' | 'api' | 'kanban' | 'globe' | 'code';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  achievements?: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  status: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  clientSatisfaction: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  skills: {
    category: string;
    items: { name: string; level: number; note: string }[];
  }[];
  projects: Project[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  testimonials: TestimonialItem[];
}

export const defaultProfileData: ProfileData = {
  name: "Arya Apriawan",
  title: "Software Engineer & Web Developer",
  headline: "Membangun produk digital yang cepat, elegan, dan berdampak nyata.",
  bio: "Saya adalah seorang Software Engineer dan Web Developer yang berdedikasi membangun aplikasi web modern, antarmuka pengguna yang intuitif, serta arsitektur sistem yang andal. Dengan pengalaman bertahun-tahun merancang kode yang bersih dan scalable, saya mengutamakan performa tinggi, aksesibilitas, dan pengalaman pengguna yang memuaskan.",
  email: "aryaapriawann@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  location: "Indonesia",
  status: "Terbuka untuk proyek baru & kolaborasi",
  yearsOfExperience: "4+",
  projectsCompleted: "25+",
  clientSatisfaction: "99%",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com"
  },
  skills: [
    {
      category: "Frontend & UI",
      items: [
        { name: "React / Next.js", level: 95, note: "Server & Client Components, Hooks, State" },
        { name: "TypeScript", level: 90, note: "Strict Typing, Generics, Clean Architecture" },
        { name: "Tailwind CSS", level: 95, note: "Responsive Design, Design System, Fluid UI" },
        { name: "HTML5 / Semantic & A11y", level: 92, note: "WCAG AA, SEO, Core Web Vitals" },
        { name: "Vue.js / Nuxt", level: 80, note: "Composition API, Pinia, Single File Component" }
      ]
    },
    {
      category: "Backend & Basis Data",
      items: [
        { name: "Node.js / Express", level: 88, note: "REST API, Middleware, Auth JWT, Security" },
        { name: "PostgreSQL & Prisma", level: 85, note: "Relational Modeling, Indexing, Migrations" },
        { name: "Firebase & Cloud SQL", level: 82, note: "Auth, Firestore, Cloud Functions" },
        { name: "REST & GraphQL", level: 86, note: "API Contract, OpenAPI/Swagger Spec" }
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub Workflow", level: 92, note: "Branching, CI/CD Actions, Code Review" },
        { name: "Docker & Container", level: 78, note: "Multi-stage builds, Docker Compose" },
        { name: "Vite / Webpack", level: 90, note: "Bundle optimization, Asset pipeline" },
        { name: "Figma to Code", level: 88, note: "Design Token, Auto-layout, Precision" }
      ]
    },
    {
      category: "Metodologi & Nilai",
      items: [
        { name: "Clean Code & Testing", level: 90, note: "Maintainability, Unit & Integration test" },
        { name: "Optimasi Performa Web", level: 94, note: "Lighthouse 95+, Lazy Loading, Caching" },
        { name: "Komunikasi Kolaboratif", level: 95, note: "Dokumentasi rapi, transparan, agile" }
      ]
    }
  ],
  projects: [
    {
      id: "pos-cloud-system",
      title: "Sistem Manajemen Kasir & Inventaris Cloud",
      category: "Web App",
      summary: "Aplikasi POS modern multi-cabang dengan sinkronisasi inventaris real-time dan analitik pendapatan.",
      description: "Platform web terintegrasi untuk bisnis ritel dan F&B yang membutuhkan pencatatan transaksi cepat, manajemen stok otomatis antar gudang, serta analitik laba-rugi secara langsung. Dirancang dengan antarmuka yang ramah sentuhan dan beroperasi optimal bahkan dalam koneksi internet terbatas.",
      highlights: [
        "Sinkronisasi data otomatis dengan dukungan offline-first",
        "Dashboard analitik penjualan harian, mingguan, dan tren produk terlaris",
        "Sistem cetak struk via bluetooth dan faktur digital via WhatsApp/Email",
        "Manajemen hak akses bertingkat: Kasir, Supervisor, dan Pemilik Usaha"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      year: "2025",
      role: "Lead Full-Stack Developer",
      accentColor: "from-blue-600/20 to-indigo-600/20",
      iconType: "dashboard"
    },
    {
      id: "collaborative-workspace",
      title: "Platform Manajemen Tugas & Alur Kerja Tim",
      category: "Web App",
      summary: "Papan kanban interaktif dengan pembaruan instan, pelacakan waktu, dan integrasi notifikasi.",
      description: "Alat produktivitas tim cerdas yang membantu pengembang dan tim desain mengelola sprint kerja. Dilengkapi kemampuan drag-and-drop lancar, pencatatan waktu otomatis per tugas, dan rekap kemajuan mingguan.",
      highlights: [
        "Alur kerja Kanban yang fleksibel dengan tag prioritas dan tanggal tenggat",
        "Pembaruan status seketika tanpa perlu memuat ulang halaman",
        "Pelaporan efisiensi tim dan grafik estimasi vs waktu pengerjaan aktual",
        "Pencarian cepat berbasis keyboard shortcut"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Prisma"],
      year: "2024",
      role: "Frontend Engineer",
      accentColor: "from-emerald-600/20 to-teal-600/20",
      iconType: "kanban"
    },
    {
      id: "unified-api-gateway",
      title: "Layanan Gateway Notifikasi & Integrasi API",
      category: "Backend & API",
      summary: "Microservice berkinerja tinggi untuk agregasi pesan, webhook pengiriman, dan pemantauan transaksi.",
      description: "Infrastruktur penghubung antara berbagai penyedia layanan perpesanan (WhatsApp API, Email, dan SMS) dengan throttling rate-limiting, mekanisme antrian pesan otomatis (retry logic), dan pencatatan audit log yang aman.",
      highlights: [
        "Throughput tinggi dengan latensi rata-rata di bawah 45ms",
        "Mekanisme failover otomatis ketika salah satu penyedia mengalami gangguan",
        "Dashboard pemantauan status pengiriman pesan dan log anomali",
        "Otentikasi token API berputar dengan enkripsi menyeluruh"
      ],
      techStack: ["Node.js", "Express", "Redis", "Docker", "PostgreSQL"],
      year: "2024",
      role: "Backend Developer",
      accentColor: "from-amber-600/20 to-orange-600/20",
      iconType: "api"
    },
    {
      id: "editorial-design-portfolio",
      title: "Showcase Portofolio Editorial & Studio Kreatif",
      category: "Frontend",
      summary: "Situs web berstandar pameran dengan tata letak asimetris, tipografi presisi, dan performa tinggi.",
      description: "Platform etalase digital untuk studio fotografi dan desain arsitektur yang mengutamakan tata letak editorial, transisi viewport mulus, serta visual rasio adaptif tanpa mengorbankan waktu muat halaman.",
      highlights: [
        "Skor Google Lighthouse 100/100 pada performa dan aksesibilitas",
        "Galeri media dengan penampil resolusi penuh berlatar gelap yang elegan",
        "Sistem navigasi minimalis dengan tipografi berkarakter kuat",
        "Dukungan multi-bahasa dan transisi tema instan"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      year: "2023",
      role: "UI/UX & Frontend Developer",
      accentColor: "from-purple-600/20 to-pink-600/20",
      iconType: "layout"
    },
    {
      id: "high-converting-saas",
      title: "Halaman Arahan Konversi Tinggi Startup Edukasi",
      category: "Frontend",
      summary: "Landing page interaktif dengan kalkulator ROI, testimoni terverifikasi, dan formulir pendaftaran dinamis.",
      description: "Rancangan landing page modern yang dirancang khusus untuk meningkatkan rasio konversi pendaftaran bootcamp teknologi hingga 38%. Menghadirkan simulasi kurikulum interaktif dan pengisian formulir multi-langkah.",
      highlights: [
        "Kenaikan rasio konversi pendaftaran sebesar 38% dalam 3 bulan pertama",
        "Kalkulator biaya pendidikan interaktif dengan opsi cicilan",
        "Struktur SEO semantik dan kartu pratinjau media sosial terintegrasi",
        "Waktu muat halaman pertama di bawah 0.8 detik pada jaringan seluler"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      year: "2023",
      role: "Frontend Developer",
      accentColor: "from-cyan-600/20 to-blue-600/20",
      iconType: "globe"
    },
    {
      id: "automation-market-scraper",
      title: "Sistem Otomasi Pengolahan Data & Pemantau Pasar",
      category: "Tool & Otomasi",
      summary: "Alat pengumpul dan pembersih data harga pasar e-commerce dengan notifikasi perubahan anomali.",
      description: "Solusi otomatisasi untuk memantau pergerakan harga komoditas produk di berbagai marketplace secara berkala, melakukan normalisasi data, dan menghasilkan laporan ringkasan berkala ke kanal Slack tim.",
      highlights: [
        "Pemantauan otomatis lebih dari 10.000 SKU harian tanpa intervensi manual",
        "Penyaringan data duplikat dan pembersihan teks otomatis",
        "Notifikasi instan jika terjadi selisih harga signifikan",
        "Ekspor hasil analisa ke format Excel dan PDF terstruktur"
      ],
      techStack: ["Node.js", "TypeScript", "Express", "SQLite"],
      year: "2022",
      role: "Automation Engineer",
      accentColor: "from-rose-600/20 to-red-600/20",
      iconType: "code"
    }
  ],
  experiences: [
    {
      period: "2023 — Sekarang",
      role: "Full-Stack Software Engineer",
      company: "PT Inovasi Digital Nusantara",
      location: "Jakarta (Remote)",
      description: "Bertanggung jawab atas arsitektur frontend dan backend pada lini produk enterprise. Mengoptimalkan waktu muat aplikasi hingga 40%, memimpin implementasi design system terpadu, dan membimbing 4 junior engineer dalam penulisan kode berkualitas.",
      skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"]
    },
    {
      period: "2021 — 2023",
      role: "Frontend Developer",
      company: "Studio Kreasi Web Nusantara",
      location: "Bandung",
      description: "Mengembangkan lebih dari 15 aplikasi web interaktif untuk berbagai klien sektor ritel, logistik, dan fintech. Menghubungkan antarmuka ke API eksternal serta memastikan kepatuhan standar aksesibilitas web.",
      skills: ["React", "Next.js", "REST API", "Tailwind CSS", "Figma", "Git"]
    },
    {
      period: "2020 — 2021",
      role: "Junior Web Developer",
      company: "Solusi Teknologi Mandiri",
      location: "Indonesia",
      description: "Membangun modul antarmuka pengguna, memperbaiki bug sistem, serta membuat dokumentasi teknis API dan panduan pengguna aplikasi.",
      skills: ["JavaScript", "HTML/CSS", "Bootstrap", "PHP/MySQL", "Git"]
    }
  ],
  education: [
    {
      period: "2016 — 2020",
      degree: "Sarjana Komputer (S.Kom) — Teknik Informatika",
      institution: "Universitas Komputer Indonesia",
      location: "Indonesia",
      description: "Fokus pada Rekayasa Perangkat Lunak, Algoritma & Struktur Data, serta Sistem Basis Data Terdistribusi. Lulus dengan predikat Sangat Memuaskan (IPK 3.82/4.00).",
      achievements: [
        "Ketua Divisi Riset & Pengembangan Himpunan Mahasiswa Informatika",
        "Juara 2 Lomba Karya Cipta Aplikasi Web Nasional (2019)",
        "Publikasi Skripsi: Implementasi Sistem Manajemen Inventaris Terdistribusi"
      ]
    }
  ],
  testimonials: [
    {
      quote: "Arya adalah tipe engineer yang selalu memikirkan gambaran besar. Dia tidak hanya sekadar membuat kode bekerja, tetapi memastikan performanya cepat, kodenya bersih, dan mudah dikembangkan oleh tim.",
      name: "Budi Santoso",
      role: "VP of Engineering",
      company: "PT Inovasi Digital",
      avatarInitials: "BS"
    },
    {
      quote: "Bekerja sama dengan Arya sangat efisien. Hasil landing page dan aplikasi kami selesai lebih cepat dari estimasi, dengan akurasi desain yang sangat presisi terhadap rancangan UI kami.",
      name: "Dian Permatasari",
      role: "Product Lead",
      company: "Karya Kreatif Studio",
      avatarInitials: "DP"
    },
    {
      quote: "Pemahaman teknisnya kuat dan komunikasinya sangat santun serta solutif. Setiap kendala teknis selalu dihadirkan dengan alternatif pemecahan yang masuk akal.",
      name: "Reza Mahendra",
      role: "Founder & CTO",
      company: "Finora Technology",
      avatarInitials: "RM"
    }
  ]
};
