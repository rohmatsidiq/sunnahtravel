import React from "react";
import {
  FaKaaba,
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaCalendarAlt,
  FaQuoteLeft,
  FaClock,
  FaHotel,
  FaPlane,
  FaUserShield,
  FaBookOpen,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* --- Header & Nav --- */}

      {/* --- Hero Section: Fokus Keberkahan --- */}
      <section className="relative pt-16 pb-24 bg-[radial-gradient(at_top_left,var(--tw-gradient-stops))] from-emerald-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center justify-center gap-16">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black text-emerald-950 mb-8 leading-[1.05] tracking-tight">
                Mengejar Makbul, <br />
                <span className="text-emerald-600 italic">Menjaga Sunnah.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Kami memastikan setiap langkah ibadah Anda memiliki landasan
                dalil yang sahih. Didampingi asatidzah yang berkompeten memahami
                fikih ibadah di Tanah Suci.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-12 py-6 rounded-4xl font-black text-xl shadow-2xl shadow-emerald-200 flex items-center justify-center gap-4 transition-all hover:-translate-y-1 active:scale-95">
                  Lihat Paket 1447H <FaArrowRight />
                </button>
                <button className="w-full sm:w-auto bg-white border-2 border-emerald-100 text-emerald-800 px-10 py-6 rounded-4xl font-black text-xl hover:bg-emerald-50 transition active:scale-95">
                  Manasik Gratis
                </button>
              </div>
            </div>

            <div className="lg:w-1/3 mt-20 lg:mt-0 relative group">
              <div className="absolute -inset-10 bg-emerald-200/20 rounded-full blur-3xl opacity-50" />
              <div className="relative rounded-[60px] overflow-hidden border-16 border-white shadow-2xl shadow-emerald-100/50 transform lg:-rotate-2 group-hover:rotate-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
                  alt="Ibadah Sunnah Makkah"
                  className="w-full h-150 object-cover"
                />
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur px-6 py-4 rounded-3xl shadow-xl">
                  <p className="text-emerald-800 font-black text-xl">
                    100% Sahih
                  </p>
                  <p className="text-slate-500 text-xs font-bold uppercase">
                    Tanpa Bid'ah & Khurafat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sunnah Pillar Section --- */}
      <section
        id="manhaj"
        className="py-32 bg-emerald-950 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-emerald-400 font-black tracking-widest uppercase mb-4">
              Prinsip Kami
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black">
              Mengapa Memilih Kami?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaBookOpen />,
                t: "Bimbingan Dalil",
                d: "Setiap tata cara umroh dibimbing berdasarkan hadits-hadits shahih, bukan sekadar tradisi.",
              },
              {
                icon: <FaUserShield />,
                t: "Asatidzah Sunnah",
                d: "Didampingi oleh ustadz yang berpegang teguh pada pemahaman Salafush Shalih.",
              },
              {
                icon: <FaClock />,
                t: "Waktu Afdhal",
                d: "Kami mengatur jadwal agar Anda bisa mengejar waktu-waktu mustajab ibadah tanpa terburu-buru.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="inline-flex w-20 h-20 bg-emerald-600 rounded-full items-center justify-center text-3xl mb-8 shadow-xl shadow-emerald-900/50">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{item.t}</h4>
                <p className="text-emerald-100/70 leading-relaxed font-medium">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Packages --- */}
      <section id="paket" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-emerald-600 font-black tracking-widest uppercase mb-4">
            Pilihan Paket
          </h2>
          <h3 className="text-4xl font-black text-emerald-950 leading-tight">
            Jadwal Keberangkatan Musim 1447H
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "Umroh Syawal Sunnah",
              price: "29.5",
              dur: "09 Hari",
              flight: "Saudia Direct",
              hotel: "Bintang 4",
              status: "Open",
            },
            {
              name: "Umroh Ramadhan I'tikaf",
              price: "48.9",
              dur: "15 Hari",
              flight: "Garuda Indonesia",
              hotel: "Bintang 5",
              status: "Sisa 5 Seat",
            },
            {
              name: "Haji Furoda Sesuai Sunnah",
              price: "295",
              dur: "25 Hari",
              flight: "Qatar Airways",
              hotel: "Bintang 5 Platinum",
              status: "Sisa 2 Seat",
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-[50px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
            >
              <div className="h-64 bg-emerald-900 relative flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="relative z-10 text-white font-black text-2xl uppercase tracking-widest opacity-40 italic">
                  Umroh Sunnah
                </div>
                <div className="absolute top-8 right-8 bg-orange-500 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  {pkg.status}
                </div>
              </div>
              <div className="p-12 grow">
                <h4 className="text-2xl font-black text-emerald-950 mb-8">
                  {pkg.name}
                </h4>
                <div className="space-y-5 mb-10">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500 border-b border-slate-50 pb-3">
                    <span className="flex items-center gap-2 text-emerald-600">
                      <FaCalendarAlt /> Durasi
                    </span>
                    <span>{pkg.dur}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500 border-b border-slate-50 pb-3">
                    <span className="flex items-center gap-2 text-emerald-600">
                      <FaPlane /> Maskapai
                    </span>
                    <span>{pkg.flight}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500 border-b border-slate-50 pb-3">
                    <span className="flex items-center gap-2 text-emerald-600">
                      <FaHotel /> Akomodasi
                    </span>
                    <span>{pkg.hotel}</span>
                  </div>
                </div>
                <div className="flex items-end justify-between pt-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">
                      Harga Mulai Dari
                    </p>
                    <p className="text-3xl font-black text-emerald-700 font-mono">
                      Rp {pkg.price}jt
                    </p>
                  </div>
                  <button className="bg-emerald-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-all active:scale-90">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
