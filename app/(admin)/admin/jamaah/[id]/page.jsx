"use client";
import React, { useState } from "react";
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Plus, 
  FileText, 
  CreditCard 
} from "lucide-react";
import Link from "next/link";

export default function DetailJamaahPage() {
  const [activeSubTab, setActiveSubTab] = useState("pembayaran");

  // Data Dummy Detail
  const jamaah = {
    nama: "H. Ahmad Subarjo",
    paket: "Umroh Ramadhan Berkah",
    totalTagihan: 35500000,
    sudahBayar: 20000000,
    dokumen: [
      { id: 1, nama: "Scan Paspor", status: "Sudah Upload", verified: true },
      { id: 2, nama: "Scan KTP", status: "Sudah Upload", verified: true },
      { id: 3, nama: "Buku Kuning (Meningitis)", status: "Belum", verified: false },
      { id: 4, nama: "Pas Foto 4x6", status: "Proses Review", verified: false },
    ]
  };

  const riwayatBayar = [
    { tgl: "12 Jan 2026", jumlah: 5000000, metode: "Transfer BCA", ket: "DP Awal" },
    { tgl: "05 Feb 2026", jumlah: 15000000, metode: "Transfer Mandiri", ket: "Cicilan ke-1" },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/jamaah" className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <ArrowLeft size={20} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{jamaah.nama}</h1>
          <p className="text-sm text-slate-500">ID Registrasi: #REG-202601001</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri: Ringkasan Status */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Status Keuangan</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Tagihan</p>
                <p className="text-xl font-black text-slate-800 font-mono">Rp {jamaah.totalTagihan.toLocaleString('id-ID')}</p>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500" 
                  style={{ width: `${(jamaah.sudahBayar / jamaah.totalTagihan) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Sudah Dibayar</span>
                <span className="font-bold text-emerald-600">Rp {jamaah.sudahBayar.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="text-slate-500">Sisa Tagihan</span>
                <span className="font-bold text-rose-500">Rp {(jamaah.totalTagihan - jamaah.sudahBayar).toLocaleString('id-ID')}</span>
              </div>
            </div>
            <button className="w-full mt-6 flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
              <Plus size={16} /> Tambah Pembayaran
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Tabs Dokumen & Pembayaran */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Nav Tabs */}
            <div className="flex border-b border-slate-100">
              <button 
                onClick={() => setActiveSubTab("pembayaran")}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeSubTab === "pembayaran" ? "text-emerald-700 border-b-2 border-emerald-600 bg-emerald-50/30" : "text-slate-400 hover:text-slate-600"}`}
              >
                <CreditCard size={18} /> Riwayat Bayar
              </button>
              <button 
                onClick={() => setActiveSubTab("dokumen")}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeSubTab === "dokumen" ? "text-emerald-700 border-b-2 border-emerald-600 bg-emerald-50/30" : "text-slate-400 hover:text-slate-600"}`}
              >
                <FileText size={18} /> Berkas & Dokumen
              </button>
            </div>

            <div className="p-6">
              {activeSubTab === "pembayaran" ? (
                /* RIWAYAT PEMBAYARAN */
                <div className="space-y-4">
                  {riwayatBayar.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Rp {item.jumlah.toLocaleString('id-ID')}</p>
                          <p className="text-xs text-slate-400">{item.tgl} • {item.metode}</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-white px-2 py-1 rounded border text-slate-500 font-bold uppercase">{item.ket}</span>
                    </div>
                  ))}
                </div>
              ) : (
                /* MANAJEMEN DOKUMEN */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {jamaah.dokumen.map((doc) => (
                    <div key={doc.id} className="p-4 border border-slate-100 rounded-xl flex items-center justify-between group hover:border-emerald-200 transition-all">
                      <div className="flex items-center gap-3">
                        {doc.status === "Belum" ? (
                          <div className="p-2 bg-slate-100 text-slate-400 rounded-lg"><XCircle size={20}/></div>
                        ) : doc.verified ? (
                          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><CheckCircle2 size={20}/></div>
                        ) : (
                          <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><Clock size={20}/></div>
                        )}
                        <div>
                          <p className="text-sm font-bold text-slate-700">{doc.nama}</p>
                          <p className={`text-[10px] font-medium ${doc.status === "Belum" ? "text-rose-500" : "text-emerald-500"}`}>{doc.status}</p>
                        </div>
                      </div>
                      <button className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Upload size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}