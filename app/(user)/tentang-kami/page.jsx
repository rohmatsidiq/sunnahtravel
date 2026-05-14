"use client";
import React from "react";
import {
  ShieldCheck,
  Award,
  Users2,
  BookOpen,
  CheckCircle,
  Clock,
  Heart,
} from "lucide-react";

export default function TentangKamiPage() {
  // Data Dummy Struktur Asatidzah Pembimbing ( CRM / Trust Builder )
  const pembimbingList = [
    {
      nama: "Ustadz Dr. H. Abdurrahman, M.A.",
      jabatan: "Dewan Pengawas Syariah",
      lulusan: "Lulusan Universitas Islam Madinah",
      avatar: "UA",
    },
    {
      nama: "Ustadz Ahmad Fauzan, Lc.",
      jabatan: "Pembimbing Utama (Muthawwif)",
      lulusan: "Lulusan Universitas Al-Azhar Kairo",
      avatar: "UF",
    },
    {
      nama: "Ustadz Muhammad Rizky, B.A.",
      jabatan: "Pembimbing Manasik",
      lulusan: "Lulusan LIPIA Jakarta",
      avatar: "UR",
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24 pb-24">
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-linear-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            <Heart size={12} className="fill-current" /> Mengenal Sunnah Travel
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Komitmen Melayani Sepenuh Hati
          </h1>
          <p className="text-emerald-100/75 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Menghadirkan kenyamanan beribadah di tanah suci dengan standar
            manajemen modern tanpa menepikan kemurnian tuntunan syariat.
          </p>
        </div>
      </section>

      {/* 2. PROFIL & LEGALITAS RESMI KEMENAG */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Menjaga Amanah, Mengawal Ibadah
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Sunnah Travel didirikan dengan tekad mulia untuk menjembatani
            kerinduan umat muslim Indonesia menuju baitullah secara aman dan
            terukur. Kami memahami bahwa umroh bukan sekadar perjalanan wisata
            biasa, melainkan perjalanan spiritual sakral sekali seumur hidup
            yang melibatkan harta dan batin.
          </p>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Oleh karena itu, dari urusan pemesanan tiket maskapai jauh-jauh
            hari, penempatan hotel bintang lima dengan jarak yang ramah untuk
            lansia, hingga bimbingan manasik intensif, seluruhnya dikelola
            secara profesional oleh tim operasional kami yang berpengalaman.
          </p>
        </div>

        {/* Sisi Kanan: Kotak Izin Resmi PPIU */}
        <div className="bg-emerald-900 rounded-4xl p-8 text-white flex flex-col justify-between shadow-xl shadow-emerald-950/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/40 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-black text-lg leading-tight">
              Izin Resmi Kemenag RI
            </h3>
            <p className="text-emerald-100/70 text-xs font-semibold leading-relaxed">
              Dana ibadah Anda dilindungi penuh oleh hukum nasional. Kami
              memegang lisensi resmi penyelenggara ibadah umroh.
            </p>
          </div>
          <div className="border-t border-emerald-800 pt-6 mt-6 relative z-10">
            <p className="text-[10px] uppercase font-black text-emerald-400">
              No. SK Izin PPIU
            </p>
            <p className="text-lg font-mono font-black mt-0.5">
              123456789 / 2026
            </p>
            <span className="text-[9px] font-bold text-emerald-300/60 block mt-1">
              A.n PT. Sunnah Berkah Internasional
            </span>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI DENGAN INDIKATOR CARD */}
      <section className="bg-slate-100/50 border-y border-slate-200/40 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 w-fit px-3 py-1 rounded-md">
              Visi Utama
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
              Menjadi penyelenggara perjalanan ibadah umroh bermanhaj lurus yang
              paling terpercaya dalam ketepatan fasilitas dan kemurnian sunnah.
            </h3>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-200/60 w-fit px-3 py-1 rounded-md">
              Misi Operasional
            </div>
            <div className="space-y-3">
              {[
                "Menyediakan kepastian tiket penerbangan (block seat) tanpa jadwal mundur.",
                "Menjamin kualitas jarak hotel yang dekat dengan Masjidil Haram & Nabawi.",
                "Mengedukasi jamaah secara intensif pra-keberangkatan agar mandiri secara fikih ibadah.",
                "Menerapkan sistem transparansi biaya (All-in) bebas dari iuran tambahan siluman.",
              ].map((misi, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start p-3 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                  <CheckCircle
                    size={16}
                    className="text-emerald-600 mt-0.5 shrink-0"
                  />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUKTUR DEWAN PEMBIMBING (Muthawwif & Asatidzah) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Dibimbing oleh Ilmuwan & Asatidzah Kompeten
          </h2>
          <p className="text-slate-500 text-sm font-semibold max-w-xl mx-auto">
            Ibadah umroh Anda akan dikawal langsung oleh asatidzah berkompeten
            agar tata cara manasik sesuai dengan contoh tuntunan Rasulullah ﷺ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pembimbingList.map((ustadz, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm text-center space-y-4 hover:border-emerald-200 transition-all group"
            >
              <div className="w-16 h-16 bg-linear-to-tr from-emerald-600 to-teal-400 text-white font-black text-lg rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-emerald-100 rotate-2 group-hover:rotate-0 transition-transform">
                {ustadz.avatar}
              </div>
              <div>
                <h4 className="font-black text-slate-800 text-base leading-tight">
                  {ustadz.nama}
                </h4>
                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-wider mt-1.5">
                  {ustadz.jabatan}
                </p>
              </div>
              <div className="text-xs text-slate-400 font-bold border-t pt-3 border-slate-50">
                📚 {ustadz.lulusan}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
