import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ui } from "../styles";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Project", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

export default function MainLayout() {
  return (
    <div className={ui.shell}>
      <header
        className={`${ui.framed} sticky top-4 z-10 flex items-center justify-between gap-4 bg-white p-3.5 max-sm:static max-sm:flex-col max-sm:items-stretch`}
      >
        <NavLink
          to="/"
          className="inline-flex items-center gap-2.5 font-black text-black"
          aria-label="Zarni portfolio home"
        >
          <span className="inline-grid h-[42px] w-[42px] place-items-center border-[3px] border-black bg-[#00e5ff] text-sm text-black">
            ZM
          </span>
          <span>Zarni Maung</span>
        </NavLink>

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
      `${ui.raised} px-3.5 py-2.5 max-sm:grid max-sm:min-h-11 font-bold max-sm:place-items-center ${
        isActive ? "bg-[#22c55e] text-black font-extrabold" : "bg-[#f1f1f1]"
      }`
    }
  >
    {item.label}
  </NavLink>
))}
        </nav>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}
