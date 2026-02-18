import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "서*은 님",
        tag: "초유&칼마디 구매",
        text: "아이가 입맛이 까다로워서 걱정했는데, 이건 복숭아 맛이라 그런지 먼저 달라고 하네요! 키도 쑥쑥 크길 기대해요.",
        rating: 5
    },
    {
        id: 2,
        name: "김*우 님",
        tag: "엘더베리 시럽 구매",
        text: "환절기마다 감기 달고 살았는데 이번엔 무사히 지나갔어요. 패키지도 예쁘고 성분도 착해서 믿고 먹입니다.",
        rating: 5
    },
    {
        id: 3,
        name: "이*하 님",
        tag: "유산균 파우더 구매",
        text: "배변 활동이 확실히 좋아졌어요. 가루 날림도 적고 우유에 타주면 너무 잘 먹습니다. 재구매 의사 100%!",
        rating: 5
    },
    {
        id: 4,
        name: "박*준 님",
        tag: "초유&칼마디 구매",
        text: "성분 꼼꼼히 따져보고 샀는데 밀리윌리가 제일 괜찮더라고요. 포장도 꼼꼼하고 배송도 빨랐습니다.",
        rating: 5
    }
];

const ReviewCard = ({ review }) => (
    <motion.div
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-w-[320px] md:min-w-[400px] flex-shrink-0"
        whileHover={{ y: -5 }}
    >
        <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
            ))}
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
            "{review.text}"
        </p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
                {review.name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-gray-800 text-sm">{review.name}</div>
                <div className="text-xs text-gray-400">{review.tag}</div>
            </div>
        </div>
    </motion.div>
);

const ReviewSection = () => {
    return (
        <section className="py-24 bg-brand-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <span className="text-brand font-bold tracking-wider uppercase mb-2 block text-sm">Real Reviews</span>
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark">엄마들이 선택한 밀리윌리</h2>
            </div>

            {/* Infinite Scroll / Drag Slider could be implemented here. For now, horizontal scroll. */}
            <div className="flex overflow-x-auto pb-12 px-4 md:px-0 gap-6 no-scrollbar snap-x mx-auto max-w-7xl">
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
