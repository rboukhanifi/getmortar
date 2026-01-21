import { motion } from 'framer-motion';

const DataflowDiagram = () => {
    const stages = [
        {
            title: 'AEGIS',
            subtitle: 'Edge, per worker / site',
            items: [
                '1080p video stream + timestamps (+ optional IMU/GNSS)',
                'Segmentation intervals (1-5 min)',
                'Quality/health signals (blur, low-light, occlusion)',
                'State machine: IDLE / ACTIVE / UNCERTAIN',
                'Event-triggered keyframes + ROI crops',
                'Change cues + logs (why sampled)',
            ],
        },
        {
            title: 'Ingestion + Indexing',
            subtitle: null,
            items: [
                'Time/device/site indexing',
                'Integrity checks + de-dup (hashes)',
                'Alignment inputs (anchors, device poses)',
            ],
        },
        {
            title: 'Zhora Structuring',
            subtitle: null,
            items: [
                'Alignment into a site frame (best-effort)',
                'Change detection (delta events)',
                'Perception: zones/objects/agents',
                'Risk + uncertainty estimation',
                'Constraint extraction + TTL',
            ],
        },
        {
            title: 'Living Site Model Store',
            subtitle: null,
            items: [
                'Geometry: traversability / occupancy / routes (time-indexed)',
                'Semantics: zones, objects, classes (with confidence)',
                'Risk: hazard fields + uncertainty fields',
                'Constraints: access rules + boundaries (time-scoped)',
            ],
        },
        {
            title: 'Outputs / Interfaces',
            subtitle: null,
            items: [
                'CurrentState(area, t_now)',
                'Changes(since_t)',
                'Risk/constraint maps + change logs',
                'Dashboards + exports for downstream autonomy',
            ],
        },
    ];

    return (
        <div className="w-full">
            <div className="space-y-4">
                {stages.map((stage, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        {/* Connector arrow */}
                        {i > 0 && (
                            <div className="flex justify-center py-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        )}

                        {/* Stage box */}
                        <div className={`p-5 rounded-lg border ${i === 0 ? 'bg-black text-white border-black' : i === stages.length - 1 ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-50 border-gray-200'}`}>
                            <div className="flex items-baseline gap-2 mb-3">
                                <h4 className={`font-semibold ${i === 0 || i === stages.length - 1 ? 'text-white' : 'text-black'}`}>
                                    {stage.title}
                                </h4>
                                {stage.subtitle && (
                                    <span className={`text-xs ${i === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {stage.subtitle}
                                    </span>
                                )}
                            </div>
                            <ul className={`text-sm space-y-1 ${i === 0 || i === stages.length - 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                                {stage.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DataflowDiagram;
