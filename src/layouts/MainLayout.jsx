import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ui } from "../styles";
import AIBotWidget from "../components/AIBotWidget";


const navItems = [
  { label: "Home", path: "/" },
  { label: "Project", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

export default function MainLayout() {
  return (
    <div className={ui.shell}>
  <header
    className="
      sticky top-4 z-20
      flex items-center justify-between gap-4
      border-4 border-black bg-white p-3.5
      shadow-[6px_6px_0px_black]
      max-sm:static max-sm:flex-col max-sm:items-stretch
    "
  >
    {/* BRAND */}
    <NavLink
      to="/"
      className="inline-flex items-center gap-3 font-black text-black"
      aria-label="Zarni portfolio home"
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

    {/* NAV */}
    <nav
      className="flex flex-wrap justify-end gap-2.5 max-sm:grid max-sm:grid-cols-3 max-sm:gap-2"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `
              border-4 border-black px-3.5 py-2.5 font-black
              transition-all duration-150
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
  </header>

  <Outlet />
  <Footer />
  <AIBotWidget />
</div>
  );
}
