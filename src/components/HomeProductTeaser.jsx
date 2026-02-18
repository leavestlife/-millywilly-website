import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const HomeProductTeaser = () => {
    return (
        <section className="py-24 bg-brand-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold tracking-widest uppercase mb-2 block">Best Seller</span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark">가장 사랑받는 밀리윌리</h2>
                </div>

                <div className="relative bg-[#2F3E35] rounded-[3rem] overflow-hidden p-8 md:p-16 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Side */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-75"></div>
                            <img
                                src="/images/product-real-photo.png"
                                alt="Milly Willy Product"
                                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl object-cover"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 text-center md:text-left text-white">
                            <div className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                GROWTH FORMULA
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                                밀리윌리 <br />
                                <span className="text-accent-gold">초유&칼마디k2</span>
                            </h3>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                                <div className="flex text-accent-gold">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FAE100" stroke="#FAE100" />)}
                                </div>
                                <span className="text-white/80 font-medium">4.9 Review</span>
                            </div>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                                사회생활을 시작한 성장기 아이를 위한 올인원 영양제.<br />
                                하루 한 포로 챙기는 뼈 건강과 면역력.
                            </p>
                            <Link to="/products" className="inline-flex items-center gap-2 bg-white text-[#2F3E35] px-8 py-4 rounded-xl font-bold hover:bg-accent-gold hover:text-white transition-all shadow-lg transform hover:-translate-y-1">
                                제품 자세히 보기 <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProductTeaser;
