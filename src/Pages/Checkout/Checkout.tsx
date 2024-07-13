import { useState } from "react";
import {
  useGetCartQuery,
  useUpdateProductStockMutation,
} from "../../redux/api/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { data: cartData, isLoading: isCartLoading } =
    useGetCartQuery(undefined);
  const [updateProductStock] = useUpdateProductStockMutation();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (paymentMethod === "cod") {
      // Deduct stock quantity for each product
      for (const item of cartData) {
        await updateProductStock({
          productId: item.productId,
          quantity: item.quantity,
        });
      }
      // Redirect to success page
      navigate("/order-success");
    } else {
      // Handle Stripe payment method
      // Dummy implementation
      alert("Redirecting to Stripe...");
      // Redirect to success page after payment
      navigate("/order-success");
    }
  };

  if (isCartLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  mb-4 font-[Oswald]">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-6 font-[Roboto]">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Delivery Address</label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Select Payment Method</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label className="mr-4">Cash on Delivery</label>
            <input
              type="radio"
              name="paymentMethod"
              value="stripe"
              checked={paymentMethod === "stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label>Stripe (Dummy)</label>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={
            !userDetails.name ||
            !userDetails.email ||
            !userDetails.phone ||
            !userDetails.address
          }
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
