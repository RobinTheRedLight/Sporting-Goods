import { useGetProductByCategoryQuery } from "../..//redux/api/api";
import { useParams } from "react-router-dom";
import Card from "../Home/Card/Card";

const AllProductsByCategory = () => {
  const { category } = useParams<{ category: string }>();
  console.log(category);
  const { data, isLoading } = useGetProductByCategoryQuery(category);
  console.log(useGetProductByCategoryQuery(category));
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl  mb-8 text-center font-[Oswald]">{category}</h2>
      <div className="grid md:grid-cols-4">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsByCategory;
