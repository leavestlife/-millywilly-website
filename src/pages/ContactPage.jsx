import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation of form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-20 min-h-screen bg-brand-bg">
            {/* Header - Hardcoded background for safety */}
            <section className="bg-[#1A261D] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596464716127-f9a0639b9da4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        문의하기
                    </motion.h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        궁금한 점이 있으신가요? 밀리윌리 팀이 친절하게 답변해 드립니다.
                    </p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-[#1A261D] mb-6">Contact Info</h2>
                            <p className="text-gray-600 mb-8">
                                제품 문의, 배송 문의, 제휴 제안 등 어떤 내용이든 환영합니다.<br />
                                평일 기준 24시간 이내에 답변 드리겠습니다.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1A261D]/10 rounded-full text-[#1A261D]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">nj@millywilly.co.kr</p>
                                    <p className="text-sm text-gray-400 mt-1">언제든지 메일로 문의주세요.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1A261D]/10 rounded-full text-[#1A261D]">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Customer Center</h3>
                                    <p className="text-gray-600">네이버 톡톡</p>
                                    <p className="text-sm text-gray-400 mt-1">평일 10:00 - 17:00 (점심시간 12:00 - 13:00)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1A261D]/10 rounded-full text-[#1A261D]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Office</h3>
                                    <p className="text-gray-600">서울특별시 강남구 역삼로 215</p>
                                    <p className="text-sm text-gray-400 mt-1">밀리윌리 본사</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">문의가 접수되었습니다!</h3>
                                <p className="text-gray-600 mb-8">
                                    빠른 시일 내에 답변 드리겠습니다.<br />
                                    감사합니다.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    추가 문의하기
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#1A261D] mb-6">무엇을 도와드릴까요?</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">이름</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A261D] focus:ring-2 focus:ring-[#1A261D]/20 outline-none transition-all"
                                            placeholder="홍길동"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">이메일</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A261D] focus:ring-2 focus:ring-[#1A261D]/20 outline-none transition-all"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">제목</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A261D] focus:ring-2 focus:ring-[#1A261D]/20 outline-none transition-all"
                                        placeholder="문의 제목을 입력해주세요"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">내용</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A261D] focus:ring-2 focus:ring-[#1A261D]/20 outline-none transition-all resize-none"
                                        placeholder="문의하실 내용을 자유롭게 적어주세요."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1A261D] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#2F3E35] transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    문의하기
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
