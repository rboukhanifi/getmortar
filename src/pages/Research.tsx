import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-2xl mx-auto">
                    <span className="text-sm font-medium text-gray-400 tracking-wide">Mᵢ</span>

                    <p className="text-lg md:text-xl text-gray-800 mt-6 leading-relaxed">
                        Mortar is building industrial autonomy with a long-term mission to bridge robotics and AI, reducing human labor while maximizing industrial output and the quality of work. We're a team of engineers and researchers developing state-of-the-art industrial site models and self-learning algorithms to enable the future of robotics.
                    </p>

                    <div className="mt-16">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-px h-8 bg-gray-200"></div>
                            </div>
                            <Link
                                to="/research/industrial-autonomy"
                                className="group -mt-1"
                            >
                                <span className="text-base md:text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                                    Mortar: Industrial Autonomy via Continuous Data Collection
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default Research;
