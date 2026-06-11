import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to StyleSphere</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover the latest fashion trends curated by AI. Shop premium quality clothing and accessories for your unique style.
      </p>
      
      {isAuthenticated ? (
        <Link
          to="/products"
          className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;