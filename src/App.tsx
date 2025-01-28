import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import { Headphones, Search, LogIn } from 'lucide-react';
    import { Login } from './pages/Login';
    import { About } from './pages/About';
    import { HomePage } from './components/HomePage';

    function App() {
      return (
        <div className="min-h-screen">
          {/* Sticky Navbar */}
          <nav className="fixed top-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <Headphones className="h-8 w-8 text-white" />
                    <span className="ml-2 text-white font-semibold text-lg">AudioPrime</span>
                  </Link>
                </div>
                
                <div className="flex items-center space-x-8">
                  <Link to="#" className="text-gray-300 hover:text-white">บทความ</Link>
                  <Link to="#" className="text-gray-300 hover:text-white">สถานะ</Link>
                  <Link to="#" className="text-gray-300 hover:text-white">นิยาย</Link>
                  <Link to="#" className="text-gray-300 hover:text-white">ข่าว</Link>
                  <Link to="/about" className="text-gray-300 hover:text-white">เกี่ยวกับเรา</Link>
                  <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                  <Link to="/login">
                    <LogIn className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      );
    }

    export default App;
