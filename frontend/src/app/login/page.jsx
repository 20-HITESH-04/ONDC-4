import Breadcrumb from '../../components/Breadcrumb';

const LoginPage = () => {
  const breadcrumbItems = [
    { label: 'Account', href: '/account' },
    { label: 'Login', href: '/account/login' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          Login as Vendor
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Login as Customer
        </button>
        <p className="text-sm mt-4">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;