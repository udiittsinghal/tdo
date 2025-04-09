// src/App.jsx
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         <div className="flex justify-center gap-2">
         <img
  src="/tdo/tdo-logo1.png"
  alt="Project Image"
  className="w-128 h-80 object-contain"
/>  
         </div>
         
          <p className="max-w-xl mx-auto text-lg text-gray-600 mb-6">
            Empowering Commercial Spaces with the Right Brand Mix. TDO Advisors
            partners with developers and brands to deliver strategic leasing and
            reliable property management across India.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact">
              <Button className="rounded-2xl px-6 py-2 shadow-md">
                Get in Touch
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="outline" className="rounded-2xl px-6 py-2">
                View Our Portfolio
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow p-4">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src="/tdo/realestate.jpg"
                  alt="Project Image"
                  className="object-cover w-full h-full rounded-xl"
                />
</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  The Mall of Noida {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium Retail space in the heart of Noida at Sector 98.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
          <p className="max-w-2xl mx-auto text-center text-gray-600">
            TDO Advisors is a forward-thinking property management firm focused
            on optimizing leasing experiences through strategic brand
            partnerships.
          </p>
        </motion.div>
      </section>

      {/* Associated Brands Section */}
      <section id="brands" className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            Associated Brands
          </h2>
          <div className="flex justify-center flex-wrap gap-6">
            {[1, 2, 3, 4].map((brand) => (
              <div key={brand} className="w-32 h-20 bg-transparent flex items-center justify-center overflow-hidden">
              <img
                src="/tdo/brand1.png"
                alt="Project Image"
                className="object-contain w-full h-full"
              />
            </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {name: "Leasing",
                image: "/tdo/deal.png"
              }, 
              {
                name: "Brand Strategy", 
                image: "/tdo/strategi.png"
              },
              {
                name: "Property Management",
                image: "/tdo/management.png"
              }
              ].map(
              (service, i) => (
                <Card key={i} className="rounded-2xl shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="h-20 w-20 mx-auto bg-gray-200 rounded-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">
                      Service description placeholder goes here.
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto px-4 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <form
  action="https://formspree.io/f/xgvapqkd" // <-- use your actual endpoint here
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full border p-2 rounded"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full border p-2 rounded"
  />
  <textarea
    name="message"
    required
    placeholder="Your Message"
    className="w-full border p-2 rounded h-32"
  />
  <button
    type="submit"
    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
  >
    Send Message
  </button>
</form>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} The Day Off. All rights reserved.
      </footer>
    </div>
  );
}
