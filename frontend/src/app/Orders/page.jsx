import React from 'react';

export default function OrdersPreview() {
  const orders = [
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.99,
      qty: 450,
      email: "muhammadnadia52@gmail.com",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 45.00,
      qty: 12,
      email: "muhammadnadia52@gmail.com",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Fresh Support Mango",
      price: 28.00,
      qty: 300,
      email: "muhammadnadia52@gmail.com",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <span className="text-xl font-bold">Ecobazar</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Shopping cart: $57.50</span>
            <span>(213) 555-0114</span>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <img 
                src={order.image} 
                alt={order.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{order.name}</h3>
                <p className="text-gray-600 text-sm">{order.email}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">${order.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Qty: {order.qty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
    
    </div>
  );
}