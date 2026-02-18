import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F5EF] px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-brand/20 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-brand-dark mb-4">페이지를 찾을 수 없습니다</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    요청하신 페이지가 사라졌거나 잘못된 경로입니다. <br />
                    밀리윌리의 홈으로 돌아가주세요.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors shadow-lg">
                    <Home size={20} /> 홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
