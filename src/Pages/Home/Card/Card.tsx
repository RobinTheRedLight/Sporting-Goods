import { CardProps } from "@/types";
import Rating from "react-rating";

const Card = ({ product }: CardProps) => {
  const {
    id,
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = product;
  const handleViewDetails = () => {};

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 w-72 text-center shadow-lg font-[Roboto]">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{category}</p>
        <p className="text-gray-800 mb-2">In Stock: {stockQuantity}</p>
        <p className="text-gray-800 mb-2">Brand: {brand}</p>
        {/* @ts-expect-error there is a version miss-match in the source */}
        <Rating
          initialRating={rating}
          readonly
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
        />
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-900 font-bold mb-4">${price}</p>
        <button
          onClick={handleViewDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
