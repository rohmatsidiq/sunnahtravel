"use client";
import React, { useState } from "react";
import {
  Boxes,
  Truck,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Package,
  ChevronRight,
  UserCheck,
} from "lucide-react";

export default function LogistikPage() {
  const [activeTab, setActiveTab] = useState("distribusi");

  // Data Dummy Stok Gudang
  const [stokBarang] = useState([
    {
      id: 1,
      nama: "Koper Hardcase 24 Inch (Sunnah)",
      stok: 120,
      minStok: 20,
      satuan: "Pcs",
      status: "Aman",
    },
    {
      id: 2,
      nama: "Kain Ihram Premium",
      stok: 15,
      minStok: 30,
      satuan: "Pcs",
      status: "Menipis",
    },
    {
      id: 3,
      nama: "Mukena Katun Rayon",
      stok: 45,
      minStok: 15,
      satuan: "Pcs",
      status: "Aman",
    },
    {
      id: 4,
      nama: "Bahan Batik Seragam Travel",
      stok: 8,
      minStok: 10,
      satuan: "Roll",
      status: "Menipis",
    },
    {
      id: 5,
      nama: "Buku Panduan Doa & Dzikir",
      stok: 350,
      minStok: 50,
      satuan: "Pcs",
      status: "Aman",
    },
  ]);

  // Data Dummy Status Distribusi Perlengkapan Jamaah
  const [distribusiList] = useState([
    {
      id: 1,
      nama: "H. Ahmad Subarjo",
      paket: "Umroh Ramadhan Berkah",
      status: "Sudah Diambil",
      tgl: "14 Mei 2026",
      tipe: "Ambil di Kantor",
    },
    {
      id: 2,
      nama: "Hj. Siti Aminah",
      paket: "Umroh Plus Turki",
      status: "Dikirim",
      tgl: "12 Mei 2026",
      tipe: "J&T Cargo (Resi: JT1234)",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      paket: "Paket Ekonomi Syawal",
      status: "Belum Ambil",
      tgl: "-",
      tipe: "-",
    },
    {
      id: 4,
      nama: "Laila Maghfirah",
      paket: "Umroh Ramadhan Berkah",
      status: "Sudah Diambil",
      tgl: "14 Mei 2026",
      tipe: "Ambil di Kantor",
    },
    {
      id: 5,
      nama: "Fahri Hamzah",
      paket: "Umroh Plus Turki",
      status: "Belum Ambil",
      tgl: "-",
      tipe: "-",
    },
  ]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
              Operational & Inventory
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Logistik & Perlengkapan
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Pantau ketersediaan barang bawaan dan status penyerahan koper
            jamaah.
          </p>
        </div>

        {activeTab === "stok" && (
          <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-2xl font-black transition-all shadow-xl shadow-emerald-200 hover:-translate-y-1 active:scale-95 text-sm">
            <Plus size={20} strokeWidth={3} />
            <span>Tambah Stok Barang</span>
          </button>
        )}
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-slate-200/50 p-1.5 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab("distribusi")}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
            activeTab === "distribusi"
              ? "bg-white text-emerald-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Truck size={16} />
          Distribusi Jamaah
        </button>
        <button
          onClick={() => setActiveTab("stok")}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
            activeTab === "stok"
              ? "bg-white text-emerald-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Boxes size={16} />
          Stok Gudang
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-3 rounded-4xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder={
              activeTab === "distribusi"
                ? "Cari nama jamaah atau paket..."
                : "Cari nama barang..."
            }
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white border focus:border-emerald-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm font-medium"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 text-slate-600 rounded-3xl font-bold text-xs hover:bg-slate-100 transition-all">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        {activeTab === "stok" ? (
          /* ================= TAB 1: STOK GUDANG ================= */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Nama Item / Barang
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-center">
                    Jumlah Stok
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-center">
                    Batas Minimum
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Status Gudang
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {stokBarang.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-all group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                          <Package size={18} />
                        </div>
                        <span className="font-black text-slate-800 text-base">
                          {item.nama}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="font-black text-slate-800 text-lg">
                        {item.stok}
                      </span>
                      <span className="text-slate-400 font-bold text-xs ml-1">
                        {item.satuan}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center font-bold text-slate-400">
                      {item.minStok} {item.satuan}
                    </td>
                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border ${
                          item.status === "Aman"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"
                        }`}
                      >
                        {item.status === "Aman" ? (
                          <CheckCircle2 size={12} />
                        ) : (
                          <AlertTriangle size={12} />
                        )}
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-xs font-black text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70 px-4 py-2 rounded-xl transition-all">
                        Update Stok
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* ================= TAB 2: DISTRIBUSI JAMAAH ================= */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Nama Jamaah
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Paket Umroh
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Metode Penyerahan
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Tanggal Penyerahan
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Status Barang
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {distribusiList.map((j) => (
                  <tr
                    key={j.id}
                    className="hover:bg-slate-50/50 transition-all group"
                  >
                    <td className="px-8 py-6">
                      <div className="font-black text-slate-800 text-base">
                        {j.nama}
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-slate-500">
                      {j.paket}
                    </td>
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-700">
                        {j.tipe !== "-" ? j.tipe : "—"}
                      </div>
                    </td>
                    <td className="px-8 py-6 font-medium text-slate-400">
                      {j.tgl}
                    </td>
                    <td className="px-8 py-6">
                      <span
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border ${
                          j.status === "Sudah Diambil"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : j.status === "Dikirim"
                              ? "bg-blue-50 text-blue-700 border-blue-100"
                              : "bg-rose-50 text-rose-700 border-rose-100"
                        }`}
                      >
                        {j.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      {j.status === "Belum Ambil" ? (
                        <button className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-100">
                          <UserCheck size={14} />
                          Serahkan
                        </button>
                      ) : (
                        <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer info */}
        <div className="px-8 py-5 bg-slate-50/30 border-t border-slate-100 text-center md:text-left">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            *Pastikan penyerahan kain ihram dilakukan sebelum sesi{" "}
            <span className="text-emerald-600 font-black">Manasik Umroh</span>{" "}
            dimulai.
          </p>
        </div>
      </div>
    </div>
  );
}
