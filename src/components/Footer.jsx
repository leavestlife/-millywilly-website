import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#1A261D] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                    <div className="flex flex-col gap-6 text-center md:text-left">
                        {/* Fixed logo: removed brightness filter that caused white line, ensured aspect ratio */}
                        <img src="/images/logo.png" alt="Milly Willy" className="h-32 w-auto object-contain mx-auto md:mx-0 opacity-90 invert brightness-0 filter" />
                        <p className="text-white/70 text-sm max-w-xs leading-relaxed">
                            프리미엄 키즈 건강기능식품<br />
                            우리 아이를 위한 자연의 선물
                        </p>
                    </div>

                    {/* Footer Categories */}
                    <div className="flex gap-12 text-sm">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h4 className="font-bold text-accent-gold uppercase tracking-wider">Milly Willy</h4>
                            <Link to="/brand" className="text-white/70 hover:text-white transition-colors">브랜드 스토리</Link>
                            <Link to="/products" className="text-white/70 hover:text-white transition-colors">제품</Link>
                            <Link to="/contact" className="text-white/70 hover:text-white transition-colors">문의하기</Link>
                        </div>
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h4 className="font-bold text-accent-gold uppercase tracking-wider">Customer</h4>
                            <a href="#" className="text-white/70 hover:text-white transition-colors">공지사항</a>
                            <Link to="/terms" className="text-white/70 hover:text-white transition-colors">이용약관</Link>
                            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">개인정보처리방침</Link>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-white/60 hover:text-accent-gold transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:contact@millywilly.co.kr" className="text-white/60 hover:text-accent-gold transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
                    &copy; {new Date().getFullYear()} Milly Willy. All rights reserved. 본 사이트는 포트폴리오 목적으로 제작되었습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
