import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
    const faqs = [
        {
            question: "섭취 권장 연령이 어떻게 되나요?",
            answer: "밀리윌리 초유&칼마디k2는 만 3세부터 8세까지의 성장기 어린이를 위해 설계되었습니다. 부드러운 분말 형태로 아이들이 쉽게 섭취할 수 있습니다."
        },
        {
            question: "하루에 몇 개 먹여야 하나요?",
            answer: "하루 1포 섭취를 권장합니다. 과도한 섭취는 영양 과잉이 될 수 있으니 권장량을 지켜주세요."
        },
        {
            question: "다른 영양제와 같이 먹여도 되나요?",
            answer: "네, 대부분의 비타민이나 유산균과 함께 섭취해도 무방합니다. 다만 칼슘 함량이 높은 제품이므로 고함량 칼슘제와 중복 섭취 시 전문가와 상담을 권장합니다."
        },
        {
            question: "보관은 어떻게 하나요?",
            answer: "직사광선을 피해 서늘한 실온에 보관하시면 됩니다. 여름철에는 냉장 보관하시면 더 시원하고 맛있게 즐기실 수 있습니다."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">FAQ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">자주 묻는 질문</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-brand/30 transition-colors">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-brand" size={20} />
                                ) : (
                                    <ChevronDown className="text-gray-400" size={20} />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-gray-50"
                                    >
                                        <div className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
