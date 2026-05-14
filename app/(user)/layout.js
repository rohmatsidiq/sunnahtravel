"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, Heart } from "lucide-react";
import { FaKaaba } from "react-icons/fa";

export default function UserLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Umroh", href: "/paket" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Testimoni", href: "/testimoni-jamaah" },
    { name: "Hubungi Kami", href: "/kontak" },
  ];

  // Efek navbar berubah warna saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* NAVBAR */}
      <header
        className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/50 py-4"
            : "bg-transparent py-6"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-emerald-700 p-2.5 rounded-2xl shadow-lg shadow-emerald-200">
              <FaKaaba className="text-white text-2xl" />
            </div>
            <div className="leading-none">
              <span className="text-2xl font-black text-emerald-950 block leading-none">
                SUNNAH
              </span>
              <span className="text-[10px] font-bold text-emerald-600 tracking-[0.3em] uppercase">
                Travel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    text-sm font-bold tracking-wide relative py-1.5 transition-colors duration-200
                    ${
                      isActive
                        ? "text-emerald-600"
                        : "text-slate-600 hover:text-emerald-600"
                    }
                  `}
                >
                  {link.name}
                  {/* Underline Indicator Menu Aktif */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone size={16} />
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE SIDE NAVIGATION OVERLAY */}
      <div
        className={`
        fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-8 flex flex-col shadow-2xl border-l border-slate-100 transition-transform duration-300 ease-in-out lg:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-black text-slate-800">
            Menu Navigasi
          </span>
          <button
            className="p-2 hover:bg-slate-50 rounded-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  text-base font-bold p-3 rounded-xl transition-all flex items-center justify-between
                  ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                {link.name}
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Link
            href="/kontak"
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-xl font-black text-sm shadow-xl shadow-emerald-100"
          >
            Konsultasi Gratis <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT SPACE */}
      {/* pt-24 memastikan konten utama tidak tertutup oleh navbar fixed */}
      <main className="flex-1 pt-24">{children}</main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolom 1: Profil Singkat */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-700 p-2.5 rounded-2xl shadow-lg">
                <FaKaaba className="text-white text-2xl" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Sunnah <span className="text-emerald-500">Travel</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Komitmen kami adalah menghadirkan perjalanan ibadah umroh yang
              aman, nyaman, dan sesuai dengan tuntunan sunnah Rasulullah ﷺ.
            </p>
          </div>

          {/* Kolom 2: Tautan Pintas */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-black uppercase tracking-wider">
              Halaman Utama
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link
                  href="/paket"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Paket Perjalanan
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/testimoni-jamaah"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak Legalitas */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-black uppercase tracking-wider">
              Izin & Legalitas
            </h4>
            <div className="text-sm font-medium space-y-1.5 leading-relaxed">
              <p>
                PPIU No:{" "}
                <span className="text-slate-200 font-bold">123456789/2026</span>
              </p>
              <p className="text-xs text-slate-500">
                Kementerian Agama Republik Indonesia
              </p>
            </div>
          </div>

          {/* Kolom 4: Alamat Kantor */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-black uppercase tracking-wider">
              Kantor Pusat
            </h4>
            <p className="text-sm leading-relaxed font-medium">
              Jl. Islami No. 12, Kebayoran Baru, Jakarta Selatan, DKI Jakarta,
              12110.
            </p>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="border-t border-slate-800/60 py-6 text-center text-xs font-bold tracking-wide bg-slate-950/40">
          <p className="flex items-center justify-center gap-1">
            © 2026 Sunnah Travel.
          </p>
        </div>
      </footer>
    </div>
  );
}
