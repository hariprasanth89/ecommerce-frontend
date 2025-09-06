// API service for backend communication
const API_BASE_URL = 'http://localhost:8080/api';

// Mock data for development (replace with actual API calls)
const mockProducts = [
  { id: 1, name: "Wireless Bluetooth Headphones", description: "High-quality wireless headphones with noise cancellation", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop", category: "Electronics", stock: 50 },
  { id: 2, name: "Smartphone Case", description: "Protective case for latest smartphone models", price: 29.99, imageUrl: "https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=200&fit=crop", category: "Electronics", stock: 100 },
  { id: 3, name: "Running Shoes", description: "Comfortable running shoes for daily workouts", price: 129.99, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop", category: "Sports", stock: 30 },
  { id: 4, name: "Coffee Maker", description: "Automatic drip coffee maker with programmable timer", price: 89.99, imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop", category: "Home", stock: 25 },
  { id: 5, name: "Laptop Backpack", description: "Durable backpack with laptop compartment", price: 79.99, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", category: "Electronics", stock: 40 },
  { id: 6, name: "Yoga Mat", description: "Non-slip yoga mat for home workouts", price: 39.99, imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop", category: "Sports", stock: 60 }
];

class ApiService {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Product API methods
  async getAllProducts() {
    try {
      // Uncomment when backend is ready:
      // return await this.request('/products');
      
      // Using mock data for now:
      return new Promise(resolve => {
        setTimeout(() => resolve(mockProducts), 500);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      return mockProducts; // Fallback to mock data
    }
  }

  async getProductById(id) {
    try {
      // return await this.request(`/products/${id}`);
      return mockProducts.find(p => p.id === id);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  async searchProducts(keyword) {
    try {
      // return await this.request(`/products/search?keyword=${keyword}`);
      return mockProducts.filter(p => 
        p.name.toLowerCase().includes(keyword.toLowerCase()) ||
        p.description.toLowerCase().includes(keyword.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }

  async getProductsByCategory(category) {
    try {
      // return await this.request(`/products/category/${category}`);
      return mockProducts.filter(p => p.category === category);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  // Order API methods
  async createOrder(orderData) {
    try {
      // return await this.request('/orders', {
      //   method: 'POST',
      //   body: JSON.stringify(orderData),
      // });
      
      // Mock order creation for now:
      console.log('Order created:', orderData);
      return { 
        id: Date.now(), 
        ...orderData, 
        status: 'PENDING',
        createdAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async getOrderById(id) {
    try {
      return await this.request(`/orders/${id}`);
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  async getOrdersByCustomer(email) {
    try {
      return await this.request(`/orders/customer/${email}`);
    } catch (error) {
      console.error('Error fetching customer orders:', error);
      throw error;
    }
  }
}

export default new ApiService();