import { CardProps } from "@/types";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Card = ({ product }: CardProps) => {
  const {
    _id,
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = product;

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
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star "
        />
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-900 font-bold mb-4">${price}</p>
        <Link to={`/products/${_id}`}>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
