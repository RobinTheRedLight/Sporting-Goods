import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4 font-[Oswald]">
        Order Placed Successfully!
      </h1>
      <p className="font-[Roboto]">
        Your order has been placed successfully. Thank you for shopping with us.
      </p>
      <button
        onClick={handleGoToHome}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
