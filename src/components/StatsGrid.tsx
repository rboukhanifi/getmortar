import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "25–35%", label: "faster cycle times from day one.", size: "large" },
    { value: "5%", label: "average project cost savings in months 1–6.", size: "medium" },
    { value: "20–40%", label: "Reduce on-site rework.", size: "medium" },
    { value: "60%", label: "Cut weekly progress-report time.", size: "small" },
    { value: "90%", label: "Detect schedule-critical clashes before they hit site.", size: "large" },
    { value: "30%", label: "Improve permit/compliance sign-off speed.", size: "medium" },
    { value: "10–25%", label: "Reduce site safety incidents in year 1.", size: "medium" },
    { value: "40%", label: "Automate routine QA checks.", size: "small" },
    { value: "50%", label: "fewer manual data entry errors across the field office.", size: "medium" },
    { value: "+10–20%", label: "Increase first-time inspection pass rate.", size: "medium" },
    { value: "100%", label: "Generate auditable decision trails for change approvals.", size: "wide" },
    { value: "3–6 months", label: "Realize ROI for projects > $5M.", size: "medium" },
    { value: "25%", label: "Reduce administrative headcount hours.", size: "small" },
    { value: ">99%", label: "Improve client invoice accuracy.", size: "small" },
];

const StatsGrid: React.FC = () => {
    return (
        <section className="bg-[#050505] text-white py-16 md:py-32 px-4 md:px-6 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 md:mb-20 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                        Used by World's largest contractors.
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">Proven results across megaprojects globally.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)] md:auto-rows-[minmax(180px,auto)]">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`
                        relative group overflow-hidden rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 active:scale-[0.98] md:hover:scale-[1.02] p-5 md:p-8 flex flex-col justify-end
                        ${stat.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}
                        ${stat.size === 'wide' ? 'sm:col-span-2' : ''}
                        ${stat.size === 'medium' ? 'sm:col-span-1 sm:row-span-1' : ''}
                        ${stat.size === 'small' ? 'sm:col-span-1' : ''}
                    `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium relative z-10">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
