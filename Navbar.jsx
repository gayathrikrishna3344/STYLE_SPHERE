import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();
  
  const cartItemCount = getCartItemCount();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-dark text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-primary">
          StyleSphere
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/products" className="hover:text-primary transition">Products</Link>
              <Link to="/cart" className="hover:text-primary transition flex items-center gap-2 relative">
                🛒 Cart
                {cartItemCount > 0 && (
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-primary px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary transition">Login</Link>
              <Link
                to="/signup"
                className="bg-primary px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;