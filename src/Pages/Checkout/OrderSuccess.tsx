import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
      <p>
        Your order has been placed successfully. Thank you for shopping with us.
      </p>
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
