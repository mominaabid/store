
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section relative w-full h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/contact.jpg')" }}
      >
        <div className="hero-overlay flex flex-col items-center justify-center text-center px-5 py-5">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeInDown">
            Contact Us
          </h2>
          <p className="text-lg text-white max-w-xl animate-fadeInUp">
            We’re here to help! Get in touch with us for any queries or support.
          </p>
        </div>
      </section>

      {/* Contact Container */}
      <div className="contact-container max-w-6xl mx-auto mt-16 mb-16 flex flex-col md:flex-row gap-10 bg-white p-10 rounded-xl shadow-lg animate-fadeInUp">
        {/* Contact Info */}
        <div className="contact-info flex-1 animate-fadeIn">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
            <p className="text-gray-600 mb-6">
            We’d love to hear from you! Whether you have a question about
            products, orders, or anything else, our team is ready to answer all
            your questions. Feel free to reach out via email, phone, or by
            filling out the contact form. We aim to respond within 24-48 hours. We are here to assist you!
            <br />
            Your feedback is valuable to us and helps us improve our services.
            <br />
            Thank you for choosing Royal Beauty.
            <br />
            We look forward to connecting with you soon!
            </p>
          <div className="contact-details text-gray-700">
            <p>
              <strong>Email:</strong> support@royalbeauty.com
            </p>
            <p>
              <strong>Phone:</strong> +92 300 1234567
            </p>
            <p>
              <strong>Address:</strong> Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form flex-1 flex flex-col justify-center animate-fadeIn">
          <form
            action="https://formspree.io/f/xldwzrke"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded-lg outline-none focus:border-[#a36b5c]"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="p-3 border border-gray-300 rounded-lg outline-none focus:border-[#a36b5c]"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="p-3 border border-gray-300 rounded-lg outline-none focus:border-[#a36b5c]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#a36b5c] text-white p-3 rounded-lg hover:bg-[#8e5c4f] transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Centered Have Questions */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fadeInDown ">
            Have Questions?
          </h2>
          <a
            href="#contact-form"
            className="inline-block bg-[#a36b5c] text-white px-8 py-3 rounded-lg hover:bg-[#8c5449] transition-transform transform hover:scale-110 animate-fadeInUp"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style >{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
      `}</style>
    </>
  );
}
