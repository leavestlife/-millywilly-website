import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Nature background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm font-medium mb-6">
                        프리미엄 키즈 건강기능식품
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                        우리 아이를 위한 자연의 선물
                    </h1>
                    <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        Milly Willy는 가장 순수한 자연의 원료만을 담았습니다. <br className="hidden md:block" />
                        아이의 성장과 행복을 위한 과학적인 설계를 경험해보세요.
                    </p>


                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
