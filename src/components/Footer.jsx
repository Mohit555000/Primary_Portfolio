import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
