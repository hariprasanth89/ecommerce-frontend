import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <img 
      src={product.imageUrl} 
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        <div className="flex items-center text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4" />
          <span className="text-gray-600 text-sm ml-1">(4.0)</span>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;