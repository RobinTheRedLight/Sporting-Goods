import { useGetProductByCategoryQuery } from "../..//redux/api/api";
import { useParams } from "react-router-dom";
import Card from "../Home/Card/Card";
import { Product } from "@/types/ProductProp.type";

const AllProductsByCategory = () => {
  const { category } = useParams<{ category: string }>();

  const { data, isLoading } = useGetProductByCategoryQuery(category);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl  mb-8 text-center font-[Oswald]">All Products</h2>
      <div className="grid md:grid-cols-4">
        {data.map((product: Product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsByCategory;
