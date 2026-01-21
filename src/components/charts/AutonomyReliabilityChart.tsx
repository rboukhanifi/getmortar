import { motion } from 'framer-motion';

const AutonomyReliabilityChart = () => {
    // Data points: site changes/day vs autonomy success rate (0-1)
    const data = [
        { x: 0, y: 0.95 },
        { x: 5, y: 0.88 },
        { x: 10, y: 0.70 },
        { x: 15, y: 0.30 },
        { x: 20, y: 0.10 },
        { x: 30, y: 0.06 },
        { x: 40, y: 0.05 },
    ];

    // Chart dimensions
    const width = 600;
    const height = 320;
    const padding = { top: 40, right: 40, bottom: 60, left: 70 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Scale functions
    const xScale = (val: number) => (val / 40) * chartWidth + padding.left;
    const yScale = (val: number) => chartHeight - (val * chartHeight) + padding.top;

    // Generate smooth curve path using cubic bezier
    const generateSmoothPath = () => {
        if (data.length < 2) return '';

        let path = `M ${xScale(data[0].x)} ${yScale(data[0].y)}`;

        for (let i = 1; i < data.length; i++) {
            const prev = data[i - 1];
            const curr = data[i];
            const cpx = (xScale(prev.x) + xScale(curr.x)) / 2;
            path += ` C ${cpx} ${yScale(prev.y)}, ${cpx} ${yScale(curr.y)}, ${xScale(curr.x)} ${yScale(curr.y)}`;
        }

        return path;
    };

    const pathD = generateSmoothPath();

    // Generate area path
    const areaD = `${pathD} L ${xScale(40)} ${yScale(0)} L ${xScale(0)} ${yScale(0)} Z`;

    // Threshold zone (around x=10)
    const thresholdX = 10;

    return (
        <div className="w-full">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <defs>
                    <linearGradient id="areaGradientB" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="25%" stopColor="#000" />
                        <stop offset="50%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#991b1b" />
                    </linearGradient>
                </defs>

                {/* Danger zone background */}
                <motion.rect
                    x={xScale(thresholdX)}
                    y={padding.top}
                    width={chartWidth - (xScale(thresholdX) - padding.left)}
                    height={chartHeight}
                    fill="#fef2f2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />

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
                {[0, 10, 20, 30, 40].map((changes) => (
                    <g key={changes}>
                        <line
                            x1={xScale(changes)}
                            y1={yScale(0)}
                            x2={xScale(changes)}
                            y2={yScale(0) + 6}
                            stroke="#d1d5db"
                            strokeWidth="1"
                        />
                        <text
                            x={xScale(changes)}
                            y={yScale(0) + 22}
                            textAnchor="middle"
                            className="text-[11px] fill-gray-400"
                            fontFamily="Inter, sans-serif"
                        >
                            {changes}
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
                    Site change events / day
                </text>
                <text
                    x={18}
                    y={height / 2}
                    textAnchor="middle"
                    transform={`rotate(-90, 18, ${height / 2})`}
                    className="text-[12px] fill-gray-500"
                    fontFamily="Inter, sans-serif"
                >
                    Autonomy success rate
                </text>

                {/* Threshold line */}
                <motion.line
                    x1={xScale(thresholdX)}
                    y1={padding.top}
                    x2={xScale(thresholdX)}
                    y2={yScale(0)}
                    stroke="#dc2626"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                />

                {/* Area fill */}
                <motion.path
                    d={areaD}
                    fill="url(#areaGradientB)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Line */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#lineGradientB)"
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
                        stroke={point.x >= thresholdX ? "#dc2626" : "#000"}
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    />
                ))}

                {/* Annotation box */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <rect
                        x={xScale(20)}
                        y={padding.top + 8}
                        width="170"
                        height="48"
                        fill="#fff"
                        stroke="#fecaca"
                        rx="4"
                    />
                    <text
                        x={xScale(20) + 10}
                        y={padding.top + 26}
                        className="text-[10px] fill-gray-500"
                        fontFamily="Inter, sans-serif"
                    >
                        Steep drop beyond ~10 changes/day
                    </text>
                    <text
                        x={xScale(20) + 10}
                        y={padding.top + 42}
                        className="text-[10px] fill-red-600"
                        fontFamily="Inter, sans-serif"
                    >
                        Change rate drives failure
                    </text>
                </motion.g>
            </svg>
        </div>
    );
};

export default AutonomyReliabilityChart;
