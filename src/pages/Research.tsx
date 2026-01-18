import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
    return (
        <div className="relative h-screen bg-black text-white overflow-hidden">
            <Navbar />

            <main className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Mᵢ</h1>

                    <p className="text-sm md:text-base text-gray-400 mt-4 leading-relaxed max-w-xl">
                        Mortar is building industrial autonomy with a long-term mission to bridge robotics and AI, reducing human labor while maximizing industrial output and the quality of work. We're a team of engineers and researchers developing state-of-the-art industrial site models and self-learning algorithms to enable the future of robotics.
                    </p>

                    <div className="mt-10">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center pt-1">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                <div className="w-px h-12 bg-gray-700"></div>
                            </div>
                            <Link
                                to="/research/industrial-autonomy"
                                className="group"
                            >
                                <span className="text-xs text-gray-500">24 Jan. 2026</span>
                                <h2 className="text-base md:text-lg font-medium text-white group-hover:text-gray-400 transition-colors mt-1">
                                    Mortar: Industrial Autonomy via Continuous Data Collection
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    We're building an industrial intelligence platform that enables autonomy by continuously collecting real-world site data (video + sensors).
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Research;
