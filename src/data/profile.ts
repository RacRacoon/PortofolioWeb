export const profile = {
  name: "Sultan Syafiq Rakan",
  role: "Computer Engineering Student — Embedded Systems / IoT / ML",
  location: "Surabaya, Jawa Timur, Indonesia",
  university: "Institut Teknologi Sepuluh Nopember (ITS)",
  linkedin: "https://linkedin.com/in/sultansyafiqrakan",
  github: "https://github.com/RacRacoon",
  // TODO(sultan): resume kamu masih menandai email & nomor telepon sebagai
  // kosong — isi manual sebelum publish.
  email: "isi-email-kamu@example.com",
  summary:
    "Mahasiswa Teknik Komputer ITS yang aktif di sistem embedded, IoT, dan machine learning terapan (klasifikasi time-series, TinyML). Merangkap sebagai Project Manager di beberapa organisasi/perusahaan rintisan dan pendiri dua unit usaha berbasis laboratorium kampus (servis laptop dan jasa 3D printing). Terbiasa mengerjakan siklus penuh sebuah proyek: dari riset dan debugging perangkat keras/firmware, membangun model ML, sampai menyusun materi bisnis (pricing, laporan keuangan, branding, pitch deck).",
};

export type Experience = {
  summary: string;
  title: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
  images?: { src: string; alt: string }[];
};

export const experience: Experience[] = [
  {
    title: "IoT Engineer Intern",
    org: "ACW Lighting Engineering",
    location: "Surabaya",
    period: "Sejak Juli 2026",
    summary:
      "Menulis firmware NEMA, controller lampu dan soket pintar, untuk MCU clone APM32F103CB. Memindahkan proyek ke VS Code dengan konfigurasi debug sendiri, memetakan perilaku dimmer 0-10 V lewat pengujian di board, lalu menambah relay 10 A, auto-dimming LDR, sensor SHT3x, GSM, dan deteksi overcurrent dari power meter.",
    bullets: [
      "Mengembangkan firmware controller lampu/soket pintar \"NEMA\" di atas MCU APM32F103CB (clone GigaDevice/Geehy dari STM32F103CB) — meng-convert proyek dari toolchain STM32CubeIDE ke EIDE (VS Code) dengan konfigurasi OpenOCD + ST-Link V2 khusus karena chip-nya bukan silikon ST resmi.",
      "Reverse-engineer perilaku elektrik board yang tidak terdokumentasi resmi: tahap dimmer 0-10 V yang opto-coupled (lambat mengikuti perubahan cepat, dan kadang terbalik polaritasnya) hanya bisa dipetakan lewat pengujian langsung, bukan datasheet.",
      "Implementasi kontrol relay lampu 10 A, auto-dimming berbasis sensor cahaya (LDR), pembacaan sensor iklim SHT3x (suhu/kelembapan lewat I2C dengan verifikasi CRC-8), konektivitas GSM, dan pembacaan power meter untuk deteksi overcurrent.",
    ],
    images: [
      { src: "/projects/nema/hardware.jpg", alt: "Hardware board NEMA: modul GPS, APM32F103CB, dan development board" },
      { src: "/projects/nema/pinout.png", alt: "Konfigurasi pinout STM32CubeMX untuk board NEMA (relay, dimmer, USART GSM, power factor, I2C climate)" },
    ],
  },
  {
    title: "Project Manager",
    org: "Digital Care Indonesia / Digital Care Foundation / Reparium Tech",
    period: "Sejak Maret 2026",
    summary:
      "Menutup 2 proyek belasan juta rupiah dengan Pusdiklat PAL Tekno. Memilih teknisi yang cocok untuk setiap kendala dan permintaan pelanggan, dan menjalankan workshop dengan dana terbatas lewat prioritas biaya dan pembagian tugas.",
    bullets: [
      "Berhasil closing 2 proyek senilai belasan juta rupiah ke Pusdiklat PAL Tekno.",
      "Memetakan setiap kendala dan permintaan pelanggan ke teknisi yang paling sesuai, sehingga layanan tetap personal dan solusinya tepat sasaran.",
      "Menjalankan workshop dengan dana terbatas: menyusun prioritas biaya dan pembagian tugas agar hasil tetap maksimal.",
    ],
    images: [
      { src: "/experience/pm-reparium/pusdiklat-pal.jpg", alt: "Meeting presentasi proyek ke Pusdiklat PAL Tekno" },
    ],
  },
];

export type Venture = {
  title: string;
  org: string;
  tagline: string;
  bullets: string[];
};

