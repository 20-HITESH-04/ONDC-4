import React from 'react';

export default function ComplaintsPage() {
  const complaints = [
    {
      id: 1,
      product: {
        name: "Green Capsicum",
        image: "/api/placeholder/40/40"
      },
      issue: "Small size received",
      status: "Resolved",
      email: "maheshpandais123@gmail.com"
    },
    {
      id: 2,
      product: {
        name: "Chinese Cabbage",
        image: "/api/placeholder/40/40"
      },
      issue: "DFGHJTYU17",
      status: "Resolved",
      email: "maheshpandais123@gmail.com"
    },
    {
      id: 3,
      product: {
        name: "Fresh Support Mango",
        image: "/api/placeholder/40/40"
      },
      issue: "DFGHJTYU7",
      status: "Pending",
      email: "maheshpandais123@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/api/placeholder/32/32" 
              alt="Ecobazar" 
              className="h-8"
            />
            <span className="text-green-600 font-semibold">Grand Bazaar</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm"></span>
            <span className="text-sm"></span>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-black/90 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center space-x-2 text-sm">
          <span>Home</span>
          <span>/</span>
          <span>Wishlist</span>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-center mb-8">Complaints</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {complaints.map(complaint => (
                <tr key={complaint.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img 
                        src={complaint.product.image} 
                        alt={complaint.product.name}
                        className="h-10 w-10 rounded-md mr-3 object-cover"
                      />
                      <span className="text-sm font-medium">{complaint.product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {complaint.issue}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      complaint.status === 'Resolved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {complaint.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Share section */}
        <div className="mt-6 flex items-center space-x-4">
          <span className="text-gray-600">Share:</span>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">f</span>
            </button>
            <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">t</span>
            </button>
            <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">p</span>
            </button>
            <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">i</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}