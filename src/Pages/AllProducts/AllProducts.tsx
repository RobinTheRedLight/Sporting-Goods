import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import Card from "../Home/Card/Card";

const AllProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    category: "",
    brand: "",
    priceRange: "",
    rating: "",
  });
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "asc" | "desc" | "");
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilter({
      category: "",
      brand: "",
      priceRange: "",
      rating: "",
    });
    setSortOrder("");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredProducts = products
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter.category ? product.category === filter.category : true) &&
        (filter.brand ? product.brand === filter.brand : true) &&
        (filter.priceRange
          ? product.price <= Number(filter.priceRange)
          : true) &&
        (filter.rating ? product.rating >= Number(filter.rating) : true)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-5xl mb-8 text-center font-[Oswald]">All Products</h2>

      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <div className="flex space-x-4">
          <select
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            <option value="Footwear">Footwear</option>
            <option value="Apparel">Apparel</option>
            <option value="Sports Equipment">Sports Equipment</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select
            name="brand"
            value={filter.brand}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Brands</option>
            <option value="PUMA">PUMA</option>
          
          
          </select>
          <select
            name="priceRange"
            value={filter.priceRange}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Prices</option>
            <option value="50">Under $50</option>
            <option value="100">Under $100</option>
            {/* Add more price ranges as needed */}
          </select>
          <select
            name="rating"
            value={filter.rating}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Ratings</option>
            <option value="1">3 Star & Up</option>
            <option value="2">4 Stars & Up</option>
            {/* Add more rating options as needed */}
          </select>
          <select
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Sort By Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <button
            onClick={handleClearFilters}
            className="p-2 border border-gray-300 rounded bg-red-500 text-white"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
