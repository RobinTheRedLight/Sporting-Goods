import { useState, useEffect } from "react";
import {
  useGetCartQuery,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} from "../../redux/api/api";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    data: cartData,
    isLoading: isCartLoading,
    refetch,
  } = useGetCartQuery(undefined);
  const [updateCart] = useUpdateCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (cartData) {
      calculateTotalPrice();
    }
  }, [cartData]);

  const calculateTotalPrice = () => {
    const total = cartData.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
    const totalWithVAT = total + total * 0.15;
    setTotalPrice(totalWithVAT);
  };

  const handleQuantityChange = async (productId: string, quantity: number) => {
    const cartItem = cartData.find((item: any) => item.productId === productId);
    if (cartItem) {
      await updateCart({ ...cartItem, quantity });
      refetch();
    }
  };

  const handleRemoveItem = async (productId: string) => {
    await removeFromCart({ productId });
    refetch();
  };

  if (isCartLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl  mb-4 font-[Oswald]">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6 font-[Roboto]">
        {cartData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="hidden sm:block overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Product</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item: any) => (
                    <tr key={item.productId}>
                      <td className="py-2">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded"
                          />
                          <div className="ml-4">
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2">
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 bg-gray-200 rounded"
                            onClick={() =>
                              handleQuantityChange(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="px-2 py-1 bg-gray-200 rounded"
                            onClick={() =>
                              handleQuantityChange(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            disabled={item.quantity === item.stockQuantity}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2">${item.price.toFixed(2)}</td>
                      <td className="py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-2">
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded"
                          onClick={() => handleRemoveItem(item.productId)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-4">
              {cartData.map((item: any) => (
                <div key={item.productId} className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div className="ml-4">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Quantity</span>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() =>
                          handleQuantityChange(item.productId, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() =>
                          handleQuantityChange(item.productId, item.quantity + 1)
                        }
                        disabled={item.quantity === item.stockQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Price</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">Total</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded w-full"
                    onClick={() => handleRemoveItem(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
              <div className="text-xl font-bold">
                Total Price (including 15% VAT): ${totalPrice.toFixed(2)}
              </div>
              <Link to="/checkout">
                <button
                  className="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded"
                  disabled={cartData.some(
                    (item: any) => item.quantity > item.stockQuantity
                  )}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
