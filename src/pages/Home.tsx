import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { FaQuoteLeft } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Home() {
  // Hero slider state
  const [current, setCurrent] = useState(0)
  const heroImages = [
    "/images/web banner.jpg",
    "/images/web banner2.jpg",
    "/images/web banner3.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
        ))}
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about py-12 px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img
            src="/images/natural.jpeg"
            alt="About Our Store"
            className="rounded-lg shadow-lg w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
        <div className="about-content transition duration-700 ease-in-out transform hover:scale-[1.01]">
          <h2 className="text-3xl font-semibold mb-4">Natural Beauty, Inside Out</h2>
          <p className="mb-4 text-justify leading-relaxed">
            Our beauty store brings you premium skincare products crafted with
            natural ingredients. We believe in enhancing your glow with safe,
            effective, and cruelty-free products that fit into your everyday
            lifestyle.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            From skincare essentials to luxury beauty must-haves, our collection
            empowers you to look and feel your best. Every product is designed
            with your skin’s health in mind, combining modern science with the
            healing touch of nature.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            With our years of expertise, we continue to innovate and introduce
            advanced formulations while staying true to natural beauty. Our
            philosophy is simple — quality products, visible results, and
            long-lasting trust.
          </p>
          <Link
            to="/products"
            className="bg-[#814d3f] text-white px-5 py-2 rounded hover:bg-[#6a3f33] transition"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* Bestsellers Section */}
      <motion.section
        id="bestsellers"
        className="bestsellers py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            All-Time Favorites
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: "/images/32.jpg", name: "Miracle White Cream", price: "$12.25" },
              { img: "/images/43.jpg", name: "Deluxe Beauty Cream", price: "$23.55" },
              { img: "/images/45.jpg", name: "LUNA Xpert whitening soap", price: "$19.99" },
              { img: "/images/48.jpg", name: "Deep Facial Cleansing Gel", price: "$15.75" },
              { img: "/images/54.jpg", name: "Facial Cleanser", price: "$19.99" },
              { img: "/images/59.jpg", name: "Moisturizing Lotion", price: "$12.25" },
            ].map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-lg p-4 text-center border hover:border-[#814d3f]"
              >
                <div className="overflow-hidden rounded mb-3">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-52 object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-[#814d3f] font-bold">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="bg-[#814d3f] text-white px-6 py-3 rounded hover:bg-[#6a3f33] transition"
          >
            View All Products
          </Link>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="expertise py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">WE ARE THE SKIN CARE EXPERT</h2>
          <p className="mb-10 max-w-2xl mx-auto leading-relaxed">
            With years of experience in beauty and wellness,{" "}
            <strong>Royal Beauty Cream</strong> brings you trusted skincare
            solutions. Our formulations are carefully crafted with natural
            ingredients to deliver results your skin deserves.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                img: "/images/natural1.jpg",
                title: "Natural Ingredients",
                text: "Harnessing the power of nature for glowing skin.",
              },
              {
                img: "/images/dermatologist.jpg",
                title: "Dermatologist Tested",
                text: "Scientifically developed and tested for safety.",
              },
              {
                img: "/images/customers.jpg",
                title: "Loved by Customers",
                text: "Trusted by thousands who believe in clean beauty.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow rounded overflow-hidden border hover:border-[#814d3f]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        className="gift-section py-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="gift-image flex justify-center">
          <img
            src="/images/founder.jpg"
            alt="Founder"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="gift-content">
          <h1 className="text-3xl font-semibold mb-2">
            Message From The Manufacturer
          </h1>
          <h3 className="mb-4">Founder of Royal International</h3>
          <p className="text-justify mb-4 leading-relaxed">
            Hello Everybody, I hope all of you are enjoying good health and a
            peaceful life. My name is Ali, and I am the founder of Royal
            International. Since the beginning, our vision has been to provide
            skincare solutions that not only work but also respect nature and
            human well-being. Each product is a promise of quality,
            authenticity, and care. <br />
            We take pride in sourcing natural ingredients and ensuring every
            product passes strict quality checks. Our customers’ trust is our
            biggest achievement, and we continue to innovate with dedication and
            passion. <br />
            Thank you for supporting our journey — together we will continue to
            make skincare better, safer, and more effective.
          </p>
          <Link
            to="/about"
            className="bg-[#814d3f] text-white px-5 py-2 rounded hover:bg-[#6a3f33] transition"
          >
            See More
          </Link>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="intro-section py-16 text-center px-6 lg:px-20 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4">OUR JOURNEY</h2>
        <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
          It has been a long and rewarding road where our company transformed
          from humble beginnings to becoming one of the most trusted skincare
          manufacturers in the country. Every challenge shaped our dedication to
          quality, and every success strengthened our bond with our valued
          customers. <br />
          <br />
          Our journey is powered by innovation, customer love, and an unwavering
          belief in delivering skincare that truly makes a difference.
        </p>
        <Link
          to="/products"
          className="bg-[#814d3f] text-white px-5 py-2 rounded hover:bg-[#6a3f33] transition"
        >
          Explore Products
        </Link>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        id="review"
        className="review py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-center">Customer Reviews</h1>
        <h3 className="text-center text-gray-500 mb-10">
          What our customers say
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 lg:px-20">
          {[
            {
              img: "/images/sara.jpg",
              name: "Sara Khan",
              date: "Jan 2025",
              text: "I absolutely love these products! My skin feels refreshed and radiant every day. Highly recommend!",
            },
            {
              img: "/images/ali.jpg",
              name: "Ali Raza",
              date: "Feb 2025",
              text: "The whitening soap is amazing — it makes my skin feel soft and smooth. Will buy again!",
            },
            {
              img: "/images/ayesha.jpg",
              name: "Ayesha Ahmed",
              date: "Mar 2025",
              text: "Packaging is beautiful and the products smell so natural. Highly recommend!",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-lg p-6 relative border hover:border-[#814d3f]"
            >
              <FaQuoteLeft className="text-[#814d3f] text-2xl mb-4" />
              <p className="mb-4 leading-relaxed">{review.text}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Logos Slider */}
      <motion.div
        className="featured-logos py-10 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        <div className="flex w-[200%] animate-[slide_25s_linear_infinite]">
          {[
            "logo1.png",
            "logo2.png",
            "logo3.png",
            "logo4.png",
            "logo5.png",
            "logo6.png",
            "logo7.png",
            "logo8.png",
          ]
            .concat([
              "logo1.png",
              "logo2.png",
              "logo3.png",
              "logo4.png",
              "logo5.png",
              "logo6.png",
              "logo7.png",
              "logo8.png",
            ]) // duplicate for seamless loop
            .map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 px-8"
              >
                <img
                  src={`/images/${logo}`}
                  alt={`Logo ${i + 1}`}
                  className="h-16 object-contain transition-transform duration-500"
                />
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
