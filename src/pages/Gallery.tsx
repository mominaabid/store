
import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const galleryImages = [
  "images/ghal6 (2).jpeg",
  "images/ghal3 (1).jpeg",
  "images/ghal3 (2).jpeg",
  "images/ghal3 (3).jpeg",
  "images/ghal3 (4).jpeg",
  "images/ghal1.jpg",
  "images/ghal6 (1).jpeg",
  "images/ghal6 (3).jpeg",
];

const Gallery: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/web banner2.jpg')" }}
        >
       
        </div>
      
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4226] mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 mb-12">
            Explore moments, products, and behind-the-scenes snapshots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Gallery;