export const ventures: Venture[] = [
  {
    title: "Pendiri & Operator",
    org: "B401 Lab Laptop Service",
    tagline: "Bisnis servis laptop berbasis kampus di bawah entitas B401 Lab",
    bullets: [
      "Layanan inti: repaste dan perawatan laptop; belakangan menambah servis hardware (engsel, LCD, baterai, speaker).",
      "Menyusun laporan keuangan bulanan (PDF) dari data transaksi, termasuk revisi perbaikan alokasi profit.",
      "Melacak seluruh transaksi lewat Google Sheets (List_pengerjaan.xlsx).",
      "Menganalisis kelayakan diskon dan menentukan ambang batas diskon per tier layanan.",
      "Membangun identitas brand konsisten (tema charcoal/green bergaya terminal): poster, price list, aset Instagram, materi grand opening, promo Kemerdekaan, dan pitch deck 10 slide.",
    ],
  },
  {
    title: "Partner",
    org: "Jasa 3D Printing (B401 Lab)",
    tagline: "Unit usaha baru di bawah entitas B401 Lab, kini sudah berjalan dan menerima order",
    bullets: [
      "Menyusun model pricing, skema bagi hasil (profit-sharing waterfall), pitch deck, dan spreadsheet pelacakan keuangan.",
      "Mesin produksi: Anycubic Kobra S1 Combo (FDM, dengan modul multi-warna ACE Pro).",
      "Identitas brand memakai palet merah-hitam sesuai profil brand mitra lab.",
      "Sedang merencanakan perekrutan manajer/direktur untuk menjalankan bisnis ini secara penuh.",
    ],
  },
];

