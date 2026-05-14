import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- KONFIGURASI SEO ---
export const metadata = {
  title: {
    default: "Sunnah Travel | Paket Umroh & Haji Sesuai Sunnah 1447H",
    template: "%s | Sunnah Travel",
  },
  description:
    "Bimbingan Umroh dan Haji sesuai tuntunan Nabi ﷺ. Fasilitas bintang 5, hotel dekat masjid, dan keberangkatan pasti. Daftar sekarang untuk musim 1447H.",
  keywords: [
    "travel umroh sunnah",
    "umroh sesuai sunnah",
    "haji furoda 2026",
    "paket umroh bintang 5",
    "biaya umroh 2026",
  ],
  authors: [{ name: "Sunnah Travel Utama" }],
  creator: "Sunnah Travel Team",
  metadataBase: new URL("https://sunnahtravel.com"), // Ganti dengan domain asli nanti
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunnah Travel | Paket Umroh & Haji Sesuai Sunnah",
    description:
      "Wujudkan niat suci ke Tanah Suci dengan bimbingan sesuai Sunnah Rasulullah ﷺ.",
    url: "https://sunnahtravel.com",
    siteName: "Sunnah Travel Utama",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Pelayanan Umroh Sunnah Travel",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunnah Travel | Paket Umroh Sesuai Sunnah",
    description: "Bimbingan Umroh sesuai tuntunan Nabi ﷺ. Keberangkatan Pasti.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id" // Ganti ke 'id' untuk target jamaah Indonesia
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Menambahkan tema warna untuk browser mobile (Chrome/Safari) */}
        <meta name="theme-color" content="#047857" />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
