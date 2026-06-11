import { useCart } from '../context/CartContext';

const CartSummary = ({ onCheckout }) => {
  const { getCartTotal, getUniqueItemCount } = useCart();

  const subtotal = getCartTotal();
  const shippingCost = subtotal > 500 ? 0 : 50;
  const taxRate = 0.18; // 18% GST
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
      <h2 className="text-2xl font-bold text-dark mb-6">Order Summary</h2>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-lg text-dark">₹{subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700">
          Shipping 
          {shippingCost === 0 && <span className="text-green-600 text-sm ml-1">(Free)</span>}
        </span>
        <span className={`text-lg ${shippingCost === 0 ? 'text-green-600 font-semibold' : 'text-dark'}`}>
          {shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}
        </span>
      </div>

      {/* Free Shipping Info */}
      {shippingCost > 0 && (
        <p className="text-xs text-gray-500 mb-3">
          Free shipping on orders over ₹500
        </p>
      )}

      {/* Tax */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b">
        <span className="text-gray-700">Tax (18% GST)</span>
        <span className="text-lg text-dark">₹{tax.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl font-bold text-dark">Total</span>
        <span className="text-3xl font-bold text-primary">₹{total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-secondary hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md"
      >
        Proceed to Checkout
      </button>

      {/* Item Count */}
      <p className="text-center text-xs text-gray-500 mt-4">
        {getUniqueItemCount()} item{getUniqueItemCount() !== 1 ? 's' : ''} in cart
      </p>
    </div>
  );
};

export default CartSummary;
