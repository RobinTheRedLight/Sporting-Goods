import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  useAddToCartMutation,
  useGetProductQuery,
  useGetCartQuery,
} from "../../redux/api/api";
import { useState, useEffect } from "react";
import { Product } from "../../types/ProductProp.type";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading: isProductLoading, refetch } = useGetProductQuery(id);
  const { data: cartData, isLoading: isCartLoading } =
    useGetCartQuery(undefined);
  const [addCart, { isSuccess, isLoading: isAdding }] = useAddToCartMutation();

  const [currentStock, setCurrentStock] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setCurrentStock(data.stockQuantity);
    }
  }, [data]);

  if (isProductLoading || isCartLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  const addToCart = async (product: Product) => {
    const cartItem = cartData.find(
      (item: any) => item.productId === product._id
    );
    if (cartItem) {
      if (cartItem.quantity < product.stockQuantity) {
        await addCart({ ...cartItem, quantity: cartItem.quantity + 1 });
        setCurrentStock((prevStock) => prevStock - 1);
      } else {
        alert("Stock limit reached");
      }
    } else {
      await addCart({
        productId: product._id,
        name: product.name,
        category: product.category,
        stockQuantity: product.stockQuantity,
        brand: product.brand,
        rating: product.rating,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
      setCurrentStock((prevStock) => prevStock - 1);
    }
  };

  const isAddToCartDisabled = () => {
    const cartItem = cartData.find((item: any) => item.productId === data._id);
    return cartItem ? cartItem.quantity >= data.stockQuantity : false;
  };

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
          <p className="text-gray-600 mb-2">In Stock: {currentStock}</p>
          <p className="text-xl font-bold mb-4">${data.price}</p>
          <button
            onClick={() => addToCart(data)}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              isAddToCartDisabled() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAddToCartDisabled()}
          >
            {isAddToCartDisabled() ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
