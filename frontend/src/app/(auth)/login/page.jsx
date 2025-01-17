"use client";
import { useRouter } from 'next/navigation';

const LoginChoice = () => {
  const router = useRouter();

  const handleVendorLogin = () => {
    router.push('/login/vendor');
  };

  const handleCustomerLogin = () => {
    router.push('/login/customer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-center mb-8">Sign In</h1>
        
        <div className="space-y-4">
          <button
            onClick={handleVendorLogin}
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          >
            Login as Vendor
          </button>
          
          <button
            onClick={handleCustomerLogin}
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          >
            Login as Customer
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">New to the platform?</p>
          <a href="/register" className="text-green-500 hover:text-green-600">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;