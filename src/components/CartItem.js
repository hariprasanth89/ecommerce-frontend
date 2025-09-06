import React from 'react';
import { Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center gap-4 p-4 border-b">
    <img 
      src={item.imageUrl} 
      alt={item.name}
      className="w-16 h-16 object-cover rounded"
    />
    <div className="flex-1">
      <h4 className="font-semibold">{item.name}</h4>
      <p className="text-gray-600">${item.price}</p>
    </div>
    <div className="flex items-center gap-2">
      <button 
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        disabled={item.quantity <= 1}
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center">{item.quantity}</span>
      <button 
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
    <div className="text-right">
      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:text-red-800 text-sm"
      >
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;