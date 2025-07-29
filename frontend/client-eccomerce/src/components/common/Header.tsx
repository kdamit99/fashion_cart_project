import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import AnimatedSearch from "./AnimatedSearch";
import SearchIconButton from "./SearchIconButton";
import { NotificationPanel } from "./NotificationPanel";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900 hover:text-teal-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width="24" />
          </button>

          {/* Left Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative group transition-colors duration-200 ${
                    isActive
                      ? "text-teal-600 font-semibold"
                      : "text-gray-900 hover:text-teal-600"
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-600 transition-all group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-teal-600 our-logo">
            <Link to="/">Fashion Cart</Link>
          </div>

          {/* Icons & Cart */}
          <div className="flex items-center gap-6 text-gray-900">
            <SearchIconButton
              onClick={(rect) => {
                setOriginRect(rect);
                setSearchOpen(true);
              }}
            />
            <button
              className="p-2 hover:text-teal-600 relative"
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <Icon icon="solar:bell-outline" width="22" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-teal-600" />
            </button>
            <div className="relative">
              <NotificationPanel
                isOpen={isNotifOpen}
                onClose={() => setNotifOpen(false)}
              />
            </div>

            <div className="flex items-center">
              <Link
                to="/cart"
                className="hidden sm:flex items-center gap-1 px-3 py-2 border-2 border-gray-300 rounded-full text-sm font-medium uppercase text-gray-900 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors"
              >
                Cart
                <Icon icon="mdi:cart-outline" width="20" />
              </Link>
              <Link to="/account" className="ml-4 p-2 hover:text-teal-600">
                <Icon icon="mdi:account-circle-outline" width="24" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-100 border-t border-gray-300 shadow-lg animate-fade-in">
            <ul className="flex flex-col divide-y divide-gray-200">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-4 text-gray-900 hover:bg-teal-100 hover:text-teal-700"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <AnimatedSearch
        isOpen={isSearchOpen}
        originRect={originRect}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};

export default Header;
