"use client";
import React from "react";
import {
  Users,
  Package,
  AlertCircle,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Jamaah",
      value: "1,240",
      change: "+12% bln ini",
      icon: <Users size={20} />,
      color: "blue",
    },
    {
      label: "Paket Aktif",
      value: "12",
      change: "4 paket baru",
      icon: <Package size={20} />,
      color: "emerald",
    },
    {
      label: "Pending Manifest",
      value: "8",
      change: "Butuh review",
      icon: <AlertCircle size={20} />,
      color: "amber",
    },
    {
      label: "Total Omzet",
      value: "2.4M",
      change: "+5% bln ini",
      icon: <TrendingUp size={20} />,
      color: "indigo",
    },
  ];

  const colorMap = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Assalamu'alaikum, Rohmat{" "}
            <span className="inline-block animate-bounce">👋</span>
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            Sistem mencatat keberangkatan terdekat dalam{" "}
            <span className="text-emerald-600 font-bold">14 hari</span>.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <Calendar size={20} />
          </div>
          <div className="pr-4">
            <p className="text-[10px] uppercase font-black text-slate-400 leading-none">
              Hari Ini
            </p>
            <p className="text-sm font-bold text-slate-700">16 Mei 2026</p>
          </div>
        </div>
      </div>

      {/* Statistik Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group bg-white p-6 rounded-4xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Dekorasi Background Card */}
            <div
              className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 transition-transform group-hover:scale-150 duration-500 ${colorMap[stat.color].split(" ")[0]}`}
            />

            <div
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${colorMap[stat.color]}`}
            >
              {stat.icon}
            </div>

            <div className="relative z-10">
              <p className="text-sm font-bold text-slate-400 mb-1">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-black text-slate-800 tracking-tighter">
                  {stat.value}
                </h2>
                <div
                  className={`flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full ${colorMap[stat.color]}`}
                >
                  <ArrowUpRight size={10} className="mr-0.5" />
                  {stat.change.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Aktivitas Terakhir */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-black text-xl text-slate-800">
              Aktivitas Terakhir
            </h3>
            <button className="text-sm font-bold text-emerald-600 hover:underline">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-6">
            {[
              {
                user: "Ahmad Fauzi",
                desc: "Mendaftar Paket Ramadhan",
                time: "2 jam yang lalu",
                type: "new",
              },
              {
                user: "Siti Aminah",
                desc: "Melakukan Pelunasan",
                time: "4 jam yang lalu",
                type: "payment",
              },
              {
                user: "Budi Santoso",
                desc: "Upload Berkas Paspor",
                time: "1 hari yang lalu",
                type: "doc",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-3xl transition-all border border-transparent hover:border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-sm ${
                      item.type === "new"
                        ? "bg-emerald-100 text-emerald-600"
                        : item.type === "payment"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {item.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">
                      {item.user}{" "}
                      <span className="font-medium text-slate-500 ml-1">
                        {item.desc}
                      </span>
                    </p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                      {item.time}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-slate-300 hover:text-emerald-500 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info & Action */}
        <div className="space-y-8">
          {/* Card Tips yang dipercantik */}
          <div className="bg-linear-to-br from-emerald-800 to-emerald-950 rounded-[2.5rem] p-8 text-white shadow-xl shadow-emerald-900/20 relative overflow-hidden group">
            <Zap className="absolute -right-4 -bottom-4 w-32 h-32 text-emerald-700/30 group-hover:rotate-12 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="bg-emerald-500/20 w-fit p-2 rounded-lg mb-4 border border-emerald-500/30">
                <Zap size={20} className="text-emerald-400" />
              </div>
              <h3 className="font-black text-xl mb-3">Tips Persiapan</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-medium">
                H-7 keberangkatan: Pastikan semua manifest tervalidasi agar
                proses{" "}
                <span className="text-white underline decoration-emerald-500 font-bold">
                  Roomlist Hotel
                </span>{" "}
                tidak terhambat.
              </p>
              <button className="w-full bg-white text-emerald-900 font-black py-4 rounded-2xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 group">
                Cek Jadwal Sekarang
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
            <h3 className="font-black text-slate-800 mb-6">Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Package size={18} />
                </div>
                <span className="text-[11px] font-bold">Buat Paket</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-all border border-transparent hover:border-blue-100 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Users size={18} />
                </div>
                <span className="text-[11px] font-bold">Jamaah Baru</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
