import { motion } from "framer-motion";
import { Product } from "@/types/ProductProp.type";
import { useGetProductsQuery } from "../../../redux/api/api";
import Card from "../Card/Card";
import { fadeLeft } from "../../../Animation/constant";

const Featured = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <div>Error fetching products</div>;
  }

  const productsSlice = data.slice(0, 4);

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl  mb-8 text-center font-[Oswald]">
        Featured Products
      </h2>
      <div className="grid md:grid-cols-4 bg-white">
        {productsSlice.map((product: Product) => (
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={product._id}
            whileTap={{ scale: 0.95 }}
          >
            <Card key={product._id} product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
