'use client';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex space-x-8 justify-center">
          <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">홈</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">소개</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">프로젝트</a></li>
          <li><a href="#skills" className="text-gray-300 hover:text-pink-400 transition-colors">기술</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">연락처</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;