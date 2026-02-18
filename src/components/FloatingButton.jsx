import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButton = () => {
    return (
        <a
            href="https://pf.kakao.com/_placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#FAE100] hover:bg-[#F9E000] text-[#371D1E] p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2 font-bold group"
            aria-label="카카오톡 상담하기"
        >
            <MessageCircle size={24} className="fill-[#371D1E]" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                카톡 상담
            </span>
        </a>
    );
};

export default FloatingButton;
