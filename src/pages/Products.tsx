
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // React Router
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  description?: string;
  code?: string;
  availability?: string;
  seller?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Moisturizing Body Lotion",
    price: 25,
    image: "images/8.jpg",
    size: "200ml",
    description: `Moisturizing Body Lotion deeply nourishes and hydrates the skin, leaving it soft and supple. Regular use improves skin texture and radiance.
It also forms a protective layer on the skin, locking in moisture and preventing dryness throughout the day, making it ideal for daily use on all skin types.
Perfect for morning and night use, it absorbs quickly without leaving greasy residue and is suitable for sensitive skin.`,
    code: "100001",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 2,
    name: "Deep Facial Cleanser Gel",
    price: 30,
    image: "images/17.jpg",
    size: "150ml",
    description: `Deep Facial Cleanser Gel removes dirt, oil, and impurities. Keeps skin fresh, clear, and healthy with regular use.
Its gentle formula also soothes sensitive skin, reduces redness, and prepares the skin for better absorption of serums and moisturizers.
Recommended for daily use, it leaves the skin feeling refreshed, smooth, and prepped for your skincare routine.`,
    code: "100002",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 3,
    name: "Miracle Facial Scrub",
    price: 40,
    image: "images/35.jpg",
    size: "100ml",
    description: `Miracle Facial Scrub exfoliates dead skin, unclogs pores, and enhances skin smoothness and glow.
It also stimulates blood circulation, promoting a healthy complexion while helping reduce fine lines and uneven skin tone over time.
Use 2-3 times a week for best results. Its gentle beads polish the skin without irritation, giving an instant soft and radiant look.`,
    code: "100003",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 4,
    name: "LUNA Whitening Soap",
    price: 20,
    image: "images/45.jpg",
    size: "80g",
    description: `LUNA Whitening Soap gently cleanses and brightens the skin for a radiant look.
Enriched with natural extracts, it also helps reduce blemishes and dullness, leaving the skin feeling refreshed and rejuvenated after each wash.
Daily use improves skin texture and gives a natural glow while maintaining skin’s softness and elasticity.`,
    code: "100004",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 5,
    name: "Deluxe Beauty",
    price: 20,
    image: "images/43.jpg",
    size: "200ml",
    description: `Deluxe Beauty cream nourishes and revitalizes skin while promoting softness and radiance.
Regular use helps maintain the skin’s natural elasticity and smoothness, making it ideal for those seeking a youthful and vibrant look.
Its lightweight formula absorbs quickly, leaving no greasy feeling and enhancing the skin’s natural glow throughout the day.`,
    code: "100005",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 6,
    name: "Miracle White Beauty Cream",
    price: 450,
    originalPrice: 600,
    image: "images/13.jpg",
    size: "200ml",
    description: `Miracle White Beauty Cream is a premium skincare innovation crafted to deliver a complete solution for radiance, firmness, and hydration. Using advanced 4D technology, it works on multiple layers of the skin, restoring elasticity, smoothing fine lines, and improving overall texture.
The cream’s rich formula deeply nourishes and revitalizes skin cells, offering long-lasting hydration and a radiant, youthful appearance without leaving a greasy residue.
Ideal for all skin types, it strengthens the skin barrier, protects against environmental stress, and provides a luxurious pampering experience every day.`,
    code: "984532",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 7,
    name: "Skin Lightening Cream",
    price: 30,
    image: "images/27.jpg",
    size: "100ml",
    description: `Skin Lightening Cream gradually evens skin tone, brightens, and softens rough texture.
It also helps fade dark spots and pigmentation while enhancing the skin’s natural glow, providing a smooth and uniform complexion.
Regular application promotes healthy, hydrated skin and improves overall skin clarity, making it perfect for daily use.`,
    code: "100007",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 8,
    name: "Whitening Cream",
    price: 10,
    image: "images/18.jpg",
    size: "50ml",
    description: `Whitening Cream gently brightens dull skin and helps maintain smooth texture.
Its lightweight formula is quickly absorbed, nourishing the skin and leaving it soft, supple, and visibly radiant with consistent use.
It also protects the skin from environmental stress and dryness, making it suitable for daily skincare routines.`,
    code: "100008",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 9,
    name: "Skin Lightening Lotion",
    price: 25,
    image: "images/3.jpg",
    size: "200ml",
    description: `Skin Lightening Lotion hydrates and improves skin tone, leaving a silky finish.
It also strengthens the skin barrier, preventing dryness and irritation while promoting a healthy, luminous complexion.
Perfect for daily use, it absorbs quickly and leaves the skin feeling smooth, soft, and naturally glowing.`,
    code: "100009",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 10,
    name: "Sahaana Facial Cleanser",
    price: 30,
    image: "images/39.jpg",
    size: "150ml",
    description: `Sahaana Facial Cleanser removes impurities and refreshes the skin for a radiant glow.
It soothes inflammation, balances oil production, and ensures the skin feels clean and rejuvenated without stripping natural moisture.
Ideal for daily morning and evening use, it prepares the skin for optimal absorption of other skincare products.`,
    code: "100010",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 11,
    name: "Miracle White Cream",
    price: 40,
    image: "images/32.jpg",
    size: "100ml",
    description: `Miracle White Cream provides deep nourishment and restores skin glow.
Regular use enhances skin’s firmness and elasticity while reducing signs of fatigue, leaving the skin looking fresh and healthy.
It also helps maintain hydration levels, giving a long-lasting smooth and soft texture, perfect for a radiant daily look.`,
    code: "100011",
    availability: "In Stock",
    seller: "Royal Store",
  },
  {
    id: 12,
    name: "LUNA Facial Scrub",
    price: 20,
    image: "images/36.jpg",
    size: "100ml",
    description: `LUNA Facial Scrub gently exfoliates the skin to reveal a smooth, radiant complexion.
It also helps unclog pores and improves blood circulation, leaving the skin soft, revitalized, and glowing.
Regular use enhances natural radiance, minimizes dullness, and improves overall skin texture for a healthier look.`,
    code: "100012",
    availability: "In Stock",
    seller: "Royal Store",
  },
];



export default function Products() {
  const navigate = useNavigate();

  const handleClick = (product: Product) => {
    navigate("/product-detail", { state: { product } });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('images/natural1.jpg')" }}
      >
        <div className="hero-overlay bg-black/30 flex flex-col items-center justify-center text-center h-full">
          <motion.h2
            style={{ color: "white", marginBottom: "1rem" }}
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Beauty Line
          </motion.h2>
          <motion.p
            style={{ color: "white", maxWidth: "600px" }}
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover our natural beauty & skincare products
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="shop py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card border rounded-lg p-4 text-center hover:shadow-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleClick(product)}
                />
                <h3
                  className="text-lg font-semibold mt-4 cursor-pointer"
                  onClick={() => handleClick(product)}
                >
                  {product.name}
                </h3>
                <p className="text-gray-800">Rs.{product.price}</p>
                {product.originalPrice && (
                  <p className="text-red-600 line-through">Rs.{product.originalPrice}</p>
                )}
                <motion.button
                  onClick={() => handleClick(product)}
                  style={{ backgroundColor: "#a36b5c", color: "white", marginTop: "10px" }}
                  className="px-6 py-2 rounded-md"
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
