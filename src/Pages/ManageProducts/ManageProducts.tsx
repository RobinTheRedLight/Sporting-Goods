import { useState } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../redux/api/api";
import { useForm } from "react-hook-form";
import ProductModal from "./ProductModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageProducts = () => {
  const { data: products, refetch } = useGetProductsQuery(undefined);
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const { register, handleSubmit, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const handleAddProduct = async (formData) => {
    await addProduct(formData);
    reset();
    refetch();
    toast.success("Product Added");
  };

  const handleEditProduct = (product) => {
    setEditProductData(product);
    setIsModalOpen(true);
  };

  const handleUpdateProduct = async (formData) => {
    await updateProduct({ id: editProductData._id, ...formData });
    setIsModalOpen(false);
    setEditProductData(null);
    refetch();
    toast.success("Product Updated");
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    refetch();
    toast.success("Product Deleted");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  mb-4 font-[Oswald]">Manage Products</h1>
      <form onSubmit={handleSubmit(handleAddProduct)} className="mb-4 font-[Roboto]">
        <input
          {...register("name", { required: true })}
          placeholder="Product Name"
          className="border p-2 mb-2 w-full"
        />
        <input
          {...register("price", { required: true, valueAsNumber: true })}
          placeholder="Product Price"
          className="border p-2 mb-2 w-full"
          type="number"
        />
        <input
          {...register("description", { required: true })}
          placeholder="Write description"
          className="border p-2 mb-2 w-full"
          type="string"
        />
        <input
          {...register("brand", { required: true })}
          placeholder="Brand Name"
          className="border p-2 mb-2 w-full"
        />

        <input
          {...register("category", { required: true })}
          placeholder="Product Category"
          className="border p-2 mb-2 w-full"
        />
        <input
          {...register("stockQuantity", {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="Stock Quantity"
          className="border p-2 mb-2 w-full"
          type="number"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Paste image link"
          className="border p-2 mb-2 w-full"
          type="string"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
      <div>
        {products?.map((product) => (
          <div
            key={product._id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Stock Quantity: {product.stockQuantity}</p>
            </div>
            <div>
              <button
                onClick={() => handleEditProduct(product)}
                className="bg-yellow-500 text-white p-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product._id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdateProduct}
        initialData={editProductData}
      />
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default ManageProducts;
