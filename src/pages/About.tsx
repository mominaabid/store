
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

const About: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
          <p className="mt-4 text-lg md:text-xl">
            Discover our story, our vision, and the people behind Royal Skincare.
          </p>
        </motion.div>
      </section>

      {/* About Sections in Card Form */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: "images/manu.jpg",
              title: "About Us",
              text: "At Royal, we believe skincare should be natural and effective. Our journey began with a mission to create safe, premium products that help your skin glow with confidence.",
            },
            {
              img: "images/menu.jpg",
              title: "Our Manufacturer",
              text: "From whitening creams to coffee scrubs, each product is crafted under strict quality control to ensure safety and customer satisfaction.",
            },
            {
              img: "images/team1.jpg",
              title: "Our Team",
              text: "Our passionate team combines creativity and expertise to deliver skincare that exceeds expectations—because your satisfaction is our success.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-xl overflow-hidden border-t-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: "#6B4226" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={i}
            >
              {/* Image with hover zoom */}
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-3 text-[#6B4226]">
                  {card.title}
                </h1>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
