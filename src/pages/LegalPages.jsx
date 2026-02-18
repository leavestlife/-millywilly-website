import React from 'react';

const LegalLayout = ({ title, children }) => (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-brand-dark">{title}</h1>
        <div className="prose max-w-none text-gray-600 space-y-4">
            {children}
        </div>
    </div>
);

export const TermsPage = () => {
    return (
        <LegalLayout title="이용약관">
            <p><strong>제1조 (목적)</strong><br />
                이 약관은 밀리윌리(이하 "회사")가 운영하는 사이트에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            <p className="bg-gray-100 p-4 rounded-lg text-sm">
                ※ 본 내용은 포트폴리오용 예시 약관입니다. 실제 운영 시에는 법률 검토를 거친 정식 이용약관을 게시해야 합니다.
            </p>
        </LegalLayout>
    );
};

export const PrivacyPage = () => {
    return (
        <LegalLayout title="개인정보처리방침">
            <p>밀리윌리('millywilly.co.kr'이하 '밀리윌리')는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.</p>
            <p><strong>1. 개인정보의 처리 목적</strong><br />
                밀리윌리는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</p>
            <ul className="list-disc pl-5">
                <li>홈페이지 회원가입 및 관리</li>
                <li>재화 또는 서비스 제공</li>
                <li>마케팅 및 광고에의 활용</li>
            </ul>
        </LegalLayout>
    );
};
