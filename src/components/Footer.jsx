const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      <div className="bg-black/70 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
          
          <div className="text-gray-300 text-sm font-medium">
            GemiFlix
          </div>

          <div className="text-gray-400 text-xs sm:text-sm">
            Developed by{" "}
            <span className="text-red-500 font-semibold hover:text-red-400 transition-colors">
              Tufeeq Mushtaq
            </span>
          </div>

          <div className="hidden sm:block text-gray-500 text-xs">
            React • Redux • Firebase • Open AI
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;