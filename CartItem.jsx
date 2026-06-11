import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const itemTotal = item.price * item.quantity;

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b last:border-b-0 last:mb-0 last:pb-0">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-md shadow-sm" 
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-dark truncate">{item.name}</h3>
        <p className="text-gray-600 text-sm">₹{item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleDecrement}
          className="bg-gray-300 hover:bg-gray-400 text-dark font-bold px-2 py-1 rounded transition duration-200 w-8 h-8 flex items-center justify-center"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="font-semibold text-dark min-w-8 text-center">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="bg-gray-300 hover:bg-gray-400 text-dark font-bold px-2 py-1 rounded transition duration-200 w-8 h-8 flex items-center justify-center"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <div className="flex-shrink-0 text-right min-w-16">
        <p className="font-bold text-lg text-dark">
          ₹{itemTotal.toFixed(2)}
        </p>
        <p className="text-xs text-gray-500">
          {item.quantity} × ₹{item.price}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded transition duration-200"
        aria-label="Remove from cart"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
