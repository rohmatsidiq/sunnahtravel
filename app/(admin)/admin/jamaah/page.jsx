"use client";
import React, { useState } from "react";
import {
  Search,
  UserPlus,
  Filter,
  MoreHorizontal,
  Phone,
  CheckCircle2,
  Clock,
  Download,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function JamaahPage() {
  const router = useRouter();
  // Data dummy jamaah
  const [jamaahList] = useState([
    {
      id: 1,
      nama: "H. Ahmad Subarjo",
      nik: "3275012345678901",
      paket: "Umroh Ramadhan Berkah",
      telepon: "0812-3456-7890",
      statusBayar: "Lunas",
      tanggalDaftar: "12 Jan 2026",
    },
    {
      id: 2,
      nama: "Hj. Siti Aminah",
      nik: "3275012345678902",
      paket: "Umroh Plus Turki",
      telepon: "0857-1122-3344",
      statusBayar: "Cicilan",
      tanggalDaftar: "15 Jan 2026",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      nik: "3275012345678903",
      paket: "Paket Ekonomi Syawal",
      telepon: "0813-9988-7766",
      statusBayar: "Belum Bayar",
      tanggalDaftar: "20 Jan 2026",
    },
    {
      id: 4,
      nama: "Laila Maghfirah",
      nik: "3275012345678904",
      paket: "Umroh Ramadhan Berkah",
      telepon: "0819-2233-4455",
      statusBayar: "Lunas",
      tanggalDaftar: "21 Jan 2026",
    },
    {
      id: 5,
      nama: "Fahri Hamzah",
      nik: "3275012345678905",
      paket: "Umroh Plus Turki",
      telepon: "0812-8877-6655",
      statusBayar: "Cicilan",
      tanggalDaftar: "22 Jan 2026",
    },
    {
      id: 6,
      nama: "Andi Wijaya",
      nik: "3275012345678906",
      paket: "Paket Ekonomi Syawal",
      telepon: "0811-5544-3322",
      statusBayar: "Lunas",
      tanggalDaftar: "25 Jan 2026",
    },
    {
      id: 7,
      nama: "Dewi Lestari",
      nik: "3275012345678907",
      paket: "Umroh Ramadhan Berkah",
      telepon: "0812-1111-2222",
      statusBayar: "Belum Bayar",
      tanggalDaftar: "28 Jan 2026",
    },
    {
      id: 8,
      nama: "Rahmat Hidayat",
      nik: "3275012345678908",
      paket: "Umroh Plus Turki",
      telepon: "0856-4433-2211",
      statusBayar: "Lunas",
      tanggalDaftar: "01 Feb 2026",
    },
    {
      id: 9,
      nama: "Irfan Hakim",
      nik: "3275012345678909",
      paket: "Paket Ekonomi Syawal",
      telepon: "0877-6655-4433",
      statusBayar: "Cicilan",
      tanggalDaftar: "03 Feb 2026",
    },
    {
      id: 10,
      nama: "Zaskia Adya",
      nik: "3275012345678910",
      paket: "Umroh Ramadhan Berkah",
      telepon: "0812-0099-8877",
      statusBayar: "Lunas",
      tanggalDaftar: "05 Feb 2026",
    },
    {
      id: 11,
      nama: "H. Yusuf Mansur",
      nik: "3275012345678911",
      paket: "Paket VIP Itikaf",
      telepon: "0811-2233-4455",
      statusBayar: "Lunas",
      tanggalDaftar: "07 Feb 2026",
    },
    {
      id: 12,
      nama: "M. Rizky Billar",
      nik: "3275012345678912",
      paket: "Umroh Ramadhan Berkah",
      telepon: "0813-4455-6677",
      statusBayar: "Belum Bayar",
      tanggalDaftar: "10 Feb 2026",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Data Jamaah</h1>
          <p className="text-slate-500 text-sm">
            Total terdapat 1,240 jamaah terdaftar di sistem.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-all text-sm">
            <Download size={18} />
            <span>Export Excel</span>
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200 text-sm">
            <UserPlus size={18} />
            <span>Tambah Jamaah</span>
          </button>
        </div>
      </div>

      {/* Stats Mini Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-xs text-emerald-700 font-medium uppercase">
              Sudah Lunas
            </p>
            <p className="text-xl font-bold text-emerald-900">850</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-xs text-amber-700 font-medium uppercase">
              Menunggu Pelunasan
            </p>
            <p className="text-xl font-bold text-amber-900">390</p>
          </div>
        </div>
      </div>

      {/* Table & Filter Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari nama, NIK, atau nomor telepon..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 w-full md:w-auto justify-center">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Nama Jamaah
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Paket Pilihan
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Kontak
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Status Bayar
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Tgl Daftar
                </th>
                <th className="px-6 py-4 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {jamaahList.map((j) => (
                <tr
                  key={j.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-700 leading-tight">
                      {j.nama}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      NIK: {j.nik}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 font-medium">
                      {j.paket}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Phone size={12} className="text-emerald-500" />
                      {j.telepon}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${
                        j.statusBayar === "Lunas"
                          ? "bg-emerald-100 text-emerald-700"
                          : j.statusBayar === "Cicilan"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {j.statusBayar}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-500 italic">
                      {j.tanggalDaftar}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        router.push("/admin/jamaah/1");
                      }}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Table */}
        <div className="p-4 bg-slate-50/30 border-t border-slate-100 text-center">
          <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700">
            Lihat Semua Data Jamaah
          </button>
        </div>
      </div>
    </div>
  );
}
