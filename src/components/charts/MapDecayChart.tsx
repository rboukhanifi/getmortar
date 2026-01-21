import { motion } from 'framer-motion';

const MapDecayChart = () => {
    // Data points: time (hours) vs map correctness (0-1)
    const data = [
        { x: 0, y: 0.95 },
        { x: 12, y: 0.86 },
        { x: 24, y: 0.78 },
        { x: 36, y: 0.69 },
        { x: 48, y: 0.60 },
        { x: 60, y: 0.53 },
        { x: 72, y: 0.48 },
    ];

    // Chart dimensions
    const width = 600;
    const height = 320;
    const padding = { top: 40, right: 40, bottom: 60, left: 70 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Scale functions
    const xScale = (val: number) => (val / 72) * chartWidth + padding.left;
    const yScale = (val: number) => chartHeight - (val * chartHeight) + padding.top;

    // Generate path
    const pathD = data.map((point, i) => {
        const x = xScale(point.x);
        const y = yScale(point.y);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    // Generate area path (for gradient fill)
    const areaD = `${pathD} L ${xScale(72)} ${yScale(0)} L ${xScale(0)} ${yScale(0)} Z`;

    return (
        <div className="w-full">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#666" />
                    </linearGradient>
                </defs>

                {/* Grid lines */}
                {[0.25, 0.5, 0.75, 1].map((val) => (
                    <g key={val}>
                        <line
                            x1={padding.left}
                            y1={yScale(val)}
                            x2={width - padding.right}
                            y2={yScale(val)}
                            stroke="#e5e5e5"
                            strokeWidth="1"
                        />
                        <text
                            x={padding.left - 12}
                            y={yScale(val)}
                            textAnchor="end"
                            dominantBaseline="middle"
                            className="text-[11px] fill-gray-400"
                            fontFamily="Inter, sans-serif"
                        >
                            {val.toFixed(2)}
                        </text>
                    </g>
                ))}

                {/* X-axis labels */}
                {[0, 12, 24, 36, 48, 60, 72].map((hour) => (
                    <g key={hour}>
                        <line
                            x1={xScale(hour)}
                            y1={yScale(0)}
                            x2={xScale(hour)}
                            y2={yScale(0) + 6}
                            stroke="#d1d5db"
                            strokeWidth="1"
                        />
                        <text
                            x={xScale(hour)}
                            y={yScale(0) + 22}
                            textAnchor="middle"
                            className="text-[11px] fill-gray-400"
                            fontFamily="Inter, sans-serif"
                        >
                            {hour}h
                        </text>
                    </g>
                ))}

                {/* Axis labels */}
                <text
                    x={width / 2}
                    y={height - 12}
                    textAnchor="middle"
                    className="text-[12px] fill-gray-500"
                    fontFamily="Inter, sans-serif"
                >
                    Time since last mapping (hours)
                </text>
                <text
                    x={18}
                    y={height / 2}
                    textAnchor="middle"
                    transform={`rotate(-90, 18, ${height / 2})`}
                    className="text-[12px] fill-gray-500"
                    fontFamily="Inter, sans-serif"
                >
                    Map correctness
                </text>

                {/* Area fill */}
                <motion.path
                    d={areaD}
                    fill="url(#areaGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Line */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Data points */}
                {data.map((point, i) => (
                    <motion.circle
                        key={i}
                        cx={xScale(point.x)}
                        cy={yScale(point.y)}
                        r="4"
                        fill="#fff"
                        stroke="#000"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    />
                ))}

                {/* Half-life annotation */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <line
                        x1={xScale(24)}
                        y1={yScale(0.78)}
                        x2={xScale(72)}
                        y2={yScale(0.78)}
                        stroke="#000"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.3"
                    />
                    <rect
                        x={xScale(36) - 2}
                        y={padding.top + 8}
                        width="180"
                        height="36"
                        fill="#f9fafb"
                        stroke="#e5e5e5"
                        rx="4"
                    />
                    <text
                        x={xScale(36) + 8}
                        y={padding.top + 22}
                        className="text-[10px] fill-gray-500"
                        fontFamily="Inter, sans-serif"
                    >
                        Static map validity half-life
                    </text>
                    <text
                        x={xScale(36) + 8}
                        y={padding.top + 36}
                        className="text-[11px] fill-black font-medium"
                        fontFamily="Inter, sans-serif"
                    >
                        ~24–72 hours
                    </text>
                </motion.g>
            </svg>
        </div>
    );
};

export default MapDecayChart;
