import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Project", path: "/projects" },
  { label: "Contact Me", path: "/contact" },
];

export default function MainLayout() {
  return (
    <div className="app-shell">
      <header className="site-header " >
        <NavLink to="/" className="brand" aria-label="Zarni portfolio home">
          <span className="brand-mark">ZM</span>
          <span>Zarni Maung</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
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
