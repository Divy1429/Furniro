import React, { useState, useEffect } from 'react';
import Advertisement from './../Advertisement/Advertisement';
import BackgroundWrapper from './../Back-image/BackgroundWrapper';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart items from localStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      }
      setLoading(false);
    };

    loadCart();
  }, []);

  // Save cart to localStorage
  const saveCart = (items) => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
      setCartItems(items);
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    saveCart(updatedItems);
  };

  // Remove item
  const removeItem = (productId) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    saveCart(updatedItems);
  };

  // Clear cart
  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  // Calculate totals
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (loading) {
    return (
      <div>
        <BackgroundWrapper />
        <div className="max-w-[1440px] mx-auto px-4 py-8 text-center">
          <p>Loading cart...</p>
        </div>
        <Advertisement />
      </div>
    );
  }

  return (
    <div>
      <BackgroundWrapper />
      
      <div className="max-w-[1440px] mx-auto px-4 py-8 min-h-[400px]">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-[32px] font-medium text-gray-800 mb-4 max-sm:text-[24px]">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8 text-[16px]">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link 
              to="/shop"
              className="inline-block bg-[#B88E2F] text-white px-8 py-3 rounded-lg hover:bg-[#A17B28] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-[#F9F1E7] px-6 py-4 rounded-t-lg">
                  <div className="grid grid-cols-4 gap-4 font-medium">
                    <div className="col-span-2">Product</div>
                    <div className="text-center">Quantity</div>
                    <div className="text-center">Subtotal</div>
                  </div>
                </div>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="grid grid-cols-4 gap-4 items-center max-sm:grid-cols-1">
                        <div className="col-span-2 flex items-center gap-4 max-sm:col-span-1">
                          <img 
                            src={item.image || item.img} 
                            alt={item.name}
                            className="w-[80px] h-[80px] object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-[16px]">{item.name}</h3>
                            <p className="text-gray-500 text-[14px]">${item.price?.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 max-sm:justify-start">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border rounded hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border rounded min-w-[50px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border rounded hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div>
              <div className="bg-[#F9F1E7] p-6 rounded-lg sticky top-8">
                <h2 className="text-[24px] font-semibold text-center mb-6">Cart Totals</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Items ({getTotalItems()}):</span>
                    <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-[20px] font-semibold">
                      <span>Total:</span>
                      <span className="text-[#B88E2F]">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/checkout"
                    className="block w-full bg-[#B88E2F] text-white py-3 px-6 rounded-lg text-center hover:bg-[#A17B28] transition-colors font-medium"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <button
                    onClick={clearCart}
                    className="block w-full border border-[#B88E2F] text-[#B88E2F] py-3 px-6 rounded-lg text-center hover:bg-[#B88E2F] hover:text-white transition-colors font-medium"
                  >
                    Clear Cart
                  </button>
                  
                  <Link
                    to="/shop"
                    className="block w-full text-center text-gray-600 hover:text-[#B88E2F] transition-colors text-[14px] py-2"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Advertisement />
    </div>
  );
};

export default Cart;
