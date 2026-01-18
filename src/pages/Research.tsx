import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                        Research
                    </h1>

                    <p className="text-lg text-gray-600 mb-16 leading-relaxed">
                        Our work focuses on advancing AI systems for the built environment.
                        We publish our findings to contribute to the broader scientific community.
                    </p>

                    <div className="space-y-16">
                        <article className="border-t border-gray-200 pt-8">
                            <time className="text-sm text-gray-400">2025</time>
                            <h2 className="text-2xl font-medium mt-2 mb-3">
                                Automated Clash Detection in Construction Documents
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                A novel approach to identifying spatial conflicts in building information models
                                using transformer-based architectures.
                            </p>
                        </article>

                        <article className="border-t border-gray-200 pt-8">
                            <time className="text-sm text-gray-400">2024</time>
                            <h2 className="text-2xl font-medium mt-2 mb-3">
                                Predictive Scheduling for Large-Scale Infrastructure
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Machine learning methods for forecasting project timelines and resource allocation
                                in complex construction environments.
                            </p>
                        </article>

                        <article className="border-t border-gray-200 pt-8">
                            <time className="text-sm text-gray-400">2024</time>
                            <h2 className="text-2xl font-medium mt-2 mb-3">
                                Document Understanding in Construction Workflows
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Extracting structured information from unstructured construction documents
                                using multimodal language models.
                            </p>
                        </article>
                    </div>
                </div>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default Research;
