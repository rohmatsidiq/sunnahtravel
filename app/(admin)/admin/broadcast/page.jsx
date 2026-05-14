"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  Send,
  Users,
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Search,
} from "lucide-react";

export default function BroadcastPage() {
  const [selectedGroup, setSelectedGroup] = useState("semua");
  const [message, setMessage] = useState("");

  // Data Dummy Riwayat Broadcast
  const [broadcastHistory] = useState([
    {
      id: "BC-001",
      judul: "Pengumuman Jadwal Manasik",
      grup: "Paket Ramadhan Berkah",
      via: "WhatsApp",
      sukses: 50,
      gagal: 0,
      status: "Selesai",
      tgl: "14 Mei 2026",
    },
    {
      id: "BC-002",
      judul: "Pengingat Dokumen Paspor H-30",
      grup: "Umroh Plus Turki (Winter)",
      via: "WhatsApp & Email",
      sukses: 38,
      gagal: 2,
      status: "Selesai",
      tgl: "10 Mei 2026",
    },
    {
      id: "BC-003",
      judul: "Tagihan Pelunasan Cicilan 2",
      grup: "Semua Jamaah Belum Lunas",
      via: "WhatsApp",
      sukses: 15,
      gagal: 0,
      status: "Selesai",
      tgl: "05 Mei 2026",
    },
  ]);

  // Template Pesan Cepat untuk Mempermudah Admin
  const templates = [
    {
      nama: "Jadwal Manasik",
      isi: "Assalamu'alaikum Wr. Wb. Diberitahukan kepada jamaah [Nama Jamaah], bahwa agenda Manasik Umroh akan dilaksanakan pada...",
    },
    {
      nama: "Pelunasan",
      isi: "Assalamu'alaikum, mengingatkan kembali bagi jamaah [Nama Jamaah] bahwa batas akhir pelunasan paket [Nama Paket] adalah...",
    },
    {
      nama: "Berkas Paspor",
      isi: "Assalamu'alaikum, mohon segera mengunggah kelengkapan berkas paspor Anda ke sistem Sunnah Travel sebelum...",
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
            Marketing & CRM
          </span>
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          WhatsApp Blast & Broadcast
        </h1>
        <p className="text-slate-500 font-medium mt-1">
          Kirim notifikasi pesan massal otomatis ke seluruh nomor WhatsApp atau
          email jamaah.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* KOLOM KIRI: FORM COMPOSER PESAN */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="font-black text-lg text-slate-800">
              Buat Pesan Massal
            </h3>

            {/* Pilih Target Grup */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                Target Penerima
              </label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full bg-slate-50 border border-transparent rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:bg-white focus:border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all cursor-pointer"
              >
                <option value="semua">Semua Jamaah Terdaftar</option>
                <option value="ramadhan">Grup Ramadhan Berkah</option>
                <option value="turki">Grup Umroh Plus Turki</option>
                <option value="belum-lunas">Status: Belum Lunas</option>
              </select>
            </div>

            {/* Quick Templates */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                Template Cepat
              </label>
              <div className="flex flex-wrap gap-2">
                {templates.map((tmpl, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage(tmpl.isi)}
                    className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-100/50 px-3 py-1.5 rounded-xl transition-all"
                  >
                    {tmpl.nama}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Pesan */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                Isi Pesan
              </label>
              <div className="relative">
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesan Anda di sini... Gunakan variabel seperti [Nama Jamaah] untuk personalisasi pesan otomatis."
                  className="w-full bg-slate-50 border border-transparent rounded-2xl p-4 text-sm font-medium text-slate-700 focus:bg-white focus:border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none"
                />
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                *Pesan akan dikirimkan menggunakan server gateway resmi Sunnah
                Travel.
              </p>
            </div>

            {/* Button Kirim */}
            <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-sm hover:-translate-y-0.5 transition-all shadow-xl shadow-emerald-200">
              <Send size={16} strokeWidth={2.5} />
              Kirim Broadcast Sekarang
            </button>
          </div>
        </div>

        {/* KOLOM KANAN: RIWAYAT BROADCAST */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-black text-xl text-slate-800">
              Riwayat Pengiriman
            </h3>
            <div className="relative w-48 group hidden sm:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500"
                size={14}
              />
              <input
                type="text"
                placeholder="Cari riwayat..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-xl border-none text-xs focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Pengumuman
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest">
                    Grup Target
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-center">
                    Rasio Sukses
                  </th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase text-slate-400 tracking-widest text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {broadcastHistory.map((bc) => (
                  <tr
                    key={bc.id}
                    className="hover:bg-slate-50/50 transition-all group"
                  >
                    <td className="px-8 py-6">
                      <div className="font-black text-slate-800 text-base">
                        {bc.judul}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mt-1">
                        <MessageSquare size={12} className="text-emerald-500" />
                        Via {bc.via} • {bc.tgl}
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-slate-500">
                      {bc.grup}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex gap-2 font-black text-slate-700">
                          <span className="text-emerald-600">
                            {bc.sukses} ✔
                          </span>
                          {bc.gagal > 0 && (
                            <span className="text-rose-500">{bc.gagal} ❌</span>
                          )}
                        </div>
                        <div className="w-24 h-1 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="h-full bg-emerald-500"
                            style={{
                              width: `${(bc.sukses / (bc.sukses + bc.gagal)) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border bg-emerald-50 text-emerald-700 border-emerald-100">
                        <CheckCircle2 size={12} />
                        {bc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
