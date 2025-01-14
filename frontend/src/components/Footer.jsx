const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center px-6">
        {/* Project Name and Description */}
        <div>
          <h3 className="font-bold text-xl">GrandBazzar</h3>
          <p className="text-sm mt-2 max-w-md">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="mt-4">
          <p>
            <strong>(219) 555-0114</strong> or <strong>Proxy@gmail.com</strong>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm">
          Ecobazar eCommerce © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;