import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddToCartMutation,
  useGetProductQuery,
  useGetCartQuery,
  useUpdateProductMutation,
} from "../../redux/api/api";
import { useState, useEffect } from "react";
import { Product } from "../../types/ProductProp.type";

const SingleProduct = () => {
  const notify = () => toast.success("Product added to cart!");
  const notifyRating = () => toast.success("Thanks for the rating!");
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading: isProductLoading } = useGetProductQuery(id);
  const { data: cartData, isLoading: isCartLoading } =
    useGetCartQuery(undefined);
  const [addCart] = useAddToCartMutation();

  const [currentStock, setCurrentStock] = useState<number>(0);
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (data) {
      setCurrentStock(data.stockQuantity);
      setCurrentRating(data.rating);
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
      (item: Product) => item.productId === product._id
    );
    try {
      if (cartItem) {
        if (cartItem.quantity + quantity <= product.stockQuantity) {
          await addCart({
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          }).unwrap();
          notify();
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
          quantity,
        }).unwrap();
        notify();
      }
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const isAddToCartDisabled = () => {
    const cartItem = cartData.find(
      (item: Product) => item.productId === data._id
    );
    return cartItem ? cartItem.quantity + quantity > data.stockQuantity : quantity > data.stockQuantity;
  };

  const handleValue = async (value: number, product: Product) => {
    console.log(value);
    const newData = {
      name: product.name,
      category: product.category,
      stockQuantity: product.stockQuantity,
      brand: product.brand,
      description: product.description,
      price: product.price,
      image: product.image,
      rating: value,
      quantity: 1,
    };
    await updateProduct({ id: product._id, ...newData });
    notifyRating();
    if (isSuccess) {
      setCurrentRating(value);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="lg:flex lg:justify-around flex-shrink-0 lg:w-1/2">
          <PhotoProvider>
            <PhotoView src={data.image}>
              <img
                src={data.image}
                alt={data.name}
                className="object-contain sm:h-48 sm:w-96 lg:w-full lg:h-96 rounded-lg"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-gray-600 mb-4">
            {data.category} - {data.brand}
          </p>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <div className="flex items-center mb-4">
            {/* @ts-expect-error there is a version miss-match in the source */}
            <Rating
              onClick={(value) => handleValue(value, data)}
              initialRating={currentRating}
              emptySymbol="far fa-star text-yellow-500"
              fullSymbol="fas fa-star text-yellow-500"
            />
            <span className="ml-2 text-gray-600">({currentRating})</span>
          </div>
          <p className="text-gray-600 mb-4">In Stock: {currentStock}</p>
          <p className="text-2xl font-bold mb-4">${data.price}</p>
          <div className="flex items-center mb-4">
            <input
              type="number"
              min="1"
              max={currentStock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 p-2 border rounded mr-4"
            />
            <button
              onClick={() => addToCart(data)}
              className={`w-full lg:w-auto px-4 py-2 bg-blue-500 text-white rounded ${
                isAddToCartDisabled() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isAddToCartDisabled()}
            >
              {isAddToCartDisabled() ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
