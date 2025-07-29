const Footer = () => {
  return (
    // Footer background stretches full width.
    // Content is directly within footer and uses px-8 for padding.
    <footer className="text-center py-8 bg-gray-800 text-gray-300 mt-16 shadow-inner px-8">
      <div className="container mx-auto"> {/* Kept a container here for very wide screens */}
        <p className="text-sm md:text-base leading-relaxed">
          &copy; {new Date().getFullYear()} Fashion Cart. All rights reserved.
          <br />
          Designed with ❤️ for a seamless shopping experience.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;