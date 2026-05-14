"use client";
import React, { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle,
  ThumbsUp,
  Camera,
  Users,
  Heart,
  MessageCircle,
} from "lucide-react";

export default function TestimoniJamaahPage() {
  // Data Dummy Statistik Kepuasan untuk Portofolio yang Meyakinkan
  const stats = [
    { label: "Jamaah Berangkat", value: "4,800+", icon: <Users size={20} /> },
    { label: "Tingkat Kepuasan", value: "99.2%", icon: <Heart size={20} /> },
    { label: "Ulasan Bintang 5", value: "2,450+", icon: <Star size={20} /> },
  ];

  // Data Dummy Testimoni Publik (Hanya yang berstatus Approved dari Admin)
  const [testimoniPublik] = useState([
    {
      id: 1,
      nama: "H. Ahmad Subarjo",
      asal: "Jakarta Selatan",
      paket: "Umroh Ramadhan Berkah",
      rating: 5,
      komentar:
        "Alhamdulillah pelayanan Sunnah Travel sangat luar biasa. Muthawwif sangat membimbing kami selama di Makkah dan Madinah sesuai dengan tuntunan sunnah. Hotelnya benar-benar dekat dengan Masjidil Haram, hanya jalan kaki 3 menit. Sangat ramah untuk lansia seperti saya.",
      avatar: "AS",
    },
    {
      id: 2,
      nama: "Hj. Siti Aminah",
      asal: "Bandung",
      paket: "Umroh Plus Turki Cultural",
      rating: 5,
      komentar:
        "Perjalanan spiritual sekaligus tadabbur alam yang sangat berkesan. Pembagian kamar (roomlist) di hotel sangat rapi dan satu kamar dengan keluarga sesuai request awal. Makanan yang disediakan juga selalu cocok dengan lidah Indonesia.",
      avatar: "SA",
    },
    {
      id: 3,
      nama: "Dr. Irfan Hakim",
      asal: "Surabaya",
      paket: "Umroh VIP Maqam Luxury",
      rating: 5,
      komentar:
        "Fasilitas bener-bener premium sesuai yang dijanjikan. Bus eksekutif, handling bagasi cepat, dan yang terpenting kajian-kajian ilmiah pra-umroh dari Ustadz pembimbing sangat membuka wawasan fikih ibadah kami.",
      avatar: "IH",
    },
    {
      id: 4,
      nama: "Laila Maghfirah",
      asal: "Medan",
      paket: "Paket Hemat Ekonomi Syawal",
      rating: 4,
      komentar:
        "Meskipun mengambil paket ekonomi, pelayanannya tetap berstandar tinggi. Tidak ada biaya tersembunyi sama sekali sejak pendaftaran hingga pulang. Tim handling di bandara Jeddah sangat cekatan saat mengurus koper kami.",
      avatar: "LM",
    },
    {
      id: 5,
      nama: "Rahmat Hidayat",
      asal: "Yogyakarta",
      paket: "Umroh Awal Tahun Eksklusif",
      rating: 5,
      komentar:
        "Kepastian berangkatnya terjamin. Block seat tiket pesawat beneran ada, jadwal fiks tanpa maju mundur. Ustadz pembimbing sangat sabar menjawab pertanyaan-pertanyaan manasik jamaah.",
      avatar: "RH",
    },
    {
      id: 6,
      nama: "Zaskia Adya",
      asal: "Semarang",
      paket: "Umroh Syawal Keluarga",
      rating: 5,
      komentar:
        "Terima kasih Sunnah Travel sudah memfasilitasi keberangkatan keluarga besar kami dengan sangat baik. Perlengkapan umroh (koper, kain ihram, mukena) dikirim cepat ke rumah H-14 sebelum manasik.",
      avatar: "ZA",
    },
  ]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24 pb-24">
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-linear-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            <MessageCircle size={12} /> Kisah Bahagia Jamaah
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Kisah Nyata Dari Tanah Suci
          </h1>
          <p className="text-emerald-100/75 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Kebahagiaan dan kekhusyukan ibadah Anda adalah prioritas utama kami.
            Berikut ulasan jujur dari mereka yang telah merasakan pelayanan
            kami.
          </p>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2 p-4 relative group">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto border border-emerald-100/50">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-800 tracking-tight font-mono">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
              {i < 2 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. MASONRY-STYLE TESTIMONIAL GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:balance]">
          {testimoniPublik.map((testi) => (
            <div
              key={testi.id}
              className="break-inside-avoid bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-emerald-100 transition-all duration-300 relative"
            >
              {/* Dekorasi Ikon Quote */}
              <Quote className="absolute right-8 top-8 text-slate-100 w-12 h-12 z-0 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Rating Bintang */}
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(testi.rating)].map((_, index) => (
                    <Star key={index} size={16} className="fill-current" />
                  ))}
                </div>

                {/* Komentar Isi */}
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                  "{testi.komentar}"
                </p>

                {/* User Info Line */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-50">
                  <div className="w-11 h-11 bg-linear-to-tr from-emerald-50 to-emerald-100 text-emerald-700 font-black text-sm rounded-2xl flex items-center justify-center shadow-inner border border-emerald-200/20">
                    {testi.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-base flex items-center gap-1.5 leading-none">
                      {testi.nama}
                      <CheckCircle
                        size={14}
                        className="text-emerald-500 fill-emerald-50"
                        title="Verified Jamaah"
                      />
                    </h4>
                    <p className="text-[11px] font-bold text-slate-400 mt-1">
                      {testi.asal} •{" "}
                      <span className="text-emerald-600 font-black">
                        {testi.paket}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GALLERY MINI DOKUMENTASI (Pemicu Trust Tambahan) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">
            Dokumentasi Hangat Keberangkatan
          </h3>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Camera size={14} /> Diabadikan Langsung Oleh Tim Lapangan di Arab
            Saudi
          </p>
        </div>

        {/* Placeholder Grid Foto Album */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Manasik Sebelum Berangkat",
            "Ziarah Raudhah Madinah",
            "Grup Depan Ka'bah Makkah",
            "Handling Kepulangan Bandara",
          ].map((imgLabel, index) => (
            <div
              key={index}
              className="aspect-video bg-slate-200/60 rounded-3xl border border-slate-200/30 flex flex-col items-center justify-center p-4 text-center text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/20 cursor-pointer transition-all border-dashed group"
            >
              <Camera
                size={24}
                className="mb-2 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-black uppercase tracking-tighter">
                {imgLabel}
              </span>
              <span className="text-[10px] font-bold text-slate-300 group-hover:text-emerald-400 mt-0.5">
                Dokumentasi Real
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
