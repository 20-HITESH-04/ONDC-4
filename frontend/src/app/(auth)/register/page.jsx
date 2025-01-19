"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AuthPage = () => {
  const router = useRouter();

  const handleVendorRegistration = () => {
    router.push('/register/vendor');
  };

  const handleCustomerRegistration = () => {
    router.push('/register/customer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="px-6 pt-8">
            <h1 className="text-3xl font-bold text-gray-600 text-center">
              Register
            </h1>
          </div>

          {/* Card Body */}
          <div className="px-8 py-12 space-y-6">
            <button 
              onClick={handleVendorRegistration}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Register as Vendor
            </button>

            <button 
              onClick={handleCustomerRegistration}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Register as Customer
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already registered?
                </span>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/login"
                className="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors duration-200"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;