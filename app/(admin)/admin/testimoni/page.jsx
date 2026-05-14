"use client";
import React, { useState } from "react";
import {
  Star,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  MessageSquare,
  ThumbsUp,
  Trash2,
} from "lucide-react";

export default function TestimoniPage() {
  const [activeFilter, setActiveFilter] = useState("semua");

  // Data Dummy Testimoni Jamaah
  const [testimoniList, setTestimoniList] = useState([
    {
      id: 1,
      nama: "H. Ahmad Subarjo",
      paket: "Umroh Ramadhan Berkah 2025",
      rating: 5,
      komentar:
        "Alhamdulillah pelayanan Sunnah Travel sangat luar biasa. Muthawwif sangat membimbing kami selama di Makkah dan Madinah. Hotel sangat dekat dengan Masjidil Haram. Sangat direkomendasikan!",
      status: "Approved",
      tgl: "10 Mei 2026",
      avatar: "AS",
    },
    {
      id: 2,
      nama: "Hj. Siti Aminah",
      paket: "Umroh Plus Turki 2026",
      rating: 5,
      komentar:
        "Perjalanan spiritual yang sangat berkesan. Pembagian roomlist hotel sangat rapi, satu kamar dengan keluarga sesuai request. Makanan di hotel juga cocok dengan lidah Indonesia.",
      status: "Approved",
      tgl: "08 Mei 2026",
      avatar: "SA",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      paket: "Paket Ekonomi Syawal 2025",
      rating: 4,
      komentar:
        "Pelayanan baik untuk harga paket ekonomi. Hanya saja saat transit di bandara ada sedikit keterlambatan bagasi, tapi team handling dari travel langsung sigap membantu mengurusnya.",
      status: "Pending",
      tgl: "12 Mei 2026",
      avatar: "BS",
    },
    {
      id: 4,
      nama: "Laila Maghfirah",
      paket: "Umroh VIP Itikaf 2025",
      rating: 3,
      komentar:
        "Bintang 3 dulu ya, bus jemputan ziarah di Madinah AC-nya agak kurang dingin kemarin. Mohon diperbaiki untuk keberangkatan grup berikutnya. Selebihnya oke.",
      status: "Pending",
      tgl: "04 Mei 2026",
      avatar: "LM",
    },
  ]);

  // Fungsi Toggle Status (Simulasi Moderasi Admin)
  const handleApprove = (id) => {
    setTestimoniList(
      testimoniList.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item,
      ),
    );
  };

  const filteredTestimoni = testimoniList.filter((item) => {
    if (activeFilter === "approved") return item.status === "Approved";
    if (activeFilter === "pending") return item.status === "Pending";
    return true;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
            Reputation & Trust Management
          </span>
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Ulasan & Testimoni
        </h1>
        <p className="text-slate-500 font-medium mt-1">
          Moderasi ulasan dari jamaah pasca-keberangkatan sebelum ditampilkan di
          halaman publik.
        </p>
      </div>

      {/* Control & Tab Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-4xl shadow-sm border border-slate-100">
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs font-black uppercase tracking-wider">
          <button
            onClick={() => setActiveFilter("semua")}
            className={`px-4 py-2.5 rounded-lg transition-all ${activeFilter === "semua" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
          >
            Semua ({testimoniList.length})
          </button>
          <button
            onClick={() => setActiveFilter("approved")}
            className={`px-4 py-2.5 rounded-lg transition-all ${activeFilter === "approved" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
          >
            Ditampilkan (
            {testimoniList.filter((t) => t.status === "Approved").length})
          </button>
          <button
            onClick={() => setActiveFilter("pending")}
            className={`px-4 py-2.5 rounded-lg transition-all ${activeFilter === `pending` ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
          >
            Butuh Review (
            {testimoniList.filter((t) => t.status === "Pending").length})
          </button>
        </div>

        <div className="relative w-full md:w-64 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
            size={16}
          />
          <input
            type="text"
            placeholder="Cari nama jamaah..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-xl focus:outline-none text-xs font-semibold"
          />
        </div>
      </div>

      {/* Testimonial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimoni.map((testi) => (
          <div
            key={testi.id}
            className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
          >
            <div>
              {/* Card Header: User Info & Status */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-linear-to-tr from-emerald-50 to-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black text-sm shadow-sm border border-emerald-200/40">
                    {testi.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 leading-none text-base">
                      {testi.nama}
                    </h4>
                    <span className="text-[11px] font-bold text-slate-400 block mt-1">
                      {testi.paket}
                    </span>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider border ${
                    testi.status === "Approved"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                      : "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"
                  }`}
                >
                  {testi.status === "Approved" ? (
                    <CheckCircle2 size={10} />
                  ) : (
                    <Clock size={10} />
                  )}
                  {testi.status}
                </span>
              </div>

              {/* Rating Bintang */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < testi.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              {/* Isi Komentar */}
              <p className="text-slate-600 text-sm font-medium leading-relaxed italic bg-slate-50/50 p-4 rounded-2xl border border-slate-100/60 mb-4">
                "{testi.komentar}"
              </p>
            </div>

            {/* Card Footer: Aksi Moderasi */}
            <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
              <span className="text-[11px] font-bold text-slate-400">
                {testi.tgl}
              </span>

              <div className="flex gap-2">
                <button
                  className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                  title="Hapus Ulasan"
                >
                  <Trash2 size={16} />
                </button>
                {testi.status === "Pending" && (
                  <button
                    onClick={() => handleApprove(testi.id)}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-100"
                  >
                    <ThumbsUp size={12} />
                    Tampilkan Publik
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