export type Project = {
  hidden?: boolean;
  name: string;
  tagline: string;
  title: string;
  period?: string;
  category: "embedded" | "ml-ai" | "cv";
  tags: string[];
  bullets: string[];
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    name: "NEMA",
    tagline: "Firmware controller lampu dan soket pintar di atas MCU clone APM32F103CB.",
    title:
      "NEMA — Firmware Controller Lampu/Soket Pintar (APM32F103CB)",
    period: "Sejak Juli 2026 · ACW Lighting Engineering",
    category: "embedded",
    tags: ["APM32F103CB", "EIDE/VS Code", "OpenOCD", "ST-Link V2", "I2C", "GSM"],
    bullets: [
      "Convert proyek firmware dari STM32CubeIDE ke EIDE VS Code, termasuk konfigurasi debug/flash khusus untuk MCU clone APM32.",
      "Reverse-engineer karakteristik hardware board (polaritas & slew rate tahap dimmer 0-10 V opto-coupled) lewat pengujian, bukan datasheet.",
      "Relay 10 A, auto-dimming berbasis LDR, sensor iklim SHT3x (I2C + CRC-8), GSM, dan pembacaan power meter untuk proteksi overcurrent.",
    ],
    images: [
      { src: "/projects/nema/hardware.jpg", alt: "Hardware board NEMA: modul GPS, APM32F103CB, dan development board" },
      { src: "/projects/nema/pinout.png", alt: "Konfigurasi pinout STM32CubeMX untuk board NEMA (relay, dimmer, USART GSM, power factor, I2C climate)" },
    ],
  },
  {
    name: "MEDISYNC",
    tagline: "Smart sleeve pemantau kesehatan lansia dengan deteksi jatuh berbasis 1D-CNN.",
    title: "MEDISYNC — Smart Sleeve untuk Monitoring Kesehatan Lansia",
    category: "embedded",
    tags: ["ESP32", "mmWave Radar", "MAX30102", "GPS", "1D-CNN", "TinyML"],
    bullets: [
      "Perangkat wearable berbentuk lengan (sleeve) untuk memantau kesehatan lansia.",
      "Hardware: ESP32, radar mmWave, sensor MAX30102, GPS.",
      "Model 1D-CNN untuk klasifikasi aktivitas dan deteksi jatuh (fall detection).",
      "Cakupan pengembangan meliputi optimasi memori TinyML, arsitektur model, user manual, dan desain logo.",
    ],
    images: [
      { src: "/projects/medisync/sleeve-worn.jpg", alt: "Smart sleeve MEDISYNC dipakai di lengan" },
      { src: "/projects/medisync/architecture.jpg", alt: "Diagram arsitektur sistem MEDISYNC" },
      { src: "/projects/medisync/pcb-board.jpg", alt: "PCB modul sensor MEDISYNC (GPS, IMU, ESP32)" },
    ],
  },
  {
    name: "TurtleBot3 SLAM",
    tagline: "Simulasi robotika dan pemetaan lingkungan dengan ROS 2 Humble.",
    title: "TurtleBot3 Robotics Simulation & SLAM dengan ROS 2 Humble",
    period: "Mei 2026 – Jun 2026 · Terkait dengan ITS",
    category: "embedded",
    tags: ["ROS 2 Humble", "TurtleBot3", "Gazebo", "RViz", "SLAM Toolbox", "Python"],
    bullets: [
      "Eksplorasi ROS 2 Humble dan TurtleBot3 dari nol: simulasi Gazebo, ROS 2 topics & nodes, visualisasi data LiDAR di RViz, teleoperasi robot, obstacle avoidance berbasis Python, dan mapping SLAM dengan SLAM Toolbox.",
      "Menyusun repository step-by-step (setup workspace, simulasi TurtleBot3, visualisasi LiDAR, obstacle avoidance, SLAM, command ROS 2, troubleshooting) sebagai roadmap praktis dari nol instalasi ROS 2 sampai robot bisa membuat peta lingkungannya sendiri.",
      "Milestone berikutnya: Navigation2, autonomous navigation, computer vision, dan integrasi YOLO.",
    ],
    images: [
      { src: "/projects/turtlebot3-slam/simulation.jpg", alt: "Simulasi Gazebo dan visualisasi SLAM TurtleBot3 di RViz" },
    ],
  },
  {
    name: "ATM Security",
    tagline: "Verifikasi wajah terlihat dengan OWL-ViT: akurasi 95%, sekitar 0,2 detik per gambar.",
    title: "AI-Powered ATM Security System — Face Visibility Detection (OWL-ViT)",
    period: "Mei 2026 – Jun 2026 · Terkait dengan ITS",
    category: "cv",
    tags: ["OWL-ViT", "Open-vocabulary detection", "Python", "Computer Vision"],
    bullets: [
      "Sistem keamanan gerbang ATM berbasis AI untuk mengurangi risiko fraud dengan memverifikasi visibilitas wajah pengguna, memakai deteksi objek open-vocabulary untuk mencegah penyamaran identitas.",
      "Mengembangkan aplikasi vision dengan OWL-ViT milik Google untuk mendeteksi oklusi wajah (masker dan kacamata hitam).",
      "Logika multi-query group (wajah manusia, masker wajah, fitur yang terlihat) untuk mem-parsing feed video/gambar secara dinamis dan memblokir transaksi non-compliant secara instan.",
      "Akurasi diagnostik hingga 95% dengan kecepatan inferensi ~0.2 detik/gambar.",
    ],
    images: [
      { src: "/projects/atm-security/detection-denied.jpg", alt: "Deteksi wajah tertutup masker, transaksi ditolak sistem" },
    ],
  },
  {
    name: "Electrical Safety AI",
    tagline: "Monitoring dan proteksi beban listrik secara real-time dengan klasifikasi KNN.",
    title: "AI-Driven Electrical Safety and Load Classification System",
    period: "Okt 2025 – Des 2025 · Terkait dengan ITS",
    category: "embedded",
    tags: ["ESP32", "PZEM-004T", "MQTT", "Node-RED", "Prometheus", "Grafana", "KNN"],
    bullets: [
      "Sistem IoT dan Machine Learning end-to-end untuk memonitor, mengklasifikasi, dan melindungi beban listrik secara real-time.",
      "ESP32 + sensor PZEM-004T mengukur parameter listrik (tegangan, arus, daya, energi, frekuensi, power factor); data dikirim via MQTT, diproses lewat backend Node-RED, Prometheus, dan Grafana.",
      "Layanan ML berbasis Python memakai model K-Nearest Neighbors (KNN) dengan delta power feature engineering untuk mengklasifikasi perangkat listrik (laptop, charger HP, soldering station).",
      "Proteksi anomali otomatis: saat tegangan/frekuensi berbahaya, backend memutus daya via relay, latching safety lock, dan alert email ke operator. Mendukung update firmware OTA.",
    ],
    images: [
      { src: "/projects/electrical-safety/dashboard.jpg", alt: "Dashboard Grafana monitoring tegangan dan frekuensi perangkat listrik" },
    ],
  },
  {
    name: "Self Diagnose GERD",
    tagline: "Diagnosis awal GERD dan dispepsia dari keluhan pasien lewat web.",
    title: "Web-Based Self Diagnose System for GERD and Dyspepsia Symptoms",
    period: "Nov 2025 – Jan 2026 · Terkait dengan ITS",
    category: "ml-ai",
    tags: ["Machine Learning", "NLP", "Web App"],
    bullets: [
      "Proyek mata kuliah Machine Learning: sistem self-diagnose berbasis web untuk gejala GERD dan dispepsia.",
      "Model mempelajari gejala terkait GERD dan dispepsia, mem-parsing keluhan utama pasien dan melabelinya sebagai GERD atau dispepsia.",
    ],
    images: [
      { src: "/projects/gerd-diagnose/webapp.jpg", alt: "Tampilan web self-diagnosis GERD vs gastritis" },
    ],
  },
  {
    name: "Tugas Akhir",
    hidden: true,
    tagline: "CNN dengan aktivasi PReLU untuk mengklasifikasikan perilaku pengemudi agresif.",
    title: "Tugas Akhir — Klasifikasi Perilaku Pengemudi Agresif dengan CNN + PReLU",
    category: "ml-ai",
    tags: ["CNN", "PReLU", "Time-series", "BeamNG.drive"],
    bullets: [
      'Judul: "Implementasi Convolutional Neural Network dengan Aktivasi PReLU untuk Klasifikasi Perilaku Pengemudi Agresif Berbasis Telemetry".',
      "Memakai data telemetry dari simulator BeamNG.drive untuk mengklasifikasikan perilaku mengemudi normal vs. ugal-ugalan.",
      "Iterasi awal dengan aktivasi PReLU menghasilkan akurasi cukup baik namun bias ke kelas reckless.",
    ],
  },
  {
    name: "Eksplorasi Embedded & IoT",
    hidden: true,
    tagline: "KAPAL_ANN, smart_lights, sistem keselamatan hiking LoRa, dan proyek lainnya.",
    title: "Proyek & Eksplorasi Embedded / IoT Lainnya",
    category: "embedded",
    tags: ["ESP32", "Flask", "Node-RED", "PostgreSQL", "LoRa", "BK7231N"],
    bullets: [
      "KAPAL_ANN — sistem timbangan ikan berbasis ESP32 dengan server inferensi ML (Flask); debugging kegagalan koneksi TCP akibat pemblokiran Windows Firewall.",
      "smart_lights — backend smart lighting dengan Node-RED + PostgreSQL; debugging pengisian tabel alert dan logika flow.",
      "Sistem keselamatan hiking gunung berbasis LoRa + GPS, terhubung ke Basecamp Bimawari, Perhutani, dan ITS; mengidentifikasi masalah kritis pada RF dan GPS prototipe.",
      "Firmware flashing untuk modul IoT berbasis BK7231N.",
      "Menyusun pitch deck workshop IoT untuk Pusdiklat PAL (redesain dari versi SMK PAL sebelumnya).",
      "Eksplorasi opsi LLM API (Gemini Flash, Claude Haiku/Sonnet, Ollama) untuk fitur chatbot dashboard.",
      "Kontribusi pada pipeline data dan ML di ranah kesehatan: klasifikasi laporan MRI otak dan sistem deteksi jatuh.",
    ],
  },
];

