import { useGetProductsQuery } from "../../../redux/api/api";
import { Product } from "../../../types/ProductProp.type";

const LatestProducts = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery(undefined, {
    pollingInterval: 30000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const shuffledProducts = shuffleArray([...products]);

  const productsSlice = products.slice(0, 4);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProducts = shuffleArray([...productsSlice]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shuffledProducts.map((product: Product) => (
          <div
            key={product._id}
            className="border p-4 mb-2 flex flex-col justify-between items-start bg-white shadow-md rounded-lg"
          >
            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <img src={product.image} alt="" />
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Stock Quantity: {product.stockQuantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
