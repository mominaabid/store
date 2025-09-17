
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state as any;

  if (!product) {
    // if no product info  redirect to products page
    navigate("/products");
    return null;
  }

  return (
    <>
      <Header />

      {/* Hero Section with Blurred Background */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {product.name}
          </motion.h2>
          <motion.p
            className="text-lg text-white max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover the full details of {product.name} and why it's perfect for you.
          </motion.p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <motion.div
            className="md:w-1/2 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl font-semibold mb-2">Rs.{product.price}</p>
            {product.originalPrice && (
              <p className="text-red-600 line-through mb-2">
                Original Price: Rs.{product.originalPrice}
              </p>
            )}
            {product.size && <p className="mb-2">{product.size}</p>}

            <hr className="my-4" />

            <p className="font-bold mb-2">Description:</p>
            <p className="mb-4 text-gray-700">{product.description}</p>


            {/* Back Button */}
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              ← Back to Products
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
