"use client";
import React, { useState } from "react";
import {
  FileText,
  BedDouble,
  Download,
  Printer,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ManifestPage() {
  const [activeTab, setActiveTab] = useState("manifest");

  // Data Dummy Manifest
  const manifestData = [
    {
      id: 1,
      nama: "AHMAD SUBARJO",
      gender: "L",
      paspor: "A1234567",
      expiry: "12/10/2030",
      visa: "Approved",
    },
    {
      id: 2,
      nama: "SITI AMINAH",
      gender: "P",
      paspor: "B9876543",
      expiry: "05/01/2029",
      visa: "Approved",
    },
    {
      id: 3,
      nama: "BUDI SANTOSO",
      gender: "L",
      paspor: "C4455667",
      expiry: "20/02/2027",
      visa: "Process",
    },
    {
      id: 4,
      nama: "LAILA MAGHFIRAH",
      gender: "P",
      paspor: "D8899001",
      expiry: "15/05/2031",
      visa: "Approved",
    },
    {
      id: 5,
      nama: "FAHRI HAMZAH",
      gender: "L",
      paspor: "E2233445",
      expiry: "22/08/2028",
      visa: "Approved",
    },
    {
      id: 6,
      nama: "ANDI WIJAYA",
      gender: "L",
      paspor: "F5566778",
      expiry: "10/11/2026",
      visa: "Approved",
    },
    {
      id: 7,
      nama: "DEWI LESTARI",
      gender: "P",
      paspor: "G1122334",
      expiry: "14/03/2032",
      visa: "Process",
    },
    {
      id: 8,
      nama: "RAHMAT HIDAYAT",
      gender: "L",
      paspor: "H7788990",
      expiry: "01/06/2029",
      visa: "Approved",
    },
    {
      id: 9,
      nama: "IRFAN HAKIM",
      gender: "L",
      paspor: "I3344556",
      expiry: "19/09/2027",
      visa: "Approved",
    },
    {
      id: 10,
      nama: "ZASKIA ADYA",
      gender: "P",
      paspor: "J9900112",
      expiry: "04/12/2030",
      visa: "Approved",
    },
    {
      id: 11,
      nama: "H. YUSUF MANSUR",
      gender: "L",
      paspor: "K5544332",
      expiry: "07/02/2031",
      visa: "Approved",
    },
    {
      id: 12,
      nama: "LUCYANA",
      gender: "P",
      paspor: "L1100223",
      expiry: "25/07/2028",
      visa: "Process",
    },
    {
      id: 13,
      nama: "M. RIZKY",
      gender: "L",
      paspor: "M4455112",
      expiry: "11/11/2029",
      visa: "Approved",
    },
  ];

  // Data Dummy Roomlist
  // Data Dummy Roomlist yang diperbanyak
  const roomData = [
    {
      id: 1,
      room: "101",
      type: "Quad",
      occupants: [
        "H. Ahmad Subarjo",
        "Budi Santoso",
        "Fahri Hamzah",
        "Andi Wijaya",
      ],
    },
    {
      id: 2,
      room: "102",
      type: "Double",
      occupants: ["Hj. Siti Aminah", "Laila Maghfirah"],
    },
    {
      id: 3,
      room: "103",
      type: "Triple",
      occupants: ["Rahmat Hidayat", "Irfan Hakim", "M. Rizky"],
    },
    {
      id: 4,
      room: "104",
      type: "Double",
      occupants: ["Dewi Lestari", "Zaskia Adya"],
    },
    {
      id: 5,
      room: "201",
      type: "Quad",
      occupants: [
        "H. Yusuf Mansur",
        "Ustadz Hanan",
        "Ustadz Somad",
        "Ustadz Adi",
      ],
    },
    {
      id: 6,
      room: "202",
      type: "Triple",
      occupants: ["Lucyana", "Fatimah Azzahra", "Khadijah"],
    },
    {
      id: 7,
      room: "203",
      type: "Double",
      occupants: ["Suleiman", "Baim Wong"],
    },
    {
      id: 8,
      room: "204",
      type: "Quad",
      occupants: ["Raffi Ahmad", "Nagita Slavina", "Rafathar", "Rayyanza"],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Manifest & Roomlist
          </h1>
          <p className="text-slate-500 text-sm">
            Grup Keberangkatan:{" "}
            <span className="font-semibold text-emerald-700">
              15 Maret 2026 (Ramadhan Berkah)
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm hover:bg-slate-50 transition-all">
            <Printer size={16} />
            Cetak
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-all shadow-md">
            <Download size={16} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-slate-200/50 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("manifest")}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            activeTab === "manifest"
              ? "bg-white text-emerald-700 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <FileText size={16} />
          Manifest Maskapai
        </button>
        <button
          onClick={() => setActiveTab("roomlist")}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
            activeTab === "roomlist"
              ? "bg-white text-emerald-700 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <BedDouble size={16} />
          Roomlist Hotel
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {activeTab === "manifest" ? (
          /* TABLE MANIFEST */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    Nama Sesuai Paspor
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider text-center">
                    L/P
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    No. Paspor
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    Status Visa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {manifestData.map((m, index) => (
                  <tr
                    key={m.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-700">
                      {m.nama}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-slate-600">
                      {m.gender}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-600">
                      {m.paspor}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {m.expiry}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`flex items-center gap-1.5 text-[11px] font-bold ${
                          m.visa === "Approved"
                            ? "text-emerald-600"
                            : "text-amber-500"
                        }`}
                      >
                        {m.visa === "Approved" ? (
                          <CheckCircle size={14} />
                        ) : (
                          <AlertCircle size={14} />
                        )}
                        {m.visa.toUpperCase()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* CARDS ROOMLIST */
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomData.map((r) => (
              <div
                key={r.id}
                className="border border-slate-200 rounded-2xl p-5 hover:border-emerald-300 transition-colors bg-slate-50/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs font-bold">
                    Room {r.room}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    {r.type}
                  </span>
                </div>
                <div className="space-y-3">
                  {r.occupants.map((person, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400">
                        {i + 1}
                      </div>
                      {person}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-5 py-2 text-xs font-bold text-emerald-600 border border-emerald-100 rounded-xl hover:bg-emerald-50 transition-colors">
                  Edit Kamar
                </button>
              </div>
            ))}
            {/* Add Room Placeholder */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-300 cursor-pointer transition-all min-h-50">
              <BedDouble size={32} className="mb-2" />
              <span className="text-sm font-bold">Tambah Kamar Baru</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Summary Footnote */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <FileText size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total Manifest
            </p>
            <p className="text-lg font-bold text-slate-800">45 Jamaah</p>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <BedDouble size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total Kamar
            </p>
            <p className="text-lg font-bold text-slate-800">12 Kamar Terisi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
