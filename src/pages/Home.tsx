import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const Home: React.FC = () => {
    return (
        <div className="relative h-screen bg-white text-black selection:bg-black/20 overflow-hidden">
            <ParticleBackground color="#000000" />
            <Navbar />
            <CornerFrames color="light" />
            <Hero />
            <Footer variant="light" />
        </div>
    );
};

export default Home;