export type Skill = { group: string; items: string[] };

export const skills: Skill[] = [
  { group: "Embedded & IoT", items: ["ESP32", "APM32/STM32", "LoRa", "MQTT", "Node-RED", "Flask", "Firmware BK7231N"] },
  { group: "Machine Learning", items: ["1D-CNN", "TinyML", "TFLite Micro", "Naive Bayes", "K-NN", "K-Means", "Decision Tree"] },
  { group: "Computer Vision & AI", items: ["OWL-ViT (open-vocabulary detection)", "Python"] },
  { group: "Perangkat & Lingkungan Kerja", items: ["Ubuntu 22.04 LTS (MSI GF63 Thin)", "Claude Code", "MQTT", "Node-RED", "Prometheus", "Grafana"] },
  { group: "Bisnis & Manajemen", items: ["Pricing model", "Profit-sharing", "Laporan keuangan", "Branding", "Pitch deck", "Project management"] },
  { group: "SDM & Organisasi", items: ["Perencanaan SDM strategis", "Communication", "Kerja tim"] },
];

export const organizations = [
  {
    org: "Himpunan Mahasiswa Teknik Komputer (HIMATEKKOM) ITS",
    location: "Surabaya, Jawa Timur",
    duration: "1 thn 7 bln",
    roles: [
      {
        title: "Human Resources Lead",
        type: "Purnawaktu · Gabungan",
        period: "Feb 2026 – Saat ini (8 bln)",
        skills: ["Sumber Daya Manusia (SDM)", "Perencanaan Sumber Daya Manusia Strategis"],
      },
      {
        title: "Staff of Human Resource Development",
        type: "Kontrak",
        period: "Mar 2025 – Jan 2026 (11 bln)",
        skills: ["Communication", "Kerja tim"],
      },
    ],
  },
];

export const education = {
  school: "Institut Teknologi Sepuluh Nopember (ITS), Surabaya",
  degree: "S1 Teknik Komputer",
  nrp: "5024231009",
  affiliations: [
    {
      title: "Anggota Laboratorium B401 — Robotics and Intelligent System, Gedung B Elektro",
      details: [
        "Asisten Praktikum Rangkaian Digital",
        "Asisten Praktikum Workshop Telematika",
        "Asisten Praktikum Dasar Pemrograman",
      ],
    },
  ],
};
