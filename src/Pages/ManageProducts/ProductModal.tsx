import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData: any;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("price", initialData.price);
      setValue("category", initialData.category);
      setValue("stockQuantity", initialData.stockQuantity);
    }
  }, [initialData, setValue]);

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-1/2">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Product Name"
            className="border p-2 mb-2 w-full"
          />
          <input
            {...register("price")}
            placeholder="Product Price"
            className="border p-2 mb-2 w-full"
            type="number"
          />
          <input
            {...register("category")}
            placeholder="Product Category"
            className="border p-2 mb-2 w-full"
          />
          <input
            {...register("stockQuantity")}
            placeholder="Stock Quantity"
            className="border p-2 mb-2 w-full"
            type="number"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update Product
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="bg-gray-500 text-white p-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
