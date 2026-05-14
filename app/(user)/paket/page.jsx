"use client";
import React, { useState } from "react";
import {
  Calendar,
  Plane,
  MapPin,
  Hotel,
  Clock,
  Users2,
  Filter,
  Search,
  ArrowRight,
  Sparkles,
  Timer,
} from "lucide-react";
import Link from "next/link";

export default function PaketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");

  // Data Dummy Paket yang Terintegrasi dari Sistem Admin (Simulasi)
  const [allPaket] = useState([
    {
      id: 1,
      nama: "Paket Umroh Ramadhan Berkah",
      kategori: "reguler",
      harga: "35.500.000",
      tanggal: "15 Maret 2027",
      maskapai: "Saudi Arabian Airlines",
      durasi: "12 Hari",
      hotelMakkah: "Anjum Hotel Makkah (★5)",
      hotelMadinah: "Al Aqeeq Madinah (★5)",
      pendaftar: 48,
      kuota: 50,
      tag: "Best Seller",
    },
    {
      id: 2,
      nama: "Umroh Plus Turki Cultural Winter",
      kategori: "plus",
      harga: "42.000.000",
      tanggal: "10 Desember 2026",
      maskapai: "Turkish Airlines",
      durasi: "15 Hari",
      hotelMakkah: "Pulman Zamzam Makkah (★5)",
      hotelMadinah: "Grand Mercure Madinah (★5)",
      pendaftar: 12,
      kuota: 40,
      tag: "Favorit",
    },
    {
      id: 3,
      nama: "Paket Hemat Ekonomi Syawal",
      kategori: "hemat",
      harga: "28.900.000",
      tanggal: "05 April 2027",
      maskapai: "Lion Arab Air",
      durasi: "9 Hari",
      hotelMakkah: "Fajr Al Badea Makkah (★3)",
      hotelMadinah: "Diyar Al Salam Madinah (★3)",
      pendaftar: 43,
      kuota: 45,
      tag: "Hemat",
    },
    {
      id: 4,
      nama: "Paket VIP Itikaf Akhir Ramadhan",
      kategori: "vip",
      harga: "48.900.000",
      tanggal: "22 Maret 2027",
      maskapai: "Emirates Airlines",
      durasi: "15 Hari",
      hotelMakkah: "Dar Al Ghufran Makkah (★5)",
      hotelMadinah: "Oberoi Madinah (★5)",
      pendaftar: 35,
      kuota: 40,
      tag: "Sisa 5 Kursi",
    },
    {
      id: 5,
      nama: "Umroh Awal Tahun Eksklusif 2027",
      kategori: "reguler",
      harga: "32.000.000",
      tanggal: "12 Januari 2027",
      maskapai: "Garuda Indonesia",
      durasi: "9 Hari",
      hotelMakkah: "Swissotel Al Maqam (★5)",
      hotelMadinah: "Al Haram Madinah (★5)",
      pendaftar: 25,
      kuota: 45,
      tag: "Terbaru",
    },
    {
      id: 6,
      nama: "Umroh Plus Thaif & Badar",
      kategori: "plus",
      harga: "36.500.000",
      tanggal: "18 Oktober 2026",
      maskapai: "Saudi Arabian Airlines",
      durasi: "12 Hari",
      hotelMakkah: "Movenpick Hajar Tower (★5)",
      hotelMadinah: "Dallah Taibah (★4)",
      pendaftar: 40,
      kuota: 40,
      tag: "Full Booked",
    },
    {
      id: 7,
      nama: "Paket Milenial Akhir Tahun",
      kategori: "hemat",
      harga: "27.500.000",
      tanggal: "28 Desember 2026",
      maskapai: "Oman Air",
      durasi: "9 Hari",
      hotelMakkah: "Al Kiswah Towers (★4)",
      hotelMadinah: "Nozol Royal Inn (★4)",
      pendaftar: 18,
      kuota: 50,
      tag: "Promo",
    },
    {
      id: 8,
      nama: "Umroh VIP Maqam Luxury",
      kategori: "vip",
      harga: "55.000.000",
      tanggal: "05 November 2026",
      maskapai: "Qatar Airways",
      durasi: "10 Hari",
      hotelMakkah: "Fairmont Makkah Clock Royal (★5)",
      hotelMadinah: "Anwar Al Madinah Movenpick (★5)",
      pendaftar: 15,
      kuota: 30,
      tag: "Super Luxury",
    },
    {
      id: 9,
      nama: "Umroh Syawal Berkah Keluarga",
      kategori: "reguler",
      harga: "31.500.000",
      tanggal: "10 April 2027",
      maskapai: "FlyNas",
      durasi: "9 Hari",
      hotelMakkah: "Le Meridien Makkah (★5)",
      hotelMadinah: "Saja Al Madinah (★4)",
      pendaftar: 30,
      kuota: 45,
      tag: "Keluarga",
    },
    {
      id: 10,
      nama: "Umroh Plus Dubai Desert Safari",
      kategori: "plus",
      harga: "44.500.000",
      tanggal: "15 Februari 2027",
      maskapai: "Emirates Airlines",
      durasi: "13 Hari",
      hotelMakkah: "Hilton Suites Makkah (★5)",
      hotelMadinah: "Elaf Grand Al Majeedi (★4)",
      pendaftar: 8,
      kuota: 35,
      tag: "Populer",
    },
    {
      id: 11,
      nama: "Paket Syuhada Ekonomi Nyaman",
      kategori: "hemat",
      harga: "26.900.000",
      tanggal: "20 September 2026",
      maskapai: "AirAsia X",
      durasi: "9 Hari",
      hotelMakkah: "Burj Al Sultan (★3)",
      hotelMadinah: "Al Saha Hotel (★3)",
      pendaftar: 42,
      kuota: 45,
      tag: "Sisa 3 Kursi",
    },
    {
      id: 12,
      nama: "Umroh VIP Royal Itikaf",
      kategori: "vip",
      harga: "52.000.000",
      tanggal: "25 Maret 2027",
      maskapai: "Saudi Arabian Airlines",
      durasi: "16 Hari",
      hotelMakkah: "Raffles Makkah Palace (★5)",
      hotelMadinah: "The Oberoi Madinah (★5)",
      pendaftar: 19,
      kuota: 25,
      tag: "Terbatas",
    },
    {
      id: 13,
      nama: "Umroh Reguler Muharram 1448H",
      kategori: "reguler",
      harga: "33.000.000",
      tanggal: "18 Juli 2026",
      maskapai: "Garuda Indonesia",
      durasi: "10 Hari",
      hotelMakkah: "Anjum Hotel Makkah (★5)",
      hotelMadinah: "Al Aqeeq Madinah (★5)",
      pendaftar: 22,
      kuota: 50,
      tag: "Tahun Baru Islam",
    },
    {
      id: 14,
      nama: "Umroh Plus Aqsha & Jordan",
      kategori: "plus",
      harga: "49.500.000",
      tanggal: "05 Mei 2027",
      maskapai: "Royal Jordanian",
      durasi: "17 Hari",
      hotelMakkah: "Swissotel Makkah (★5)",
      hotelMadinah: "Pullman Zamzam Madinah (★5)",
      pendaftar: 14,
      kuota: 30,
      tag: "Sejarah",
    },
    {
      id: 15,
      nama: "Paket Hemat Backpacker Syawal",
      kategori: "hemat",
      harga: "25.000.000",
      tanggal: "08 April 2027",
      maskapai: "Scoot",
      durasi: "9 Hari",
      hotelMakkah: "Rehab Al Maqam (★3)",
      hotelMadinah: "Elaf Meshal Al Madinah (★3)",
      pendaftar: 49,
      kuota: 50,
      tag: "Termurah",
    },
    {
      id: 16,
      nama: "Umroh VIP Akhir Tahun Gold",
      kategori: "vip",
      harga: "47.000.000",
      tanggal: "24 Desember 2026",
      maskapai: "Etihad Airways",
      durasi: "12 Hari",
      hotelMakkah: "Movenpick Hajar Tower (★5)",
      hotelMadinah: "Anwar Al Madinah (★5)",
      pendaftar: 28,
      kuota: 40,
      tag: "Liburan",
    },
    {
      id: 17,
      nama: "Umroh Reguler Maulid Nabi",
      kategori: "reguler",
      harga: "32.500.000",
      tanggal: "05 September 2026",
      maskapai: "Saudi Arabian Airlines",
      durasi: "9 Hari",
      hotelMakkah: "Swissotel Al Maqam (★5)",
      hotelMadinah: "Dallah Taibah (★4)",
      pendaftar: 31,
      kuota: 45,
      tag: "Maulid",
    },
    {
      id: 18,
      nama: "Umroh Plus Mesir & Piramida",
      kategori: "plus",
      harga: "43.000.000",
      tanggal: "12 November 2026",
      maskapai: "EgyptAir",
      durasi: "14 Hari",
      hotelMakkah: "Pullman Zamzam Makkah (★5)",
      hotelMadinah: "Grand Mercure (★5)",
      pendaftar: 10,
      kuota: 35,
      tag: "Eksotis",
    },
    {
      id: 19,
      nama: "Paket Hemat Al-Manar Rabiul Awal",
      kategori: "hemat",
      harga: "27.200.000",
      tanggal: "22 September 2026",
      maskapai: "Lion Arab Air",
      durasi: "9 Hari",
      hotelMakkah: "Al Kiswah Towers (★4)",
      hotelMadinah: "Saja Al Madinah (★4)",
      pendaftar: 35,
      kuota: 45,
      tag: "Hemat",
    },
    {
      id: 20,
      nama: "Umroh VIP Platinum Syafari",
      kategori: "vip",
      harga: "58.500.000",
      tanggal: "19 Januari 2027",
      maskapai: "Qatar Airways",
      durasi: "10 Hari",
      hotelMakkah: "Raffles Makkah Palace (★5)",
      hotelMadinah: "The Oberoi Madinah (★5)",
      pendaftar: 8,
      kuota: 20,
      tag: "Platinum",
    },
    {
      id: 21,
      nama: "Umroh Reguler Liburan Sekolah",
      kategori: "reguler",
      harga: "34.000.000",
      tanggal: "15 Juni 2026",
      maskapai: "Garuda Indonesia",
      durasi: "12 Hari",
      hotelMakkah: "Anjum Hotel Makkah (★5)",
      hotelMadinah: "Al Aqeeq Madinah (★5)",
      pendaftar: 42,
      kuota: 50,
      tag: "Edukasi Anak",
    },
    {
      id: 22,
      nama: "Umroh Plus Uzbekistan Jalur Sutra",
      kategori: "plus",
      harga: "46.000.000",
      tanggal: "02 September 2026",
      maskapai: "Uzbekistan Airways",
      durasi: "15 Hari",
      hotelMakkah: "Swissotel Makkah (★5)",
      hotelMadinah: "Dallah Taibah (★4)",
      pendaftar: 15,
      kuota: 30,
      tag: "Sufi Track",
    },
    {
      id: 23,
      nama: "Paket Hemat Shofa Jumadil Akhir",
      kategori: "hemat",
      harga: "26.500.000",
      tanggal: "14 November 2026",
      maskapai: "FlyNas",
      durasi: "9 Hari",
      hotelMakkah: "Fajr Al Badea Makkah (★3)",
      hotelMadinah: "Diyar Al Salam (★3)",
      pendaftar: 44,
      kuota: 45,
      tag: "Sisa 1 Kursi",
    },
    {
      id: 24,
      nama: "Umroh VIP Ramadhan Awal Musim",
      kategori: "vip",
      harga: "45.000.000",
      tanggal: "02 Maret 2027",
      maskapai: "Saudi Arabian Airlines",
      durasi: "12 Hari",
      hotelMakkah: "Swissotel Al Maqam (★5)",
      hotelMadinah: "Anwar Al Madinah (★5)",
      pendaftar: 38,
      kuota: 40,
      tag: "Ramadhan VIP",
    },
    {
      id: 25,
      nama: "Umroh Reguler Rajab Agung",
      kategori: "reguler",
      harga: "33.500.000",
      tanggal: "05 Februari 2027",
      maskapai: "Garuda Indonesia",
      durasi: "9 Hari",
      hotelMakkah: "Le Meridien Makkah (★5)",
      hotelMadinah: "Al Haram Madinah (★5)",
      pendaftar: 20,
      kuota: 45,
      tag: "Bulan Haram",
    },
    {
      id: 26,
      nama: "Umroh Plus Balkan & Bosnia",
      kategori: "plus",
      harga: "51.000.000",
      tanggal: "12 Mei 2027",
      maskapai: "Turkish Airlines",
      durasi: "16 Hari",
      hotelMakkah: "Anjum Hotel Makkah (★5)",
      hotelMadinah: "Grand Mercure (★5)",
      pendaftar: 5,
      kuota: 25,
      tag: "Eropa Timur",
    },
    {
      id: 27,
      nama: "Paket Hemat Marwah Sya'ban",
      kategori: "hemat",
      harga: "27.900.000",
      tanggal: "20 Februari 2027",
      maskapai: "Oman Air",
      durasi: "9 Hari",
      hotelMakkah: "Al Kiswah Towers (★4)",
      hotelMadinah: "Nozol Royal Inn (★4)",
      pendaftar: 30,
      kuota: 50,
      tag: "Pra-Ramadhan",
    },
    {
      id: 28,
      nama: "Umroh VIP Syawal Emerald",
      kategori: "vip",
      harga: "46.500.000",
      tanggal: "15 April 2027",
      maskapai: "Emirates Airlines",
      durasi: "12 Hari",
      hotelMakkah: "Dar Al Ghufran (★5)",
      hotelMadinah: "Dallah Taibah (★4)",
      pendaftar: 12,
      kuota: 30,
      tag: "Lebaran VIP",
    },
    {
      id: 29,
      nama: "Umroh Reguler Akhir Tahun 2026",
      kategori: "reguler",
      harga: "34.500.000",
      tanggal: "30 Desember 2026",
      maskapai: "Saudi Arabian Airlines",
      durasi: "10 Hari",
      hotelMakkah: "Swissotel Al Maqam (★5)",
      hotelMadinah: "Al Aqeeq Madinah (★5)",
      pendaftar: 45,
      kuota: 50,
      tag: "Tahun Baru",
    },
    {
      id: 30,
      nama: "Umroh Plus Cordoba & Spanyol Islam",
      kategori: "plus",
      harga: "56.000.000",
      tanggal: "04 Maret 2027",
      maskapai: "Qatar Airways",
      durasi: "17 Hari",
      hotelMakkah: "Pullman Zamzam (★5)",
      hotelMadinah: "Anwar Al Madinah (★5)",
      pendaftar: 18,
      kuota: 30,
      tag: "Andalusia",
    },
  ]);

  // Filter Logika berdasarkan kategori dan pencarian kata kunci
  const filteredPaket = allPaket.filter((paket) => {
    const matchesCategory =
      selectedCategory === "semua" || paket.kategori === selectedCategory;
    const matchesSearch =
      paket.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paket.maskapai.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-24">
      {/* HEADER SECTION - Menampilkan Ambience Islami & Kemewahan */}
      <section className="bg-linear-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            <Sparkles size={12} /> Pilihan Perjalanan Terbaik
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Katalog Paket Umroh
          </h1>
          <p className="text-emerald-100/70 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Seluruh biaya paket kami bersifat{" "}
            <span className="text-white font-bold underline decoration-emerald-400">
              All-In
            </span>
            , jujur, dan transparan tanpa ada biaya tersembunyi di kemudian
            hari.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-4 rounded-4xl shadow-sm border border-slate-100 flex flex-col lg:flex-row justify-between gap-4">
          {/* Tab Filter Kategori */}
          <div className="flex flex-wrap gap-1 bg-slate-50 p-1 rounded-2xl text-xs font-black uppercase tracking-wider w-full lg:w-auto">
            {[
              { id: "semua", label: "Semua Paket" },
              { id: "reguler", label: "Reguler ★5" },
              { id: "vip", label: "VIP Itikaf" },
              { id: "plus", label: "Umroh Plus" },
              { id: "hemat", label: "Ekonomi Hemat" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-xl transition-all flex-1 lg:flex-none text-center whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
              size={16}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama paket/maskapai..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent border focus:bg-white focus:border-emerald-100 rounded-2xl focus:outline-none text-xs font-semibold placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* KATALOG LISTING CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        {filteredPaket.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPaket.map((paket) => {
              const sisaKuota = paket.kuota - paket.pendaftar;
              const hampirPenuh = sisaKuota <= 5;

              return (
                <div
                  key={paket.id}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
                >
                  {/* Bagian Utama Atas Card */}
                  <div className="p-8 lg:p-10 space-y-6">
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md border ${
                          paket.tag === "Best Seller"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : paket.tag === "Hemat"
                              ? "bg-blue-50 text-blue-700 border-blue-100"
                              : "bg-purple-50 text-purple-700 border-purple-100"
                        }`}
                      >
                        {paket.tag}
                      </span>

                      <div
                        className={`flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-xl border ${
                          hampirPenuh
                            ? "bg-rose-50 text-rose-600 border-rose-100 animate-pulse"
                            : "bg-slate-50 text-slate-500 border-slate-200/60"
                        }`}
                      >
                        <Timer size={13} />
                        {sisaKuota > 0
                          ? `Sisa ${sisaKuota} Kursi`
                          : "Kuota Penuh"}
                      </div>
                    </div>

                    {/* Judul Paket */}
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                      {paket.nama}
                    </h3>

                    {/* Spek Fasilitas Utama */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-2 border-t border-slate-50">
                      <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                        <Clock
                          size={16}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[10px] uppercase font-black text-slate-400">
                            Durasi Perjalanan
                          </p>
                          <p className="text-slate-800 font-bold mt-0.5">
                            {paket.durasi}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                        <Calendar
                          size={16}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[10px] uppercase font-black text-slate-400">
                            Estimasi Keberangkatan
                          </p>
                          <p className="text-slate-800 font-bold mt-0.5">
                            {paket.tanggal}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                        <Plane
                          size={16}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[10px] uppercase font-black text-slate-400">
                            Penerbangan / Maskapai
                          </p>
                          <p className="text-slate-800 font-bold mt-0.5">
                            {paket.maskapai}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-600">
                        <Hotel
                          size={16}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[10px] uppercase font-black text-slate-400">
                            Fasilitas Akomodasi
                          </p>
                          <p className="text-slate-700 font-bold mt-0.5 text-[11px] leading-tight">
                            🕋 {paket.hotelMakkah}
                            <br />
                            🕌 {paket.hotelMadinah}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bagian Bawah Card (Harga & CTA) */}
                  <div className="bg-slate-50/70 px-8 py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                        Harga Kamar Quad (Sekamar Berempat)
                      </p>
                      <p className="text-2xl font-black text-slate-800 font-mono mt-0.5">
                        <span className="text-emerald-600 text-sm font-bold mr-0.5">
                          Rp
                        </span>
                        {paket.harga}
                      </p>
                    </div>
                    <Link
                      href={`https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(paket.nama)}`}
                      target="_blank"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-6 py-4 rounded-xl transition-all shadow-md shadow-emerald-100 group/btn"
                    >
                      Hubungi Kami
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* State Ketika Pencarian Kosong */
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-100 max-w-md mx-auto p-8 space-y-4">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search size={24} />
            </div>
            <h4 className="font-black text-slate-800 text-lg">
              Paket Tidak Ditemukan
            </h4>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed">
              Mohon maaf, kata kunci atau filter kategori yang Anda cari saat
              ini tidak tersedia. Coba cari dengan kata kunci lain.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
