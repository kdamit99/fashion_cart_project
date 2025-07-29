import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between font-[Geist]">
      {/* Left Menu */}
      <div className="flex items-center space-x-8 text-[15px] font-medium">
        {[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: "About Us", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative group text-neutral-700 hover:text-amber-700 transition-all duration-300"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Center Logo */}
      <div className="text-[22px] font-bold text-center flex-1">
        <Link to="/" className="text-black tracking-wide">
          FASHION CART
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="text-stone-600 hover:text-black transition-colors duration-200">
          <Icon icon="mdi:search" width="22" />
        </button>

        {/* Notification Icon */}
        <button className="text-stone-600 hover:text-black transition-colors duration-200">
          <Icon icon="mdi:bell-outline" width="22" />
        </button>

        {/* Cart and Profile */}
        <div className="flex items-center">
          <Link
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-300 rounded-full text-[13px] font-medium text-neutral-700 uppercase hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300"
          >
            <span>Cart</span>
            <Icon icon="mdi:cart-outline" width="20" />
          </Link>

          <Link
            to="/account"
            className="pl-4 text-stone-600 hover:text-amber-700 transition-colors duration-300"
          >
            <Icon icon="mdi:account-circle-outline" width="24" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
