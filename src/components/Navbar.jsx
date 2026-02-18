import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-36">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src="/images/logo.png" alt="Milly Willy" className="h-32 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-gray-700 hover:text-brand transition-colors font-medium">홈</Link>
                        <Link to="/products" className="text-gray-700 hover:text-brand transition-colors font-medium">제품</Link>
                        <Link to="/brand" className="text-gray-700 hover:text-brand transition-colors font-medium">브랜드 스토리</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-brand transition-colors font-medium">문의하기</Link>
                        <a href="https://smartstore.naver.com/milly_willy" target="_blank" rel="noopener noreferrer"
                            className="bg-[#5D7262] text-white px-6 py-2 rounded-full hover:bg-[#405244] transition-all transform hover:scale-105 shadow-md flex items-center gap-2 font-bold border border-[#5D7262]">
                            <ShoppingBag size={18} />
                            구매하기
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md absolute w-full shadow-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand hover:bg-green-50 rounded-md font-medium">홈</Link>
                            <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand hover:bg-green-50 rounded-md font-medium">제품</Link>
                            <Link to="/brand" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand hover:bg-green-50 rounded-md font-medium">브랜드 스토리</Link>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand hover:bg-green-50 rounded-md font-medium">문의하기</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
