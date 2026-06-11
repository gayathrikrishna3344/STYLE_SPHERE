import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-teal-500 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;