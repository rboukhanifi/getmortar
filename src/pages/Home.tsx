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

            {/* Social Proof (Transition Zone) */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    <img src="/logos/cuhk.png" alt="CUHK" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/logos/lovable.png" alt="Lovable" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/logos/huawei.png" alt="Huawei" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/logos/nvidia.png" alt="Nvidia" className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/logos/tsinghua.png" alt="Tsinghua" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                </div>
            </section>

            {/* Stats Grid */}
            <StatsGrid />

            <Footer />
        </div >
    );
};

export default Home;
