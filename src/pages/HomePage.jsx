import React from 'react';
import Hero from '../components/Hero';
import ReviewSection from '../components/ReviewSection';
import HomeBrandTeaser from '../components/HomeBrandTeaser';
import HomeProductTeaser from '../components/HomeProductTeaser';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <HomeProductTeaser />
            <HomeBrandTeaser />
            <ReviewSection />
        </main>
    );
};

export default HomePage;
