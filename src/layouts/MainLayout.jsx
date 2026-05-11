import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ui } from "../styles";
import AIBotWidget from "../components/AIBotWidget";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Project", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className={ui.shell}>
      <header
className="
  sticky top-6 z-20
  border-4 border-black bg-white p-4
  shadow-[8px_8px_0px_black]
  transition-all duration-200
"
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between">
          {/* BRAND */}
          <NavLink
            to="/"
            className="inline-flex items-center gap-3 font-black text-black"
            onClick={() => setOpen(false)}
          >
            <span
              className="
                grid h-[46px] w-[46px] place-items-center
                border-4 border-black bg-[#00e5ff]
                text-sm font-black shadow-[4px_4px_0px_black]
                rotate-[-2deg]
              "
            >
              ZM
            </span>
            <span className="text-lg tracking-tight">
              Zarni Maung
            </span>
          </NavLink>

          {/* BURGER BUTTON */}
          <button
            className="md:hidden border-4 border-black px-3 py-2 font-black bg-[#f1f1f1] shadow-[3px_3px_0px_black]"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-2.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                  border-4 border-black px-3 py-2 font-black
                  transition-all
                  ${
                    isActive
                      ? "bg-[#22c55e] shadow-[4px_4px_0px_black] translate-y-[2px]"
                      : "bg-[#f1f1f1] hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]"
                  }
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <nav className="mt-3 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  border-4 border-black px-3 py-3 font-black text-center
                  transition-all
                  ${
                    isActive
                      ? "bg-[#22c55e] shadow-[4px_4px_0px_black]"
                      : "bg-[#f1f1f1]"
                  }
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      <AIBotWidget />
    </div>
  );
}