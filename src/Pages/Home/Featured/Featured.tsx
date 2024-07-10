import { useGetProductQuery } from "../../../redux/api/api";
import Card from "../Card/Card";

const Featured = () => {
  const { data, isLoading, isError } = useGetProductQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl  mb-8 text-center font-[Oswald]">
        Featured Products
      </h2>
      <div className="grid md:grid-cols-4">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
