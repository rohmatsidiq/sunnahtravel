"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Map,
  Sparkles,
} from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    paket: "reguler",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman form sukses
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nama: "",
        email: "",
        telepon: "",
        paket: "reguler",
        pesan: "",
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24 pb-24">
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            <Sparkles size={12} /> Konsultasi Manasik & Perjalanan
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Hubungi Sunnah Travel
          </h1>
          <p className="text-emerald-100/75 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Pintu komunikasi kami selalu terbuka. Tanyakan seputar legalitas,
            rincian hotel, fasilitas, hingga skema cicilan kepada tim kami.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* KOLOM KIRI: INFO KONTAK & JAM KERJA (1 KOLOM) */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
              Informasi Kantor
            </h3>

            <div className="space-y-6">
              {/* Kontak Alamat */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Alamat Pusat
                  </p>
                  <p className="text-sm font-bold text-slate-700 mt-1 leading-relaxed">
                    Jl. Islami No. 12, Kebayoran Baru, Jakarta Selatan, DKI
                    Jakarta, 12110.
                  </p>
                </div>
              </div>

              {/* Kontak Telepon / WA */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Telepon & WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="text-sm font-black text-emerald-600 block mt-1 hover:underline"
                  >
                    0812-3456-7890 (Hotline)
                  </a>
                </div>
              </div>

              {/* Kontak Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Surat Elektronik
                  </p>
                  <p className="text-sm font-bold text-slate-700 mt-1 font-mono">
                    info@sunnahtravel.com
                  </p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex gap-4 items-start border-t border-slate-50 pt-6">
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Jam Operasional Kantor
                  </p>
                  <p className="text-xs font-bold text-slate-600 mt-1 leading-relaxed">
                    Senin - Jumat:{" "}
                    <span className="text-slate-800">08:00 - 17:00 WIB</span>
                    <br />
                    Sabtu (Setengah Hari):{" "}
                    <span className="text-slate-800">08:00 - 12:00 WIB</span>
                    <br />
                    Ahad & Hari Libur Nasional:{" "}
                    <span className="text-rose-500 font-black">Tutup</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WA CTA Button */}
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum%20Admin%20Sunnah%20Travel,%20saya%20ingin%20konsultasi%20mengenai%20paket%20umroh."
            target="_blank"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white p-5 rounded-[2rem] font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/10 transition-all hover:-translate-y-0.5"
          >
            <MessageSquare size={20} className="fill-current" />
            Chat Langsung Via WhatsApp
          </a>
        </div>

        {/* KOLOM KANAN: FORMULIR KONSULTASI (2 KOLOM) */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[2.5rem] z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 mb-4 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-black text-slate-800">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-slate-500 text-xs font-semibold max-w-sm mt-1.5 leading-relaxed">
                  Jazakumullahu khairan. Tim Konsultan Haji & Umroh Sunnah
                  Travel akan segera menghubungi Anda melalui nomor
                  telepon/WhatsApp yang tertera.
                </p>
              </div>
            )}

            <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
              Formulir Tanya Jawab
            </h3>
            <p className="text-slate-400 text-xs font-semibold mb-8">
              Isi data di bawah ini untuk mendapatkan rekomendasi paket umroh
              yang paling cocok bagi Anda dan keluarga.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Nama Lengkap Anda
                  </label>
                  <input
                    type="text"
                    name="nama"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Contoh: Muhammad Fauzi"
                    className="w-full bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all"
                  />
                </div>

                {/* Input Nomor Telepon */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    No. Telepon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    required
                    value={formData.telepon}
                    onChange={handleChange}
                    placeholder="Contoh: 0812345678"
                    className="w-full bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="fauzi@email.com"
                    className="w-full bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all"
                  />
                </div>

                {/* Dropdown Pilihan Peminatan Paket */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Paket Yang Diminati
                  </label>
                  <select
                    name="paket"
                    value={formData.paket}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-transparent rounded-2xl px-4 py-3.5 text-xs font-bold text-slate-700 focus:bg-white focus:border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all cursor-pointer"
                  >
                    <option value="reguler">Paket Umroh Reguler ★5</option>
                    <option value="vip">Paket Umroh VIP Itikaf</option>
                    <option value="plus">Paket Umroh Plus Wisata Halal</option>
                    <option value="hemat">Paket Hemat Ekonomi Syawal</option>
                  </select>
                </div>
              </div>

              {/* Textarea Pesan */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Pesan / Pertanyaan Anda
                </label>
                <textarea
                  name="pesan"
                  rows={4}
                  required
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pertanyaan rinci Anda di sini, misalnya mengenai ketersediaan kursi pada tanggal tertentu..."
                  className="w-full bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-2xl p-4 text-xs font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-emerald-200 hover:-translate-y-0.5"
              >
                <Send size={16} strokeWidth={2.5} />
                Kirim Pertanyaan Ke Sistem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GEO LOCATION MAP AREA PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="flex items-center gap-2">
          <Map className="text-emerald-600" size={20} />
          <h3 className="text-xl font-black text-slate-800 tracking-tight">
            Denah Lokasi Kantor Pusat
          </h3>
        </div>
        {/* Simulasi Kotak Google Maps untuk Portofolio Estetik */}
        <div className="w-full h-80 bg-slate-200/50 rounded-[2.5rem] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/20 cursor-pointer transition-all">
          <Map className="mb-2 animate-bounce" size={32} />
          <span className="text-sm font-black uppercase tracking-wider">
            Google Maps API Embed Container
          </span>
          <span className="text-xs font-medium text-slate-400 mt-1 max-w-sm">
            (Di aplikasi asli, Anda tinggal menyematkan kode Iframe dari Google
            Maps untuk merender koordinat peta kantor di sini)
          </span>
        </div>
      </section>
    </div>
  );
}
