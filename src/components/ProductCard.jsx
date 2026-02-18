import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Info, Check } from 'lucide-react';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative flex flex-row items-center bg-[#2F3E35] rounded-[2rem] shadow-2xl overflow-hidden mx-auto h-[450px]"
            // Animate width of the container: Increased to 72rem to accommodate wider detail panel
            animate={{ width: isHovered ? '72rem' : '48rem' }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ maxWidth: '100%' }}
        >
            {/* Left Section: Image & Main Info - Fixed Width */}
            <div className="w-[48rem] flex-shrink-0 flex items-center p-10 gap-8 h-full">
                {/* Image */}
                <div className="relative w-72 h-72 flex items-center justify-center flex-shrink-0">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl transform scale-75 group-hover:scale-110 transition-transform duration-700"></div>
                    <motion.div layoutId={`image-${product.id}`} className="relative z-10 w-64 h-64 rotate-0 group-hover:rotate-6 transition-transform duration-500">
                        {product.image ? (
                            // Changed to object-cover for photos, added rounded corners and shadow
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center rounded-2xl shadow-2xl border-2 border-white/10" />
                        ) : (
                            <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-white/50 font-bold text-2xl">IMG</div>
                        )}
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="flex-col justify-center flex h-full text-left min-w-[320px]">
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-accent-gold text-white text-[10px] font-black rounded-md uppercase tracking-widest border border-white">
                            GROWTH FORMULA
                        </span>
                    </div>

                    <h3 className="text-4xl font-black text-white mb-2 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                        {product.name}
                    </h3>
                    {/* Improved visibility for rating */}
                    <p className="text-white text-base font-bold mb-6 flex items-center gap-2">
                        <Star size={16} className="text-accent-gold" fill="currentColor" />
                        4.9/5.0 Customer Rating
                    </p>

                    <p className="text-gray-300 mb-8 leading-relaxed text-sm pr-4 line-clamp-2">
                        {product.desc}
                    </p>

                    <div className="flex items-center gap-6 mt-auto mb-4">
                        <span className="text-3xl font-bold text-white">{product.price}</span>
                        <a href="https://smartstore.naver.com/milly_willy" target="_blank" rel="noopener noreferrer" className="bg-white text-[#2F3E35] px-8 py-3 rounded-xl font-bold hover:bg-accent-gold hover:text-white transition-all flex items-center gap-2 shadow-lg transform active:scale-95">
                            바로 구매하기 <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Section: Expanded Details - Sliding Panel */}
            <div className="flex-grow h-full bg-[#25322B] border-l border-white/5 overflow-hidden flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    // Increased width to w-96 (24rem) to prevent text wrapping
                    className="p-8 w-96 min-w-[24rem]"
                >
                    {/* Improved visibility for headers */}
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-4">
                        <Info size={16} className="text-accent-gold" /> Product Detail
                    </h4>

                    <div className="space-y-8">
                        <div>
                            <div className="text-white/60 text-[10px] font-black tracking-widest mb-2">KEY INGREDIENTS</div>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {product.ingredients?.map((ing, i) => (
                                    <li key={i} className="text-white text-[11px] flex items-start gap-1.5 font-medium leading-snug whitespace-nowrap">
                                        <div className="w-1 h-1 rounded-full bg-accent-gold mt-1.5 flex-shrink-0"></div>
                                        {/* Highlight ingredient text */}
                                        <span className="text-brand-light">{ing}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="text-white/60 text-[10px] font-black tracking-widest mb-2">RECOMMENDED AGE</div>
                            <div className="text-white text-xl font-bold">{product.age}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
