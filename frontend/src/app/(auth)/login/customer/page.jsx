"use client";
import { useState } from 'react';
import Link from 'next/link';

const CustomerLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation breadcrumb */}
      <div className="bg-gray-900 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-green-500 hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/account" className="text-green-500 hover:text-green-400">Account</Link>
            <span>/</span>
            <span>Login</span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-semibold text-center mb-8">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-green-500 hover:text-green-600">
                Forget Password
              </Link>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p>Don't have account? 
              <Link href="/register" className="text-green-500 hover:text-green-600 ml-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;