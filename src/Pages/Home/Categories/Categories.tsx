import { motion } from "framer-motion";
import img1 from "../../../assets/categories/category1.jpg";
import img2 from "../../../assets/categories/category2.jpg";
import img3 from "../../../assets/categories/category3.jpg";
import img4 from "../../../assets/categories/category4.jpg";
import { Link } from "react-router-dom";
import { fadeLeft } from "../../..//Animation/constant";

const categories = [
  { name: "Footwear", image: img1 },
  { name: "Apparel", image: img2 },
  { name: "Sports Equipment", image: img3 },
  { name: "Accessories", image: img4 },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  text-center mb-8 font-[Oswald]">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 ">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden font-[Roboto]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full sm:h-48 lg:h-80 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-3xl  mb-4 font-[Roboto]">{category.name}</h3>
                <Link to={`/all-products/${category.name}`}>
                  <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600 text-lg transition duration-300 font-[Roboto]">
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
