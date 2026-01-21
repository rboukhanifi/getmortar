import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';
import MapDecayChart from '../components/charts/MapDecayChart';
import AutonomyReliabilityChart from '../components/charts/AutonomyReliabilityChart';
import FailureModeChart from '../components/charts/FailureModeChart';

const IndustrialAutonomy = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 }
    };

    return (
        <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
            <Navbar />
            <CornerFrames color="light" />

            <main className="pt-32 pb-32 px-6 md:px-12 lg:px-24">
                <article className="max-w-3xl mx-auto">
                    {/* ═══════════════════════════════════════════════════════════
                        TITLE PAGE
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mb-20 pb-16 border-b border-gray-100"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            Mortar
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                            Bringing messy sites to autonomy via continuous visual data.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-400">
                            <span className="font-medium text-gray-500">Litepaper v1.0</span>
                            <span className="hidden sm:block">·</span>
                            <span>January 2025</span>
                            <span className="hidden sm:block">·</span>
                            <span>Mortar Vault, Inc.</span>
                        </div>
                    </motion.header>

                    {/* ═══════════════════════════════════════════════════════════
                        SUMMARY
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Summary
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                We introduce <strong className="font-semibold text-black">Mortar</strong>, an industrial intelligence platform designed to enable AI to operate reliably in real-world worksites by continuously building a <strong className="font-semibold text-black">living site model</strong> from continuous data streams. Mortar captures high-frequency on-site reality, <strong className="font-semibold text-black">visual data and sensor signals</strong>, and converts it into structured, actionable understanding: <strong className="font-semibold text-black">geometry, semantics, risk, and compliance constraints</strong>.
                            </p>
                            <p>
                                Traditional autonomy pipelines assume environments are static or perfectly mapped upfront; Mortar learns directly from site conditions as they change, so autonomy systems can stay current while work continues.
                            </p>
                            <p>
                                Mortar is built as a data-driven stack composed of <strong className="font-semibold text-black">(1) AEGIS</strong> (plug-and-play visual data capture hardware) and <strong className="font-semibold text-black">(2) Zhora</strong> (data platform). Together, they create a scalable pipeline for collecting, organizing, and learning from messy site data, forming the missing infrastructure required for safe, reliable, and scalable industrial autonomy.
                            </p>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        INTRODUCTION
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Introduction
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                An industrial environment is any real-world worksite where physical operations happen continuously. Humans, machines, and materials interact to produce, move, assemble, inspect, or maintain things. Examples include construction sites, warehouses, factories, ports, mines, refineries, and logistics yards.
                            </p>
                            <p>
                                Industrial sites are inherently <strong className="font-semibold text-black">non-stationary systems</strong>: the "state of the world" changes as a direct consequence of work being performed. They change because (1) the layout is a process variable (zones are created, removed, re-routed), (2) objects are not fixed (materials are staged temporarily, equipment is repositioned), and (3) people and vehicles are always moving (shared space, unpredictable trajectories). Unlike a lab or a mapped indoor space, an industrial site is not "a place", it's an active transformation happening in real time.
                            </p>
                            <p>
                                These conditions create a mismatch with traditional autonomy pipelines, which rely on static maps, controlled sensing, and one-time calibration. As a result, autonomy becomes fragile: performance degrades as the environment drifts, and scaling across sites requires manual re-integration.
                            </p>
                            <p>
                                Robotics hardware is improving quickly. Sensors are cheaper, compute is more available, and robots are becoming more capable mechanically. But without a persistent intelligence layer that can continuously track the state of the world, hardware alone does not translate into scalable autonomy.
                            </p>
                            <p className="mt-8">
                                To make autonomy real we need:
                            </p>
                            <ul className="mt-4 space-y-3 pl-5 border-l-2 border-gray-200">
                                <li className="text-gray-700">
                                    <span className="font-semibold text-black">(1) Data</span>, provided by continuous visual streams that reflect the site as it actually is
                                </li>
                                <li className="text-gray-700">
                                    <span className="font-semibold text-black">(2) A living site model</span>, structured understanding updated over time (geometry, semantics, risk, constraints)
                                </li>
                                <li className="text-gray-700">
                                    <span className="font-semibold text-black">(3) A control layer</span>, policies that use that model to act safely and reliably under uncertainty
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        WHY INDUSTRIAL SITES ARE A DATA PROBLEM
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Why Industrial Sites Are a Data Problem
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Industrial autonomy fails less because robots "can't see," and more because the world they operate in does not stay consistent. The main failure mode is <strong className="font-semibold text-black">misalignment between the robot's internal state and the real site state</strong>. On a live site, correctness is not a one-time property. It depends on freshness.
                            </p>

                            {/* ─────────────── Subsection 1 ─────────────── */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-12 mb-4">
                                1) Non-stationarity: static maps decay
                            </h3>
                            <p>
                                Static maps decay because the environment changes as work progresses. When the site state changes, the map becomes a historical snapshot. This breaks planning, traversability, and safety constraints at the same time.
                            </p>
                            <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                                <h4 className="text-sm font-semibold text-black mb-3">Observed site change rate</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    A typical industrial worksite experiences <strong className="font-semibold text-black">20–100 meaningful state changes/day</strong>. We define a "state change" as one of:
                                </p>
                                <ul className="mt-3 text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• a moved material stack</li>
                                    <li>• a new obstacle appears in a previously clear route</li>
                                    <li>• a route becomes blocked (temporary barrier, staging, equipment parked)</li>
                                    <li>• a zone is created / removed / re-routed (access boundary, hazard area, work zone)</li>
                                </ul>
                            </div>
                            <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                                <h4 className="text-sm font-semibold text-black mb-3">Map validity half-life</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Static map validity half-life is <strong className="font-semibold text-black">~24–72 hours</strong>, depending on activity level. After that window, a static representation starts producing wrong decisions: it routes through blocked paths, misses temporary hazards, and assumes wrong free space.
                                </p>
                            </div>
                        </div>

                        {/* Figure A */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                                <MapDecayChart />
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500 text-center">
                                <span className="font-medium text-gray-700">Figure A:</span> Map correctness decays as the site changes. A map that is accurate at deployment becomes unreliable within days on an active site.
                            </figcaption>
                        </motion.figure>

                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            {/* ─────────────── Subsection 2 ─────────────── */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-12 mb-4">
                                2) Distribution shift dominates
                            </h3>
                            <p>
                                Industrial sites are dominated by distribution shift in sensing and scene content:
                            </p>
                            <ul className="mt-3 space-y-1 ml-4 text-gray-600">
                                <li>• lighting changes, glare, dust</li>
                                <li>• clutter and occlusion</li>
                                <li>• new objects and new routes</li>
                                <li>• dynamic agents (humans, forklifts, trucks)</li>
                            </ul>
                            <p className="mt-4">
                                This matters because perception does not fail once, it fails repeatedly. A system trained for clean conditions gets pushed out-of-distribution constantly.
                            </p>
                            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Edge-case frequency</p>
                                    <p className="text-2xl font-semibold text-black">1 every 2–10 min</p>
                                    <p className="text-sm text-gray-500 mt-1">of robot runtime in messy sites</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Occlusion rate</p>
                                    <p className="text-2xl font-semibold text-black">30–60%</p>
                                    <p className="text-sm text-gray-500 mt-1">of frames partially occluded</p>
                                </div>
                            </div>
                        </div>

                        {/* Figure B */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                                <AutonomyReliabilityChart />
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500 text-center">
                                <span className="font-medium text-gray-700">Figure B:</span> As change events increase, autonomy success drops sharply. Reliability collapses once change rate crosses a threshold.
                            </figcaption>
                        </motion.figure>

                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            {/* ─────────────── Subsection 3 ─────────────── */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-12 mb-4">
                                3) Ground truth is missing
                            </h3>
                            <p>
                                Ground truth on industrial sites is incomplete or delayed:
                            </p>
                            <ul className="mt-3 space-y-1 ml-4 text-gray-600">
                                <li>• plans and drawings trail reality</li>
                                <li>• semantic labels are not maintained</li>
                                <li>• constraints are implicit and temporary (hazard zones, restricted access, right-of-way patterns)</li>
                            </ul>
                            <p className="mt-4">
                                So the autonomy stack cannot rely on external truth. It needs to build and maintain truth using continuous observation.
                            </p>
                            <p>
                                This is not a "data scarcity" issue. It is a <strong className="font-semibold text-black">data freshness and structure</strong> issue: the right data exists on site, but it is not captured, organized, and turned into usable constraints.
                            </p>

                            {/* ─────────────── Subsection 4 ─────────────── */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-12 mb-4">
                                4) Most failures are staleness, not impossibility
                            </h3>
                            <p>
                                Most failures are not "perception is impossible," but "perception is stale / incomplete."
                            </p>
                            <div className="my-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
                                <h4 className="text-sm font-semibold text-black mb-3">Examples of stale failure:</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• the robot routes through a path that was clear yesterday but is blocked now</li>
                                    <li>• the robot enters a zone that is restricted today</li>
                                    <li>• the robot treats an object as static when it is being moved</li>
                                    <li>• the robot assumes free space where clutter was staged</li>
                                </ul>
                            </div>
                            <p>
                                This is why better one-time mapping does not solve the problem. The site is changing, so the model must change too.
                            </p>

                            {/* ─────────────── Subsection 5 ─────────────── */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-12 mb-4">
                                5) Scaling costs make it a data problem
                            </h3>
                            <p>
                                When the world drifts, scaling forces re-integration:
                            </p>
                            <div className="my-6 p-6 bg-black text-white rounded-lg">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Manual re-integration per site</p>
                                <p className="text-3xl font-semibold">2–6 engineer-days</p>
                            </div>
                            <p>
                                This cost compounds across deployments. It becomes the bottleneck unless the system can keep itself aligned with reality through data.
                            </p>
                        </div>

                        {/* Figure C */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                                <FailureModeChart />
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500 text-center">
                                <span className="font-medium text-gray-700">Figure C:</span> Failure modes in live sites are dominated by clutter, dynamic agents, and stale world state.
                            </figcaption>
                        </motion.figure>

                        {/* Table 1 */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-black">
                                            <th className="text-left py-4 pr-4 font-semibold text-black">Metric</th>
                                            <th className="text-right py-4 px-4 font-semibold text-black">Quiet Site</th>
                                            <th className="text-right py-4 pl-4 font-semibold text-black">Active Site</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 pr-4">Layout changes/day</td>
                                            <td className="text-right py-4 px-4 font-medium">5</td>
                                            <td className="text-right py-4 pl-4 font-medium text-black">40</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 pr-4">Temporary obstacles/hour</td>
                                            <td className="text-right py-4 px-4 font-medium">1</td>
                                            <td className="text-right py-4 pl-4 font-medium text-black">12</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 pr-4">Human traffic density</td>
                                            <td className="text-right py-4 px-4 font-medium">Low</td>
                                            <td className="text-right py-4 pl-4 font-medium text-black">High</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 pr-4">Map validity (days)</td>
                                            <td className="text-right py-4 px-4 font-medium">3–7</td>
                                            <td className="text-right py-4 pl-4 font-medium text-black">&lt;1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500 text-center">
                                <span className="font-medium text-gray-700">Table 1:</span> Activity level drives map validity and obstacle rate. Active sites invalidate static representations quickly.
                            </figcaption>
                        </motion.figure>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        THE APPROACH
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            The Approach
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Mortar treats industrial autonomy as a continuous data loop: if the site changes continuously, the system must observe continuously, update continuously, and learn continuously.
                            </p>
                            <p>
                                Mortar runs a simple closed loop:
                            </p>
                            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { num: '1', title: 'Capture', desc: 'site reality continuously through visual data streams' },
                                    { num: '2', title: 'Structure', desc: 'the streams into usable site understanding' },
                                    { num: '3', title: 'Update', desc: 'a living site model as the environment changes' },
                                    { num: '4', title: 'Use', desc: 'the model to drive safer behavior under uncertainty' },
                                ].map((step) => (
                                    <div key={step.num} className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold mb-3">
                                            {step.num}
                                        </div>
                                        <h4 className="font-semibold text-black mb-1">{step.title}</h4>
                                        <p className="text-sm text-gray-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p>
                                This reframes the system from "deploy with a static world" to "operate with a continuously refreshed world."
                            </p>
                            <p className="mt-6">
                                Mortar supports a simple maturity ladder:
                            </p>
                            <div className="my-6 space-y-3">
                                {[
                                    { stage: 'Assist', desc: 'produce site intelligence and safety/compliance outputs' },
                                    { stage: 'Supervise', desc: 'support human-in-the-loop autonomy with current constraints and risk' },
                                    { stage: 'Automate', desc: 'enable policies to execute with up-to-date world state' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 border-l-4 border-black bg-gray-50">
                                        <span className="font-semibold text-black min-w-[80px]">{item.stage}</span>
                                        <span className="text-gray-600">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        MECHANISM
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Mechanism
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Mortar is built from two coupled components: one to standardize capture, one to standardize structure.
                            </p>

                            {/* AEGIS */}
                            <div className="my-10 p-8 bg-gray-50 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-black mb-4">(1) AEGIS: plug-and-play visual data capture hardware</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    AEGIS is deployed on-site to capture continuous visual streams and sensor signals. Its job is not "logging." Its job is to keep the system's view of reality fresh and consistent across sites.
                                </p>
                                <div className="text-sm">
                                    <p className="text-gray-500 mb-2">AEGIS provides:</p>
                                    <ul className="space-y-1 text-gray-600 ml-4">
                                        <li>• continuous visual streams reflecting real site conditions</li>
                                        <li>• consistent data quality across deployments</li>
                                        <li>• a substrate for change detection and model refresh</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Zhora */}
                            <div className="my-10 p-8 bg-gray-50 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-black mb-4">(2) Zhora: data platform</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Zhora ingests the streams and converts them into structured site intelligence. It maintains a living site model with four layers:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    {[
                                        { name: 'Geometry', desc: 'where things are; free space vs occupied; routes' },
                                        { name: 'Semantics', desc: 'what things are; zones, objects, classes' },
                                        { name: 'Risk', desc: 'hazards, uncertainty, dynamic areas' },
                                        { name: 'Constraints', desc: 'access boundaries, compliance zones, operational rules' },
                                    ].map((layer) => (
                                        <div key={layer.name} className="p-4 bg-white rounded-lg border border-gray-200">
                                            <h4 className="font-semibold text-black text-sm mb-1">{layer.name}</h4>
                                            <p className="text-xs text-gray-500">{layer.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-500 mb-2">Zhora also provides:</p>
                                    <ul className="space-y-1 text-gray-600 ml-4">
                                        <li>• storage and organization of site data over time</li>
                                        <li>• structured outputs for reporting and review</li>
                                        <li>• tools to query and compare site state across time</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                What the living site model outputs
                            </h3>
                            <p>
                                Mortar outputs are meant to be consumed by both humans and autonomy stacks:
                            </p>
                            <ul className="mt-4 space-y-2 ml-4 text-gray-600">
                                <li>• updated navigation-relevant representations</li>
                                <li>• risk maps and constraint maps that enforce safety/compliance</li>
                                <li>• change logs that explain what drifted and when</li>
                                <li>• interfaces for downstream systems to request the current site state</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        RATIONALE
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Rationale
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Hardware improvements increase sensing and actuation capability, but they do not solve the core bottleneck: <strong className="font-semibold text-black">persistent world state</strong> under continuous change.
                            </p>
                            <p>
                                Industrial autonomy requires a layer that can continuously answer:
                            </p>
                            <ul className="my-6 space-y-2 ml-4 text-gray-600 italic">
                                <li>• what is the site like right now?</li>
                                <li>• what changed since the last time we looked?</li>
                                <li>• what is safe, allowed, and stable right now?</li>
                                <li>• where is uncertainty high, and how should policy react?</li>
                            </ul>
                            <p>
                                Mortar is built on three premises:
                            </p>
                            <div className="my-8 space-y-4">
                                {[
                                    { num: '1', text: 'Sites drift continuously, so static maps decay.' },
                                    { num: '2', text: 'Manual world maintenance does not scale across deployments.' },
                                    { num: '3', text: 'Continuous data compounds: more runtime improves the model, reduces uncertainty, and reduces interventions.' },
                                ].map((premise) => (
                                    <div key={premise.num} className="flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                            {premise.num}
                                        </span>
                                        <p className="text-gray-700 pt-1">{premise.text}</p>
                                    </div>
                                ))}
                            </div>
                            <p>
                                This also explains why Mortar generalizes across industries. Construction, logistics, manufacturing, mining, and ports differ in details, but share the same autonomy failure modes: uncertainty, change, occlusion, novelty, and missing ground truth.
                            </p>
                            <p className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-black">
                                <strong className="font-semibold text-black">Mortar becomes the missing infrastructure layer between robots and the physical world:</strong> a continuously updated living site model that downstream autonomy can depend on.
                            </p>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        APPENDIX
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mb-20 pt-12 border-t border-gray-200"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Appendix A: Metrics and Definitions
                        </h2>
                        <div className="space-y-8 text-sm text-gray-700">
                            <div>
                                <h4 className="font-semibold text-black mb-2">State change event (per day)</h4>
                                <p className="text-gray-600 mb-2">Count an event when one of the following happens:</p>
                                <ul className="space-y-1 text-gray-600 ml-4">
                                    <li>• new obstacle blocks a route</li>
                                    <li>• material stack moved into/out of traversable space</li>
                                    <li>• access boundary created/removed/re-routed</li>
                                    <li>• hazard zone changes</li>
                                    <li>• equipment parked or relocated</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Map correctness / navigation reliability</h4>
                                <p className="text-gray-600 mb-2">A single score (0 to 1) based on:</p>
                                <ul className="space-y-1 text-gray-600 ml-4">
                                    <li>• route feasibility (planned route is actually traversable)</li>
                                    <li>• collision-free execution</li>
                                    <li>• constraint compliance (no restricted zone entry)</li>
                                    <li>• low intervention rate</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Occlusion rate</h4>
                                <p className="text-gray-600 mb-2">Percent of frames where target regions are partially blocked by:</p>
                                <ul className="space-y-1 text-gray-600 ml-4">
                                    <li>• people, vehicles, moving tools</li>
                                    <li>• dust, glare</li>
                                    <li>• near-field clutter</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Edge case frequency</h4>
                                <p className="text-gray-600 mb-2">Average time between events that break a static assumption:</p>
                                <ul className="space-y-1 text-gray-600 ml-4">
                                    <li>• unmodeled obstacle</li>
                                    <li>• route blocked</li>
                                    <li>• unknown object class</li>
                                    <li>• new constraint or hazard boundary</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        DATA NOTE
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mb-8"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Data Note
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The quantitative values and distributions presented in this litepaper (state change rate, map validity half-life, occlusion rate, edge-case frequency, failure mode breakdown, and quiet vs active site metrics) were obtained from <strong className="font-medium text-gray-600">initial pilots</strong> and are intended to represent observed site conditions under real operations.
                        </p>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        FOOTER DIVIDER
                    ═══════════════════════════════════════════════════════════ */}
                    <div className="pt-12 border-t border-gray-200">
                        <p className="text-xs text-gray-400 text-center">
                            Mortar Vault, Inc. · Litepaper v1.0 · January 2025
                        </p>
                    </div>
                </article>
            </main>

            <Footer variant="light" />
        </div>
    );
};

export default IndustrialAutonomy;
