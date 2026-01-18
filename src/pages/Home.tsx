import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-black/20">
            <ParticleBackground color="#000000" />
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
