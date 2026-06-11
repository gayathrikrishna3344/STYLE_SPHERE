import ProductCard from '../components/ProductCard';
import { useState } from 'react';
const PRODUCTS = [ { id: 1, name: "Classic T-Shirt", category: "Tops", price: 599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", }, { id: 2, name: "Blue Jeans", category: "Bottoms", price: 1500, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", }, { id: 3, name: "Leather Jacket", category: "Outerwear", price: 999, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", }, { id: 4, name: "Summer Dress", category: "Dresses", price: 499, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500", }, { id: 5, name: "White Sneakers", category: "Shoes", price: 2500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", }, { id: 6, name: "Wool Sweater", category: "Tops", price: 550, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500", }, { id: 7, name: "Black Formal Shirt", category: "Tops", price: 500, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80", }, { id: 8, name: "Women Saree", category: "Traditional", price: 2500, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500", }, { id: 9, name: "Chinos Pants", category: "Bottoms", price: 999, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500", }, { id: 10, name: "Sports Hoodie", category: "Outerwear", price: 1500, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=500&q=80", }, { id: 11, name: "Casual Shorts", category: "Bottoms", price: 500, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", }, { id: 12, name: "Running Shoes", category: "Shoes", price: 3000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", }, { id: 13, name: "Printed Kurti", category: "Traditional", price: 1799, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/j/f/m/m-kurti-001-rangita-original-imagz8uhz7f8zjhf.jpeg?q=70", }, { id: 14, name: "Denim Skirt", category: "Bottoms", price: 2199, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80", }, { id: 15, name: "Casual Blazer", category: "Outerwear", price: 499, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80", }, { id: 16, name: "Ankle Boots", category: "Shoes", price: 999, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&w=500&q=80", }, ];


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark mb-8">Fashion Collection</h1>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;