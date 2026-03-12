import { Outlet, NavLink, useLocation } from "react-router";
import { useState } from "react";
import {
  Palette,
  Type,
  LayoutGrid,
  Ruler,
  Layers,
  Zap,
  Grid3x3,
  BookOpen,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "はじめに", path: "/", icon: BookOpen },
  { label: "カラー", path: "/colors", icon: Palette },
  { label: "タイポグラフィ", path: "/typography", icon: Type },
  { label: "スペーシング", path: "/spacing", icon: Ruler },
  { label: "コンポーネント", path: "/components", icon: Layers },
  { label: "アイコン", path: "/icons", icon: LayoutGrid },
  { label: "モーション", path: "/motion", icon: Zap },
  { label: "グリッド", path: "/grid", icon: Grid3x3 },
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentPage = navItems.find((item) =>
    item.path === "/" ? location.pathname === "/" : location.pathname === item.path
  );

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 z-40 flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-gray-900 leading-none">Design System</div>
              <div className="text-[10px] text-gray-400 leading-none mt-0.5">v1.0.0</div>
            </div>
          </div>
          <button
            className="ml-auto lg:hidden text-gray-400 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="mb-2 px-3">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              ガイドライン
            </span>
          </div>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname === item.path;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 group
                      ${isActive
                        ? "bg-violet-50 text-violet-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        isActive ? "text-violet-500" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <ChevronRight className="w-3 h-3 text-violet-400" />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-[11px] text-gray-500 leading-relaxed">
              最終更新日: <span className="text-gray-700">2026年3月12日</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center px-6 sticky top-0 z-20">
          <button
            className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[13px] text-gray-500">
            <span>Design System</span>
            {currentPage && currentPage.path !== "/" && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-900">{currentPage.label}</span>
              </>
            )}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-[12px] text-gray-400 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
              <span>最新版</span>
              <span className="bg-violet-100 text-violet-600 text-[10px] rounded px-1.5 py-0.5">v1.0.0</span>
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
