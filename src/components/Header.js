import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';

const Header = ({ currentView, setCurrentView, cartCount }) => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Package className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">ShopEasy</h1>
        </div>
        
        <nav className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentView('products')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentView === 'products' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setCurrentView('cart')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              currentView === 'cart' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;