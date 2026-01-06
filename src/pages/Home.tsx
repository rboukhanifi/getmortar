import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-primary selection:bg-white/20">
            {/* Light Mode Section (Hero) */}
            <div className="relative bg-white text-black">
                <ParticleBackground color="#000000" />
                <Navbar initialTextColor="text-black" />
                <Hero />
            </div>

            {/* Stats Grid */}
            <StatsGrid />

            <Footer />
        </div >
    );
};

export default Home;
