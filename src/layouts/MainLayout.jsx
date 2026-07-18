import CloseIcon from "@mui/icons-material/Close";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AIBotWidget from "../components/AIBotWidget";
import Footer from "../components/Footer";
import { ui } from "../styles";

const navItems = [
  { label: "Home", path: "/home", icon: HomeRoundedIcon },
  { label: "Work", path: "/projects", icon: WorkOutlineRoundedIcon },
  { label: "Contact", path: "/contact", icon: MailOutlineRoundedIcon },
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);
  const activePath = (path, active) => active || (path === "/home" && location.pathname === "/");

  return <div className="min-h-screen overflow-x-clip">
    <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg border-[3px] border-black bg-[#FFE66D] px-4 py-3 font-black shadow-[4px_4px_0_#000] focus:translate-y-0">Skip to content</a>
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#FFE66D]">
      <div className={`${ui.shell} flex min-h-[76px] items-center justify-between gap-4 py-3`}>
        <NavLink to="/home" className="group flex items-center gap-3 rounded-lg focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black">
          <span className="grid h-12 w-12 -rotate-2 place-items-center rounded-xl border-[3px] border-black bg-[#67E8F9] text-sm font-black shadow-[4px_4px_0_#000] transition-transform group-hover:rotate-2">ZM</span>
          <span className="leading-none"><strong className="block text-lg font-black tracking-tight">Zarni Maung</strong><span className="text-[10px] font-black uppercase tracking-[.16em]">Full-stack developer</span></span>
        </NavLink>
        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
          {navItems.map(({ label, path, icon }) => { const NavIcon = icon; return <NavLink key={path} to={path} className={({ isActive }) => `${ui.raised} inline-flex min-h-11 items-center gap-2 px-4 py-2 text-sm font-black ${activePath(path, isActive) ? "translate-x-0.5 translate-y-0.5 bg-[#A3E635] shadow-[2px_2px_0_#000]" : "bg-white"}`}><NavIcon fontSize="small" />{label}</NavLink>; })}
        </nav>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className={`${ui.imageButton} md:hidden ${open ? "bg-[#FB7185]" : "bg-white"}`}>{open ? <CloseIcon /> : <MenuRoundedIcon />}</button>
      </div>
      {open && <nav aria-label="Mobile navigation" className={`${ui.shell} grid gap-3 border-t-[3px] border-black py-4 md:hidden`}>{navItems.map(({ label, path, icon }, index) => { const NavIcon = icon; return <NavLink key={path} to={path} className={({ isActive }) => `${ui.raised} flex min-h-14 items-center justify-between px-4 ${activePath(path, isActive) ? "bg-[#A3E635]" : "bg-white"}`}><span className="flex items-center gap-3"><NavIcon />{label}</span><span className="text-xs">0{index + 1}</span></NavLink>; })}</nav>}
    </header>
    <main id="main-content" className={ui.shell}><Outlet /></main>
    <Footer /><AIBotWidget />
  </div>;
}
