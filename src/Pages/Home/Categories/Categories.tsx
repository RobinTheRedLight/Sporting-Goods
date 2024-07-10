import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "intersection-observer"; // Import Intersection Observer polyfill if needed
import img1 from "../../../assets/categories/category1.jpg";
import img2 from "../../../assets/categories/category2.jpg";
import img3 from "../../../assets/categories/category3.jpg";
import img4 from "../../../assets/categories/category4.jpg";

const categories = [
  { name: "Footwear", image: img1 },
  { name: "Apparel", image: img2 },
  { name: "Sports Equipment", image: img3 },
  { name: "Accessories", image: img4 },
];

const Categories = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  text-center mb-8 font-[Oswald]">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden font-[Roboto]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} // Only animate if inView is true
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600 transition duration-300">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
