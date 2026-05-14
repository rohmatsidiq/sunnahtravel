"use client";
import React, { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Calendar,
  MapPin,
  Plane,
} from "lucide-react";

export default function PaketUmrohPage() {
  // Data dummy untuk tampilan
  const [paketList] = useState([
    {
      id: 1,
      nama: "Paket Umroh Ramadhan Berkah",
      harga: "35.500.000",
      tanggal: "15 Maret 2026",
      maskapai: "Saudi Arabian Airlines",
      durasi: "12 Hari",
      status: "Aktif",
      pendaftar: 45,
      kuota: 50,
    },
    {
      id: 2,
      nama: "Umroh Plus Turki (Winter)",
      harga: "42.000.000",
      tanggal: "10 Desember 2026",
      maskapai: "Turkish Airlines",
      durasi: "15 Hari",
      status: "Draft",
      pendaftar: 0,
      kuota: 40,
    },
    {
      id: 3,
      nama: "Paket Ekonomi Syawal",
      harga: "28.900.000",
      tanggal: "05 April 2026",
      maskapai: "Lion Arab",
      durasi: "9 Hari",
      status: "Aktif",
      pendaftar: 20,
      kuota: 45,
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Manajemen Paket Umroh
          </h1>
          <p className="text-slate-500 text-sm">
            Kelola paket perjalanan yang akan tampil di website user.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200">
          <Plus size={18} />
          <span>Tambah Paket Baru</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Cari nama paket atau maskapai..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
          />
        </div>
        <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none text-slate-600">
          <option>Semua Status</option>
          <option>Aktif</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Info Paket
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Detail Perjalanan
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Kuota
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paketList.map((paket) => (
                <tr
                  key={paket.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800 mb-1">
                      {paket.nama}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Plane size={12} className="text-emerald-600" />
                      {paket.maskapai}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                      <Calendar size={14} />
                      {paket.tanggal}
                    </div>
                    <div className="text-xs text-slate-400 ml-5">
                      {paket.durasi}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-emerald-700 font-mono">
                      Rp {paket.harga}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-700">
                      {paket.pendaftar} / {paket.kuota}
                    </div>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500"
                        style={{
                          width: `${(paket.pendaftar / paket.kuota) * 100}%`,
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        paket.status === "Aktif"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {paket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">Menampilkan 3 dari 12 paket</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">
              Prev
            </button>
            <button className="px-3 py-1 text-xs bg-emerald-600 text-white rounded hover:bg-emerald-700">
              1
            </button>
            <button className="px-3 py-1 text-xs border border-slate-200 rounded hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
