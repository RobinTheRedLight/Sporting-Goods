import Card from "../Card/Card";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    stockQuantity: 20,
    brand: "Brand 1",
    rating: 4.5,
    description: "This is a great product.",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    stockQuantity: 20,
    brand: "Brand 1",
    rating: 4.5,
    description: "This is a great product.",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    stockQuantity: 20,
    brand: "Brand 1",
    rating: 4.5,
    description: "This is a great product.",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    stockQuantity: 20,
    brand: "Brand 1",
    rating: 4.5,
    description: "This is a great product.",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },

];

const Featured = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl  mb-8 text-center font-[Oswald]">Featured Products</h2>
      <div className="grid md:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
