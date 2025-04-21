import LeafandLineLogo from '../../assets/LeafandLine.png' // Adjust the import path as necessary

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-[#111827] mt-16">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#" className="flex items-center space-x-2">
                  <img className="w-auto h-14 rounded-full" src={LeafandLineLogo} alt="Logo" />
                  <span className="text-xl font-semibold text-gray-700 dark:text-white">Leaf and Line</span>
                </a>
  
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Where Nature Meets Notebooks
                </p>
  
                <div className="flex mt-4 -mx-2">
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-500" aria-label="Facebook">Facebook</a>
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-500" aria-label="Instagram">Instagram</a>
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-500" aria-label="YouTube">YouTube</a>
                </div>
              </div>
            </div>
  
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white font-semibold tracking-widest">About</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Company</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Community</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Careers</a>
                </div>
  
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white font-semibold tracking-widest">Blog</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Tech</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Nature</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Lifestyle</a>
                </div>
  
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white font-semibold tracking-widest">Help</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Support</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">Contact</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300">FAQs</a>
                </div>
  
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white font-semibold tracking-widest">Contact</h3>
                  <span className="block mt-2 text-sm text-gray-700 dark:text-gray-300">📞 +880 1234 567 890</span>
                  <span className="block mt-1 text-sm text-gray-700 dark:text-gray-300">✉️ contact@leafandline.com</span>
                </div>
              </div>
            </div>
          </div>
  
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
  
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Leaf & Line 2025 — All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  