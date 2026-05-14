"use client";
import React, { useState } from "react";
import {
  Landmark,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Eye,
  FileSpreadsheet,
  TrendingUp,
} from "lucide-react";

export default function TransaksiPage() {
  const [activeTab, setActiveTab] = useState("semua");

  // Data Dummy Transaksi Masuk & Keluar
  const [transaksiList] = useState([
    {
      id: "TX-1001",
      nama: "H. Ahmad Subarjo",
      tipe: "Income",
      paket: "Umroh Ramadhan Berkah",
      jumlah: 15000000,
      metode: "Transfer BCA",
      status: "Berhasil",
      tgl: "14 Mei 2026",
    },
    {
      id: "TX-1002",
      nama: "Siti Aminah",
      tipe: "Income",
      paket: "Umroh Plus Turki",
      jumlah: 5000000,
      metode: "Transfer Mandiri",
      status: "Pending",
      tgl: "14 Mei 2026",
    },
    {
      id: "TX-1003",
      nama: "Saudi Airlines (Tiket Grup)",
      tipe: "Expense",
      paket: "Umroh Ramadhan Berkah",
      jumlah: 145000000,
      metode: "Corporate Bank",
      status: "Berhasil",
      tgl: "12 Mei 2026",
    },
    {
      id: "TX-1004",
      nama: "Budi Santoso",
      tipe: "Income",
      paket: "Paket Ekonomi Syawal",
      jumlah: 28900000,
      metode: "Transfer BCA",
      status: "Berhasil",
      tgl: "10 Mei 2026",
    },
    {
      id: "TX-1005",
      nama: "Hotel Dar Al Iman (Madinah)",
      tipe: "Expense",
      paket: "Umroh Plus Turki",
      jumlah: 85000000,
      metode: "Swift Transfer",
      status: "Berhasil",
      tgl: "08 Mei 2026",
    },
    {
      id: "TX-1006",
      nama: "Laila Maghfirah",
      tipe: "Income",
      paket: "Umroh Ramadhan Berkah",
      jumlah: 5000000,
      metode: "Transfer BRI",
      status: "Gagal",
      tgl: "05 Mei 2026",
    },
  ]);

  // Filter berdasarkan Tab
  const filteredTransaksi = transaksiList.filter((tx) => {
    if (activeTab === "income") return tx.tipe === "Income";
    if (activeTab === "expense") return tx.tipe === "Expense";
    return true; // semua
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
              Finance & Accounting
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Transaksi & Kas
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Pantau seluruh arus uang masuk dari jamaah dan pengeluaran
            operasional vendor.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3.5 rounded-2xl font-black transition-all shadow-xl shadow-slate-200 text-sm">
          <FileSpreadsheet size={18} />
          <span>Ekspor Jurnal (CSV)</span>
        </button>
      </div>

      {/* Ringkasan Keuangan Ringkas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Total Pemasukan (Bulan Ini)
            </p>
            <h3 className="text-2xl font-black text-slate-800 mt-1 font-mono">
              Rp 53.900.000
            </h3>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
            <ArrowUpRight size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Total Pengeluaran (Bulan Ini)
            </p>
            <h3 className="text-2xl font-black text-slate-800 mt-1 font-mono">
              Rp 230.000.000
            </h3>
          </div>
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center">
            <ArrowDownLeft size={24} />
          </div>
        </div>
        <div className="bg-linear-to-br from-emerald-800 to-emerald-950 p-6 rounded-4xl text-white shadow-xl shadow-emerald-900/10 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-emerald-300 uppercase tracking-wider">
              Estimasi Net Profit
            </p>
            <h3 className="text-2xl font-black mt-1 font-mono">
              Rp 124.500.000
            </h3>
          </div>
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-slate-200/50 p-1.5 rounded-2xl w-fit text-xs font-black uppercase tracking-wider">
        <button
          onClick={() => setActiveTab("semua")}
          className={`px-6 py-3 rounded-xl transition-all ${activeTab === "semua" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
        >
          Semua Arus Kas
        </button>
        <button
          onClick={() => setActiveTab("income")}
          className={`px-6 py-3 rounded-xl transition-all ${activeTab === "income" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
        >
          Pemasukan (Jamaah)
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`px-6 py-3 rounded-xl transition-all ${activeTab === "expense" ? "bg-white text-emerald-900 shadow-sm" : "text-slate-500"}`}
        >
          Pengeluaran (Vendor)
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
            placeholder="Cari ID transaksi, nama, atau paket..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white border focus:border-emerald-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm font-medium"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 text-slate-600 rounded-3xl font-bold text-xs hover:bg-slate-100 transition-all">
          <Filter size={16} />
          Filter Tanggal
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                  ID / Tanggal
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                  Deskripsi / Mitra
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                  Alokasi Paket
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                  Metode
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">
                  Nominal
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-center">
                  Status
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {filteredTransaksi.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-slate-50/50 transition-all group"
                >
                  <td className="px-8 py-6">
                    <div className="font-black text-slate-800">{tx.id}</div>
                    <div className="text-xs text-slate-400 font-bold mt-1">
                      {tx.tgl}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          tx.tipe === "Income"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-rose-50 text-rose-600"
                        }`}
                      >
                        {tx.tipe === "Income" ? (
                          <ArrowUpRight size={16} />
                        ) : (
                          <ArrowDownLeft size={16} />
                        )}
                      </div>
                      <div>
                        <span className="font-black text-slate-800 text-base">
                          {tx.nama}
                        </span>
                        <p className="text-[10px] uppercase font-black text-slate-400 mt-0.5">
                          {tx.tipe}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-500">
                    {tx.paket}
                  </td>
                  <td className="px-8 py-6 font-semibold text-slate-600">
                    {tx.metode}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span
                      className={`font-black text-base font-mono ${
                        tx.tipe === "Income"
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {tx.tipe === "Income" ? "+" : "-"} Rp{" "}
                      {tx.jumlah.toLocaleString("id-ID")}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border ${
                        tx.status === "Berhasil"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : tx.status === "Pending"
                            ? "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"
                            : "bg-rose-50 text-rose-700 border-rose-100"
                      }`}
                    >
                      {tx.status === "Berhasil" ? (
                        <CheckCircle2 size={12} />
                      ) : tx.status === "Pending" ? (
                        <Clock size={12} />
                      ) : (
                        <XCircle size={12} />
                      )}
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-1">
                      {tx.status === "Pending" ? (
                        <button className="text-[11px] font-black bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg transition-all shadow-md shadow-emerald-100">
                          Approve
                        </button>
                      ) : (
                        <>
                          <button
                            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-all"
                            title="Lihat Detail"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-slate-100 transition-all"
                            title="Unduh Kuitansi"
                          >
                            <Download size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
