import { motion } from 'framer-motion';

const DataflowDiagram = () => {
    const stages = [
        {
            title: 'AEGIS',
            subtitle: 'Edge, per worker / site',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
            items: [
                '1080p video stream + timestamps (+ optional IMU/GNSS)',
                'Segmentation intervals (1-5 min)',
                'Quality/health signals (blur, low-light, occlusion)',
                'State machine: IDLE / ACTIVE / UNCERTAIN',
                'Event-triggered keyframes + ROI crops',
                'Change cues + logs (why sampled)',
            ],
            accent: 'from-gray-700 to-gray-600',
        },
        {
            title: 'Ingestion + Indexing',
            subtitle: null,
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
            items: [
                'Time/device/site indexing',
                'Integrity checks + de-dup (hashes)',
                'Alignment inputs (anchors, device poses)',
            ],
            accent: 'from-gray-600 to-gray-500',
        },
        {
            title: 'Zhora Structuring',
            subtitle: null,
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
            items: [
                'Alignment into a site frame (best-effort)',
                'Change detection (delta events)',
                'Perception: zones/objects/agents',
                'Risk + uncertainty estimation',
                'Constraint extraction + TTL',
            ],
            accent: 'from-gray-500 to-gray-400',
        },
        {
            title: 'Living Site Model Store',
            subtitle: null,
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
            ),
            items: [
                'Geometry: traversability / occupancy / routes (time-indexed)',
                'Semantics: zones, objects, classes (with confidence)',
                'Risk: hazard fields + uncertainty fields',
                'Constraints: access rules + boundaries (time-scoped)',
            ],
            accent: 'from-gray-400 to-gray-300',
        },
        {
            title: 'Outputs / Interfaces',
            subtitle: null,
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
            ),
            items: [
                'CurrentState(area, t_now)',
                'Changes(since_t)',
                'Risk/constraint maps + change logs',
                'Dashboards + exports for downstream autonomy',
            ],
            accent: 'from-gray-600 to-gray-500',
        },
    ];

    return (
        <div className="w-full">
            {/* Background pattern */}
            <div className="relative">
                {/* Vertical connection line */}
                <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 hidden md:block" />

                <div className="space-y-3">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="relative"
                        >
                            {/* Connector dots */}
                            {i > 0 && (
                                <div className="flex justify-center py-1.5">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                                        className="flex flex-col items-center gap-1"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    </motion.div>
                                </div>
                            )}

                            {/* Stage box */}
                            <div className={`relative overflow-hidden rounded-xl border ${
                                i === 0
                                    ? 'bg-gradient-to-br from-gray-700 to-gray-600 text-white border-gray-600'
                                    : i === stages.length - 1
                                        ? 'bg-gradient-to-br from-gray-600 to-gray-500 text-white border-gray-500'
                                        : 'bg-white border-gray-200 hover:border-gray-300 transition-colors'
                            }`}>
                                {/* Subtle grid pattern for dark boxes */}
                                {(i === 0 || i === stages.length - 1) && (
                                    <div className="absolute inset-0 opacity-5">
                                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`grid-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                                        </svg>
                                    </div>
                                )}

                                <div className="relative p-5">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                                            i === 0 || i === stages.length - 1
                                                ? 'bg-white/10'
                                                : 'bg-gray-100'
                                        }`}>
                                            <span className={i === 0 || i === stages.length - 1 ? 'text-white' : 'text-gray-600'}>
                                                {stage.icon}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-baseline gap-2 mb-2">
                                                <h4 className={`font-semibold ${i === 0 || i === stages.length - 1 ? 'text-white' : 'text-gray-900'}`}>
                                                    {stage.title}
                                                </h4>
                                                {stage.subtitle && (
                                                    <span className={`text-xs ${i === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                                                        {stage.subtitle}
                                                    </span>
                                                )}
                                            </div>
                                            <ul className={`text-sm space-y-1.5 ${i === 0 || i === stages.length - 1 ? 'text-gray-200' : 'text-gray-600'}`}>
                                                {stage.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-2">
                                                        <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                                                            i === 0 || i === stages.length - 1 ? 'bg-gray-400' : 'bg-gray-400'
                                                        }`} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Stage number */}
                                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                            i === 0 || i === stages.length - 1
                                                ? 'bg-white/20 text-white'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            {i + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataflowDiagram;
