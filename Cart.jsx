import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    alert('Checkout feature coming soon!');
    // navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-dark">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-sm text-gray-600 hover:text-red-500 transition duration-200 font-semibold"
            title="Clear all items from cart"
          >
            Clear Cart
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-dark mb-6">
                Items ({cart.length})
              </h2>
              
              <div className="space-y-2">
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-8 pt-6 border-t">
                <button
                  onClick={handleContinueShopping}
                  className="text-secondary hover:text-teal-600 font-semibold transition duration-200"
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <CartSummary onCheckout={handleCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;