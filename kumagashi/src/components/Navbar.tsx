import { useTheme } from '../contexts/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">Kumagashi</div>
        <div className="flex items-center space-x-6">
          <a 
            href="#hero" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <FiMoon className="w-5 h-5" />
            ) : (
              <FiSun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;