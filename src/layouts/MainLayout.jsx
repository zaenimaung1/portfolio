import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AIBotWidget from "../components/AIBotWidget";
import Footer from "../components/Footer";
import { ui } from "../styles";

const navItems = [
  { label: "Home", path: "/home", icon: HomeIcon, color: "bg-[#00e5ff]" },
  { label: "Project", path: "/projects", icon: WorkIcon, color: "bg-[#f6e27f]" },
  { label: "Contact Me", path: "/contact", icon: MailIcon, color: "bg-[#ff90e8]" },
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path, isActive) =>
    isActive ||
    (path === "/home" &&
      (location.pathname === "/" || location.pathname === "/home"));

  return (
    <div className={ui.shell}>
      <header className="sticky top-3 z-20 border-4 border-black bg-white p-3 shadow-[8px_8px_0px_black] transition-all duration-200 md:top-6 md:p-4">
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/home"
            className="group inline-flex min-w-0 items-center gap-3 font-black text-black"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-[44px] w-[44px] shrink-0 rotate-[-2deg] place-items-center border-4 border-black bg-[#00e5ff] text-sm font-black shadow-[4px_4px_0px_black] transition-transform duration-200 group-hover:rotate-[2deg]">
              ZM
            </span>
            <span className="truncate text-base tracking-tight sm:text-lg">
              Zarni Maung
            </span>
          </NavLink>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`grid h-12 w-12 shrink-0 place-items-center border-4 border-black text-2xl font-black shadow-[4px_4px_0px_black] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_black] md:hidden ${
              open ? "bg-[#ef4444] text-white" : "bg-[#f6e27f] text-black"
            }`}
          >
            {open ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
          </button>

          <nav className="hidden gap-2.5 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => {
                    const active = isActivePath(item.path, isActive);

                    return `inline-flex items-center gap-2 border-4 border-black px-3 py-2 font-black transition-all ${
                      active
                        ? "translate-y-[2px] bg-[#22c55e] shadow-[4px_4px_0px_black]"
                        : "bg-[#f1f1f1] hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]"
                    }`;
                  }}
                >
                  <Icon fontSize="small" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {open && (
          <nav className="mt-4 grid gap-3 border-t-4 border-black pt-4 md:hidden">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => {
                    const active = isActivePath(item.path, isActive);

                    return `group grid grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-3 border-4 border-black p-2.5 font-black text-black shadow-[5px_5px_0px_black] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_black] ${
                      active ? "bg-[#22c55e]" : "bg-white"
                    }`;
                  }}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center border-[3px] border-black text-2xl shadow-[3px_3px_0px_black] ${item.color}`}
                  >
                    <Icon fontSize="inherit" />
                  </span>

                  <span className="truncate text-lg">{item.label}</span>

                  <span className="border-[3px] border-black bg-[#f1f1f1] px-2 py-1 text-xs shadow-[3px_3px_0px_black]">
                    0{index + 1}
                  </span>
                </NavLink>
              );
            })}
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
