import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center">
        {/* Empty Cart Icon */}
        <div className="mb-6">
          <div className="text-7xl">🛒</div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-dark mb-2">Your Cart is Empty</h2>
        
        {/* Subheading */}
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Looks like you haven't added any items to your cart yet. 
          Explore our collection and find something you love!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-block bg-secondary hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-lg transition duration-200 shadow-lg"
          >
            Browse Products
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-dark font-bold px-8 py-3 rounded-lg transition duration-200"
          >
            Back to Home
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>💡 Tip: Check out our latest collection in the Products section!</p>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
