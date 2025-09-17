import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#814d3f] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="/products" className="hover:text-gray-200">
                Glow & Care
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-200">
                Skin Care
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-200">
                Pure Elegance
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-200">
                Beauty
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-gray-200">
                Gallery
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-200">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="mb-3 text-sm">Get the latest updates and offers.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded-md hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: support@royalbeauty.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Lahore, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-200">
        <p>
          © 2025 <strong>Royal Beauty Cream</strong> | Developed With Love By{" "}
          <a
            href="https://technicmentors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            Technic Mentors
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
