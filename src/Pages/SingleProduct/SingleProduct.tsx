import { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useGetProductQuery } from "../..//redux/api/api";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   brand: string;
//   stock: number;
//   rating: number;
//   price: number;
//   image: string;
// }

// const products: Product[] = [
//   {
//     id: "1",
//     name: "Running Shoes",
//     description: "Comfortable and durable running shoes.",
//     category: "Footwear",
//     brand: "BrandX",
//     stock: 10,
//     rating: 4.5,
//     price: 100,
//     image: "https://via.placeholder.com/150",
//   },
//   // Add more product objects as needed
// ];

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }
  console.log(data.name);

  // const [cart, setCart] = useState<CartItem[]>([]);

  // const product = products.find((p) => p.id === id);

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  // const addToCart = (product: Product) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find(
  //       (item) => item.product.id === product.id
  //     );

  //     if (existingItem) {
  //       if (existingItem.quantity < product.stock) {
  //         return prevCart.map((item) =>
  //           item.product.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         );
  //       }
  //       return prevCart;
  //     }

  //     return [...prevCart, { product, quantity: 1 }];
  //   });
  // };

  // const isAddToCartDisabled = () => {
  //   const cartItem = cart.find((item) => item.product.id === product.id);
  //   return cartItem ? cartItem.quantity >= product.stock : false;
  // };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-6">
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4">
          <PhotoProvider>
            <PhotoView src={data.image}>
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-auto rounded"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
          <p className="text-gray-600 mb-2">
            {data.category} - {data.brand}
          </p>
          <p className="text-gray-600 mb-2">{data.description}</p>
          <div className="flex items-center mb-2">
            <Rating
              readonly
              initialRating={data.rating}
              emptySymbol="far fa-star text-yellow-500"
              fullSymbol="fas fa-star text-yellow-500"
            />
            <span className="ml-2 text-gray-600">({data.rating})</span>
          </div>
          <p className="text-gray-600 mb-2">In Stock: {data.stock}</p>
          <p className="text-xl font-bold mb-4">${data.price}</p>
          {/* <button
            // onClick={() => addToCart(product)}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              isAddToCartDisabled() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAddToCartDisabled()}
          >
            {isAddToCartDisabled() ? "Out of Stock" : "Add to Cart"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
