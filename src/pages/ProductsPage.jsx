import React from 'react';
import ProductList from '../components/ProductList';
import FAQSection from '../components/FAQSection';

const ProductsPage = () => {
    return (
        <div className="pt-20">
            <ProductList />
            <FAQSection />
        </div>
    );
};

export default ProductsPage;
