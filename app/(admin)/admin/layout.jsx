"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  ClipboardList,
  Menu,
  ChevronRight,
  LogOut,
  Bell,
  Search,
  Landmark,
  Truck,
  MessageSquare,
  Star,
  X,
} from "lucide-react";
import { FaKaaba } from "react-icons/fa";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Pengelompokan Menu
  const menuGroups = [
    {
      group: "Utama",
      items: [
        {
          name: "Dashboard",
          href: "/admin",
          icon: <LayoutDashboard size={20} />,
        },
        {
          name: "Paket Umroh",
          href: "/admin/paket",
          icon: <Package size={20} />,
        },
      ],
    },
    {
      group: "Operasional",
      items: [
        {
          name: "Data Jamaah",
          href: "/admin/jamaah",
          icon: <Users size={20} />,
        },
        {
          name: "Manifest & Room",
          href: "/admin/manifest",
          icon: <ClipboardList size={20} />,
        },
        {
          name: "Logistik",
          href: "/admin/logistik",
          icon: <Truck size={20} />,
        },
      ],
    },
    {
      group: "Keuangan",
      items: [
        {
          name: "Transaksi",
          href: "/admin/transaksi",
          icon: <Landmark size={20} />,
        },
      ],
    },
    {
      group: "Marketing",
      items: [
        {
          name: "Broadcast",
          href: "/admin/broadcast",
          icon: <MessageSquare size={20} />,
        },
        {
          name: "Testimoni",
          href: "/admin/testimoni",
          icon: <Star size={20} />,
        },
      ],
    },
  ];

  return (
    <div className="h-screen w-full bg-slate-50 flex overflow-hidden font-sans text-slate-900">
      {/* Overlay Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-emerald-950 text-emerald-50 
        transition-all duration-300 ease-in-out flex flex-col shadow-2xl lg:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo Section */}
        <div className="p-8 flex items-center justify-between border-b border-emerald-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-700 p-2.5 rounded-2xl shadow-lg">
              <FaKaaba className="text-white text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                Sunnah Travel
              </span>
              <span className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em] mt-1">
                Portal Admin
              </span>
            </div>
          </div>
          <button
            className="lg:hidden text-emerald-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {menuGroups.map((group) => (
            <div key={group.group} className="space-y-2">
              <p className="text-[10px] font-black text-emerald-800 uppercase px-4 mb-3 tracking-[0.25em]">
                {group.group}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`
                        flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 group
                        ${
                          isActive
                            ? "bg-emerald-600 text-white shadow-xl shadow-emerald-900/40"
                            : "hover:bg-emerald-900/40 text-emerald-100/60 hover:text-white"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`${isActive ? "text-white" : "text-emerald-600 group-hover:text-emerald-300"}`}
                        >
                          {item.icon}
                        </span>
                        <span className="text-[13px] font-bold tracking-wide">
                          {item.name}
                        </span>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer Sidebar */}
        <div className="p-6 border-t border-emerald-900/50 shrink-0">
          <div className="bg-emerald-900/20 rounded-4xl p-2 border border-emerald-800/30">
            <button className="flex items-center gap-4 p-3 w-full text-emerald-400 hover:text-rose-400 transition-all group">
              <div className="p-2.5 bg-emerald-950 rounded-xl group-hover:bg-rose-950/50 transition-all border border-emerald-800/50 group-hover:border-rose-900/50">
                <LogOut size={18} />
              </div>
              <span className="text-sm font-black tracking-wide">
                Keluar Akun
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* AREA KANAN */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* HEADER */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-8 shrink-0 z-30 sticky top-0">
          <div className="flex items-center gap-6">
            <button
              className="p-2.5 lg:hidden text-slate-600 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="hidden md:flex items-center bg-slate-100/80 rounded-2xl px-5 py-2.5 w-80 border border-transparent focus-within:border-emerald-500/20 focus-within:bg-white transition-all shadow-inner">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Cari transaksi atau jamaah..."
                className="bg-transparent border-none focus:ring-0 text-[13px] ml-3 w-full text-slate-600 font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Notification */}
            <button className="relative p-2.5 text-slate-400 hover:bg-slate-100 rounded-xl transition-all group">
              <Bell
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-800 leading-none">
                  Rohmat Sidiq
                </p>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest mt-1.5 bg-emerald-50 px-2 py-0.5 rounded">
                  Super Admin
                </p>
              </div>
              <div className="relative group cursor-pointer">
                <div className="w-12 h-12 bg-linear-to-tr from-emerald-600 to-teal-400 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-emerald-200 group-hover:scale-105 transition-all duration-300">
                  RS
                </div>
                <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-emerald-500 border-[3px] border-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] custom-scrollbar relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-size-[24px_24px]" />
          </div>

          <div className="p-6 lg:p-12 max-w-7xl mx-auto relative z-10">
            {children}
            <div className="h-10" />
          </div>
        </main>
      </div>

      {/* Global CSS for Custom Scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #cbd5e1;
        }
        @media (min-width: 1024px) {
          aside .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #064e3b;
          }
        }
      `}</style>
    </div>
  );
}
