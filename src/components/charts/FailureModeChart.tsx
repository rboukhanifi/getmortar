import { motion } from 'framer-motion';

const FailureModeChart = () => {
    const data = [
        { label: 'Occlusion / clutter', value: 28, color: '#18181b' },
        { label: 'Dynamic agents', value: 24, color: '#3f3f46' },
        { label: 'Stale map / semantics', value: 22, color: '#71717a' },
        { label: 'Unknown objects', value: 16, color: '#a1a1aa' },
        { label: 'Lighting / glare / dust', value: 10, color: '#d4d4d8' },
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const centerX = 150;
    const centerY = 150;
    const radius = 120;
    const innerRadius = 60;

    // Calculate pie slices
    let currentAngle = -Math.PI / 2; // Start from top

    const slices = data.map((item) => {
        const sliceAngle = (item.value / total) * 2 * Math.PI;
        const startAngle = currentAngle;
        const endAngle = currentAngle + sliceAngle;
        const midAngle = startAngle + sliceAngle / 2;

        // Arc path
        const x1 = centerX + radius * Math.cos(startAngle);
        const y1 = centerY + radius * Math.sin(startAngle);
        const x2 = centerX + radius * Math.cos(endAngle);
        const y2 = centerY + radius * Math.sin(endAngle);

        const ix1 = centerX + innerRadius * Math.cos(startAngle);
        const iy1 = centerY + innerRadius * Math.sin(startAngle);
        const ix2 = centerX + innerRadius * Math.cos(endAngle);
        const iy2 = centerY + innerRadius * Math.sin(endAngle);

        const largeArc = sliceAngle > Math.PI ? 1 : 0;

        const path = `
            M ${ix1} ${iy1}
            L ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
            L ${ix2} ${iy2}
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1}
            Z
        `;

        // Label position
        const labelRadius = radius + 30;
        const labelX = centerX + labelRadius * Math.cos(midAngle);
        const labelY = centerY + labelRadius * Math.sin(midAngle);

        currentAngle = endAngle;

        return {
            ...item,
            path,
            labelX,
            labelY,
            midAngle,
        };
    });

    return (
        <div className="w-full flex flex-col lg:flex-row items-center gap-8">
            {/* Pie Chart */}
            <div className="flex-shrink-0">
                <svg viewBox="0 0 300 300" className="w-64 h-64 md:w-72 md:h-72">
                    {slices.map((slice, i) => (
                        <motion.path
                            key={i}
                            d={slice.path}
                            fill={slice.color}
                            stroke="#fff"
                            strokeWidth="2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                            style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                        />
                    ))}
                    {/* Center circle */}
                    <circle
                        cx={centerX}
                        cy={centerY}
                        r={innerRadius - 2}
                        fill="#fff"
                    />
                    <text
                        x={centerX}
                        y={centerY - 6}
                        textAnchor="middle"
                        className="text-[11px] fill-gray-400"
                        fontFamily="Inter, sans-serif"
                    >
                        Failure
                    </text>
                    <text
                        x={centerX}
                        y={centerY + 10}
                        textAnchor="middle"
                        className="text-[11px] fill-gray-400"
                        fontFamily="Inter, sans-serif"
                    >
                        Modes
                    </text>
                </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3">
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    >
                        <div
                            className="w-4 h-4 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>
                            <span className="text-sm font-semibold text-black">{item.value}%</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FailureModeChart;
