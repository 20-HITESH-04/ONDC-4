"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded border border-blue-200 p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Create Account
        </h2>
        
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-600">
              Accept all terms & Conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-full mt-6 hover:bg-green-600 transition-colors duration-200"
          >
            Create Account
          </button>

          {/* Login Link */}
          <div className="text-center text-sm mt-4">
            <span className="text-gray-600">Already have account? </span>
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;