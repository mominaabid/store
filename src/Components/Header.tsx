import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Offer Bar */}
      <div className="bg-[#814d3f] text-white flex justify-between items-center px-4 md:px-10 py-1 h-[45px]">
        <p className="font-bold text-sm md:text-base">
          Welcome to Royal Beauty Cream
        </p>
        <div className="flex space-x-3 text-sm md:text-base">
          <a href="#" className="hover:text-[#151413]">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#151413]">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#151413]">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-[#151413]">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 h-[80px] flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/images/lo.png"
              alt="logo"
              className="w-[70px] md:w-[85px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-[#a36b5c] font-semibold">
          <li>
            <Link to="/" className="hover:text-[#7a4e42]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#7a4e42]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#7a4e42]">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#7a4e42]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#7a4e42]">
              Contact Us
            </Link>
          </li>
          <li>
            <button className="text-[#7a4e42] hover:text-[#814d3f]">
              <FaSearch />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#814d3f] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-[#a36b5c] font-semibold">
          <Link
            to="/"
            className="block hover:text-[#7a4e42]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-[#7a4e42]"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="block hover:text-[#7a4e42]"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/products"
            className="block hover:text-[#7a4e42]"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block hover:text-[#7a4e42]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <button className="text-[#7a4e42] hover:text-[#814d3f]">
            <FaSearch />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
