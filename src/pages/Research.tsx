import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';

const Research = () => {
    return (
        <div className="relative h-screen bg-white text-black overflow-hidden">
            <Navbar />
            <CornerFrames color="light" />

            <main className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Mᵢ</h1>

                    <p className="text-sm md:text-base text-gray-500 mt-4 leading-relaxed max-w-xl">
                        Mortar is building industrial autonomy with a long-term mission to bridge robotics and AI, reducing human labor while maximizing industrial output and the quality of work. We're a team of engineers and researchers developing state-of-the-art industrial site models and self-learning algorithms to enable the future of robotics.
                    </p>

                    <div className="mt-10 relative">
                        {/* Continuous timeline line */}
                        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gray-300"></div>

                        <div className="space-y-8">
                            {/* New paper - Feb 2026 */}
                            <div className="flex items-start gap-4 relative">
                                <div className="w-2 h-2 rounded-full bg-black mt-1.5 relative z-10"></div>
                                <Link
                                    to="/research/sensor-paradox"
                                    className="group"
                                >
                                    <span className="text-xs text-gray-400">Feb. 2026</span>
                                    <h2 className="text-base md:text-lg font-medium text-black group-hover:text-gray-500 transition-colors mt-1">
                                        2+2=3: More Sensors Produce Less Information in Robotics Data Pipelines
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        [redacted]
                                    </p>
                                </Link>
                            </div>

                            {/* Original paper - Jan 2025 */}
                            <div className="flex items-start gap-4 relative">
                                <div className="w-2 h-2 rounded-full bg-black mt-1.5 relative z-10"></div>
                                <Link
                                    to="/research/industrial-autonomy"
                                    className="group"
                                >
                                    <span className="text-xs text-gray-400">Jan. 2025</span>
                                    <h2 className="text-base md:text-lg font-medium text-black group-hover:text-gray-500 transition-colors mt-1">
                                        Mortar: Bringing Messy Sites to Autonomy via Continuous Visual Data
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Litepaper v1.0 — We introduce Mortar, an industrial intelligence platform designed to enable AI to operate reliably in real-world worksites by continuously building a living site model.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default Research;
