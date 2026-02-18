import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HomeBrandTeaser = () => {
    return (
        <section className="py-24 bg-brand-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <span className="text-brand font-bold tracking-widest uppercase mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
                            엄마의 마음으로<br />
                            <span className="text-brand-light">시작된 이야기</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            밀리윌리는 단순한 영양제가 아닙니다. <br />
                            우리 아이가 처음 만나는 건강한 습관이자,<br />
                            엄마와 아이가 함께 써내려가는 성장 일기입니다.
                        </p>
                        <Link to="/brand" className="inline-flex items-center gap-2 bg-[#405244] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5D7262] transition-colors shadow-lg group">
                            브랜드 스토리 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="/images/brand-story-mom.png"
                                alt="Mom and Kids"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-gold/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrandTeaser;
