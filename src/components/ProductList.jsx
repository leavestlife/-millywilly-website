import React from 'react';
import ProductCard from './ProductCard';

// Temporary Data
const products = [
    {
        id: 1,
        name: "밀리윌리 초유&칼마디k2",
        desc: "사회생활을 시작한 성장기 아이를 위한 올인원 영양제",
        price: "42,000원",
        ingredients: [
            "해조 칼슘", "쌀발효마그네슘", "건조효모 비타민D", "바실러스나토균 유래 비타민K2",
            "고초균 유래 폴리감마글루탐산", "유산균 유래 아연", "건조효모 망간", "CBP(초유단백분말)", "산양유분말", "락토페린"
        ],
        age: "3 ~ 8세",
        link: "https://smartstore.naver.com/milly_willy",
        image: "/images/product-real-photo.png"
    },
    {
        id: 2,
        name: "환절기 면역 엘더베리 시럽",
        desc: "환절기 면역력을 위한 천연 엘더베리 추출물. 맛있게 지키는 우리 아이 건강.",
        price: "38,000원",
        ingredients: ["블랙 엘더베리", "비타민 C", "프로폴리스"],
        age: "3세 이상",
        link: "https://smartstore.naver.com/milly_willy"
    },
    {
        id: 3,
        name: "장건강 키즈 유산균 파우더",
        desc: "100억 유산균으로 지키는 장 건강. 아이들이 좋아하는 요거트 맛.",
        price: "52,000원",
        ingredients: ["락토바실러스", "프리바이오틱스", "비타민 B군"],
        age: "전연령",
        link: "https://smartstore.naver.com/milly_willy"
    }
];

const ProductList = () => {
    return (
        <section id="products" className="py-24 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">프리미엄 제품 라인업</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        최고의 자연 유래 성분으로 깐깐하게 만들었습니다.
                    </p>
                </div>

                <div className="flex flex-col gap-12 items-center">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
