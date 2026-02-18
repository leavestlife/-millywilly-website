import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Microscope, Leaf } from 'lucide-react';

const BrandIntro = () => {
    const identities = [
        {
            id: 1,
            title: "아이에게 꼭 맞춘 설계",
            eng: "Tailored for Kids",
            desc: "아이의 입맛부터 성장 단계별 필요 영양소까지. 수천 번의 테스트 끝에 아이가 먼저 찾는 맛과 영양을 완성했습니다.",
            icon: <Heart size={40} className="text-white" />,
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop", // Happy playing kid
            color: "bg-[#FF9F9F]" // Soft Coral
        },
        {
            id: 2,
            title: "엄마의 눈으로 만든 제품",
            eng: "From Mom's Perspective",
            desc: "내 아이에게 먹인다는 마음으로. 타협하지 않는 까다로운 기준과 투명한 공정으로 엄마의 마음을 담았습니다.",
            icon: <Microscope size={40} className="text-white" />,
            image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop", // Mom and child - Fixed URL or similar
            color: "bg-[#6A9C89]" // Sage Green
        },
        {
            id: 3,
            title: "자연을 담은 원료",
            eng: "Nature's Best Ingredients",
            desc: "청정 자연에서 얻은 프리미엄 원료만을 고집합니다. 화학 첨가물은 최소화하고 자연 그대로의 건강함을 전합니다.",
            icon: <Leaf size={40} className="text-white" />,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop", // Forest/Nature
            color: "bg-[#D4A373]" // Earthy Beige
        }
    ];

    return (
        <section className="bg-white min-h-screen">
            {/* Hero Section of Brand Page */}
            <div className="bg-[#1A261D] text-white py-20 px-4 mb-0">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent-gold font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="mb-6">
                            <span className="text-2xl md:text-3xl font-bold block mb-2 text-white/90">작은 습관이 만드는 큰 꿈</span>
                            <span className="text-6xl md:text-8xl font-black text-brand-light tracking-tighter block mt-4">밀리윌리</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                            우리는 아이들이 스스로 건강한 습관을 즐길 수 있는 세상을 꿈꿉니다.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Core Identity Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {identities.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                {/* Increased opacity for better text visibility */}
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white relative z-10">
                                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm bg-opacity-90`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                                <div className="text-white/50 text-sm font-bold uppercase tracking-widest mb-6">{item.eng}</div>

                                <p className="text-white/90 leading-relaxed text-lg border-l-4 border-white/30 pl-4">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Closing Statement */}
            <div className="bg-[#F7F5EF] py-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <QuoteIcon />
                    <h3 className="text-2xl md:text-4xl font-bold text-[#2F3E35] leading-normal my-10">
                        "밀리윌리는 단순한 영양제가 아닙니다.<br />
                        아이와 엄마가 함께 써내려가는<br />
                        <span className="text-brand underline decoration-accent-gold decoration-4 underline-offset-4">건강한 성장 일기</span>입니다."
                    </h3>
                    <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

const QuoteIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto text-brand opacity-30">
        <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V11ZM10 11V13C10 14.8565 9.2625 16.637 7.94975 17.9497C6.637 19.2625 4.85652 20 3 20M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V11ZM20 11V13C20 14.8565 19.2625 16.637 17.9497 17.9497C16.637 19.2625 14.8565 20 13 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default BrandIntro;
