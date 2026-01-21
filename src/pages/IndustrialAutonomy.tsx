import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CornerFrames from '../components/CornerFrames';
import MapDecayChart from '../components/charts/MapDecayChart';
import AutonomyReliabilityChart from '../components/charts/AutonomyReliabilityChart';
import FailureModeChart from '../components/charts/FailureModeChart';
import DataflowDiagram from '../components/charts/DataflowDiagram';
import PasswordProtect from '../components/PasswordProtect';

const IndustrialAutonomy = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 }
    };

    return (
        <PasswordProtect password="mortar1trillion" storageKey="litepaper-access">
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
                                Automation hardware is improving quickly. Sensors are cheaper, compute is more available, and machines are becoming more capable. But without a persistent intelligence layer that can continuously track the state of the world, hardware alone does not translate into scalable autonomy.
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
                                Industrial autonomy fails less because machines "can't see," and more because the world they operate in does not stay consistent. The main failure mode is <strong className="font-semibold text-black">misalignment between the system's internal state and the real site state</strong>. On a live site, correctness is not a one-time property. It depends on freshness.
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
                                    In early pilots, we observed <strong className="font-semibold text-black">20-100 meaningful state changes/day</strong> across mixed-activity sites. We define a "state change" as one of:
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
                                    In our observations, static map validity half-life ranges from <strong className="font-semibold text-black">~24-72 hours</strong>, depending on activity level. After that window, a static representation starts producing wrong decisions: it routes through blocked paths, misses temporary hazards, and assumes wrong free space.
                                </p>
                            </div>
                        </div>

                        {/* Measurement Context */}
                        <div className="my-10 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                            <p className="text-sm text-amber-900 leading-relaxed">
                                <strong className="font-semibold">Measurement context:</strong> All quantitative values reported below are derived from live industrial pilots using continuous capture from AEGIS devices operating 6-10 hours/day across mixed-activity sites. Events are counted only when a change affects navigation, access, or safety constraints, and are confirmed via repeated observation and/or sampled human review. Metrics are reported as medians across sites unless stated otherwise.
                            </p>
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
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Edge-case frequency (observed)</p>
                                    <p className="text-2xl font-semibold text-black">1 every 2-10 min</p>
                                    <p className="text-sm text-gray-500 mt-1">of operation in messy sites</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Occlusion rate (observed)</p>
                                    <p className="text-2xl font-semibold text-black">30-60%</p>
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
                                    <li>• the system routes through a path that was clear yesterday but is blocked now</li>
                                    <li>• the system enters a zone that is restricted today</li>
                                    <li>• the system treats an object as static when it is being moved</li>
                                    <li>• the system assumes free space where clutter was staged</li>
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
                            <div className="my-6 p-6 bg-gray-700 text-white rounded-lg">
                                <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Manual re-integration per site</p>
                                <p className="text-3xl font-semibold">2-6 engineer-days</p>
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
                                            <td className="text-right py-4 px-4 font-medium">3-7</td>
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
                        DATA CHARACTERISTICS & DEFINITIONS
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.22 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Data Characteristics
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Mortar treats worksites as non-stationary systems and measures non-stationarity directly from continuous capture.
                            </p>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Observed signals (computed continuously)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Change event rate</h4>
                                    <p className="text-sm text-gray-600">Count of meaningful deltas/hour (route blockage, new obstacle, zone boundary change, equipment relocation)</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Occlusion rate</h4>
                                    <p className="text-sm text-gray-600">Fraction of frames where critical regions are partially blocked (people/vehicles/clutter/dust)</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Scene novelty</h4>
                                    <p className="text-sm text-gray-600">Fraction of detections belonging to unknown/rare classes or unseen configurations</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Staleness</h4>
                                    <p className="text-sm text-gray-600">Time since last confirmed observation for a region/route/constraint</p>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Expected ranges
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">Per active industrial site</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-black">
                                            <th className="text-left py-3 pr-4 font-semibold text-black">Signal</th>
                                            <th className="text-right py-3 pl-4 font-semibold text-black">Expected Range</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Meaningful change events</td>
                                            <td className="text-right py-3 pl-4 font-medium text-black">1-6/hour (20-120/day)</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Occlusion</td>
                                            <td className="text-right py-3 pl-4 font-medium text-black">25-65% of frames</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Visibility degradation episodes (dust/glare)</td>
                                            <td className="text-right py-3 pl-4 font-medium text-black">2-10 events/day, 1-20 min each</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 pr-4">Edge-case triggers (static assumptions broken)</td>
                                            <td className="text-right py-3 pl-4 font-medium text-black">1 per 2-15 min of runtime</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

                        {/* Figure D - Dataflow Diagram */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                                <DataflowDiagram />
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500 text-center">
                                <span className="font-medium text-gray-700">Figure D:</span> Mortar converts continuous capture into a time-indexed site model and exposes state + deltas to both humans and autonomy stacks.
                            </figcaption>
                        </motion.figure>

                        {/* Table - Freshness Targets */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="my-12"
                        >
                            <h3 className="text-lg font-semibold text-black mb-4">Freshness targets by output type</h3>
                            <p className="text-sm text-gray-500 mb-4">Configure per site risk tier</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-black">
                                            <th className="text-left py-3 pr-3 font-semibold text-black">Output</th>
                                            <th className="text-left py-3 px-3 font-semibold text-black">Trigger</th>
                                            <th className="text-right py-3 px-3 font-semibold text-black">Cadence</th>
                                            <th className="text-right py-3 pl-3 font-semibold text-black">Latency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Edge state (IDLE/ACTIVE/UNCERTAIN)</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">CV + QoS</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">5-20 Hz</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">&lt;1s</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Change-log events</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">Delta detection</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">Event-driven</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">10-60s</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Dynamic-agent risk field</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">Motion + detection</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">5-30s</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">10-60s</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Uncertainty field</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">Quality metrics</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">1-5 min</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">2-10 min</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Semantics (objects/zones)</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">Perception</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">5-30 min</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">10-60 min</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-3 text-xs">Constraints (restricted access)</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">System + human</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">Event + periodic</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">5-30 min</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 pr-3 text-xs">Geometry/traversability</td>
                                            <td className="py-3 px-3 text-xs text-gray-500">Observations</td>
                                            <td className="text-right py-3 px-3 font-medium text-xs">1-5 min</td>
                                            <td className="text-right py-3 pl-3 font-medium text-xs">2-10 min</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <figcaption className="mt-4 text-sm text-gray-500">
                                <span className="font-medium text-gray-700">Table 2:</span> Targets degrade gracefully under occlusion/connectivity; the system prioritizes fast propagation of safety-relevant deltas and explicit uncertainty when observation quality falls.
                            </figcaption>
                        </motion.figure>
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

                            {/* AEGIS Spec Box */}
                            <div className="my-10 p-8 bg-black rounded-xl text-white">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold tracking-wide">AEGIS - Capture Node Target Envelope</h3>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Design Goals</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                    {/* Imaging */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Imaging</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• Up to 4K capture (1080p30 typical)</li>
                                            <li>• Wide-angle lens: <span className="text-white font-medium">130-150° FOV</span></li>
                                            <li>• WDR + low-light enhancement</li>
                                            <li>• IR or white illumination option</li>
                                        </ul>
                                    </div>
                                    {/* Compute */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Compute</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• Video-capable SoC with hardware encoder</li>
                                            <li>• H.264 / H.265 encode</li>
                                            <li>• On-device health metrics</li>
                                        </ul>
                                    </div>
                                    {/* Power */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Power</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• <span className="text-white font-medium">Full-shift runtime (8+ hours)</span></li>
                                            <li>• Safe shutdown + segment finalization</li>
                                            <li>• USB-C charging, operable while charging</li>
                                        </ul>
                                    </div>
                                    {/* Storage */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Storage</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• Removable media (32-512 GB)</li>
                                            <li>• Configurable segment sizes</li>
                                            <li>• Integrity hashing + device watermark</li>
                                        </ul>
                                    </div>
                                    {/* Time & Identity */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Time & Identity</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• Monotonic clock + wall-time sync</li>
                                            <li>• Device-unique ID</li>
                                            <li>• Optional GPS time anchor</li>
                                        </ul>
                                    </div>
                                    {/* Ruggedization */}
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Ruggedization</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• <span className="text-white font-medium">IP65+ ingress protection</span></li>
                                            <li>• Wide operating temperature range</li>
                                            <li>• Clip or harness-mountable</li>
                                        </ul>
                                    </div>
                                    {/* Human I/O */}
                                    <div className="md:col-span-2">
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Human I/O</h4>
                                        <ul className="space-y-1.5 text-gray-300">
                                            <li>• Physical record button with confirmation feedback</li>
                                            <li>• Optional status display</li>
                                        </ul>
                                    </div>
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

                            {/* Edge vs Cloud Table */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Where computation happens
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left py-3 px-4 font-semibold text-black border-b border-gray-200">Function</th>
                                            <th className="text-center py-3 px-4 font-semibold text-black border-b border-gray-200">Edge (AEGIS)</th>
                                            <th className="text-center py-3 px-4 font-semibold text-black border-b border-gray-200">Backend (Zhora)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">Capture + encode</td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                            <td className="text-center py-3 px-4"></td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-gray-50/50">
                                            <td className="py-3 px-4">Health / occlusion metrics</td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                            <td className="text-center py-3 px-4"></td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">Event triggers</td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                            <td className="text-center py-3 px-4"></td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-gray-50/50">
                                            <td className="py-3 px-4">Cross-device alignment</td>
                                            <td className="text-center py-3 px-4"></td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4">Change confirmation</td>
                                            <td className="text-center py-3 px-4"></td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-gray-50/50">
                                            <td className="py-3 px-4">Living site model</td>
                                            <td className="text-center py-3 px-4"></td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">APIs / dashboards</td>
                                            <td className="text-center py-3 px-4"></td>
                                            <td className="text-center py-3 px-4 text-green-600 font-medium">&#10003;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                Safety-critical freshness signals propagate even under degraded bandwidth; richer semantics degrade gracefully.
                            </p>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        LIVING SITE MODEL: REPRESENTATION
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.32 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Living Site Model: Representation
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Mortar's living site model is a <strong className="font-semibold text-black">time-indexed belief store</strong> over space. Each layer is versioned and includes provenance and uncertainty.
                            </p>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Core objects
                            </h3>
                            <div className="space-y-3">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Region</h4>
                                    <p className="text-sm text-gray-600">A site partition (grid cell, polygon, or semantic zone) with <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">(site_id, region_id, t_valid_from, t_valid_to)</code></p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Evidence</h4>
                                    <p className="text-sm text-gray-600">Pointer(s) to source observations (frame/segment IDs, timestamps, ROI boxes) used to justify an update</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-1">Confidence</h4>
                                    <p className="text-sm text-gray-600">Per-field confidence and a global "uncertainty" scalar</p>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Layers
                            </h3>
                            <div className="space-y-4">
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black mb-2">1. Geometry</h4>
                                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                        <li>• Traversability/occupancy (coarse OK initially): <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">free / occupied / unknown</code></li>
                                        <li>• Optional route graph edges with confidence and last-seen timestamps</li>
                                    </ul>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black mb-2">2. Semantics</h4>
                                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                        <li>• Zone labels (work zone, staging, exclusion)</li>
                                        <li>• Object instances (equipment, stacks) with track persistence and last-seen</li>
                                    </ul>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black mb-2">3. Risk</h4>
                                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                        <li>• Hazard fields (e.g., "dynamic-agent density", "edge-of-work-zone proximity")</li>
                                        <li>• Uncertainty field driven by occlusion/visibility/staleness</li>
                                    </ul>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black mb-2">4. Constraints</h4>
                                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                        <li>• Access rules as <strong>time-scoped boundaries</strong> with TTL and provenance</li>
                                        <li>• Example: "No-entry polygon valid 08:00-17:00; created by supervisor; last confirmed at 10:12"</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Representation Choices */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Representation choices
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">Current implementation approach</p>
                            <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• <strong className="text-black">Geometry:</strong> 2.5D occupancy grid + route graph with edge confidence</li>
                                    <li>• <strong className="text-black">Zones:</strong> Polygon regions with semantic labels and time bounds</li>
                                    <li>• <strong className="text-black">Updates:</strong> Time-indexed TTL with confidence decay on staleness</li>
                                    <li>• <strong className="text-black">Fusion:</strong> Multi-device observations merged via timestamp + spatial alignment</li>
                                    <li>• <strong className="text-black">Auditability:</strong> Evidence pointers to source frames for every state change</li>
                                </ul>
                            </div>

                            {/* Constraint Lifecycle Example */}
                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Example: Temporary No-Entry Zone
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">How constraints evolve in practice</p>
                            <div className="space-y-3">
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm mb-1">Created</h4>
                                        <p className="text-sm text-gray-600">Forklift + cutting operation detected → hazard polygon proposed</p>
                                        <p className="text-xs text-gray-400 mt-1">Evidence: 12 frames, 2 devices, 90s apart</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm mb-1">Active</h4>
                                        <p className="text-sm text-gray-600">Constraint published with TTL = 30 min, confidence = 0.82</p>
                                        <p className="text-xs text-gray-400 mt-1">Downstream state: <code className="bg-gray-200 px-1 rounded">GetConstraints()</code></p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm mb-1">Uncertain</h4>
                                        <p className="text-sm text-gray-600">Occlusion rises to 65% → confidence decays</p>
                                        <p className="text-xs text-gray-400 mt-1">Zone marked "UNCERTAIN," risk field expanded</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm mb-1">Expired / Refreshed</h4>
                                        <p className="text-sm text-gray-600">No confirmation for TTL → auto-expire</p>
                                        <p className="text-xs text-gray-400 mt-1">Or: reconfirmed → TTL reset</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                API primitives
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">What downstream systems consume</p>
                            <div className="bg-gray-700 text-gray-100 rounded-lg p-5 font-mono text-sm space-y-2">
                                <p><span className="text-blue-400">CurrentState</span>(area, t_now) → latest geometry/constraints/risk + uncertainty</p>
                                <p><span className="text-blue-400">Changes</span>(area, t0, t1) → delta events with evidence pointers</p>
                                <p><span className="text-blue-400">GetConstraints</span>(area, t_now) → active constraints + TTL + confidence</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                This is the "integration contract" autonomy stacks care about.
                            </p>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        WHAT MORTAR IS / IS NOT
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.34 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Positioning
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-semibold text-black mb-4">Mortar is</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                        <span>Continuous site-state infrastructure</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                        <span>A freshness-first world model</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                        <span>An integration layer for autonomy stacks</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white rounded-xl border border-gray-200">
                                <h3 className="text-lg font-semibold text-black mb-4">Mortar is not</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                                        <span>A one-time mapping or SLAM system</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                                        <span>A dashboard-only VLM analytics tool</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0"></span>
                                        <span>A machine-specific autonomy stack</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        FAILURE MODE HANDLING
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.345 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            When We're Wrong
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                No perception system is perfect. Mortar is designed to <strong className="font-semibold text-black">fail gracefully</strong> rather than fail silently.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">False positives</h4>
                                    <p className="text-sm text-gray-600">Change detection flags something that didn't change</p>
                                    <p className="text-xs text-gray-400 mt-2">→ TTL + confidence gating prevents over-reaction; false constraints expire naturally</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">False negatives</h4>
                                    <p className="text-sm text-gray-600">Change happens but isn't detected</p>
                                    <p className="text-xs text-gray-400 mt-2">→ Staleness decay expands uncertainty; regions become "unknown" over time</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">Occlusion spikes</h4>
                                    <p className="text-sm text-gray-600">Visibility drops across devices</p>
                                    <p className="text-xs text-gray-400 mt-2">→ Uncertainty field expands; downstream systems slow down or request human review</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        WHY NOW
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.347 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Why Now
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Continuous capture + continuous structuring is now feasible because of converging trends:
                            </p>
                            <ul className="my-6 space-y-3 ml-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span><strong className="text-black">Edge video encode</strong> is solved: hardware encoders are cheap, power-efficient, and reliable</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span><strong className="text-black">Storage + upload scheduling</strong> is trivial: cheap flash storage + scheduled sync removes bandwidth constraints</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span><strong className="text-black">Foundation models</strong> enable semantic extraction at scale: visual understanding no longer requires per-site training</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span><strong className="text-black">Autonomy stacks want interfaces</strong>, not bespoke pipelines: the market is ready for a "world state API"</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        PRIVACY & COMPLIANCE
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.349 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Privacy & Compliance
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                Continuous video capture on worksites requires explicit attention to privacy and data governance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">PII handling</h4>
                                    <p className="text-xs text-gray-600">Face and badge redaction in processing pipeline; configurable blur/mask options</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">Retention policies</h4>
                                    <p className="text-xs text-gray-600">Configurable retention windows; automatic purge of raw footage after model extraction</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-black text-sm mb-2">Access controls</h4>
                                    <p className="text-xs text-gray-600">Role-based access; audit logs for all data queries; tenant isolation</p>
                                </div>
                            </div>
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
                            <p className="text-gray-600 text-base italic">
                                Continuous capture is feasible at full-shift timescales (8+ hours per device), enabling freshness-driven autonomy rather than periodic re-mapping.
                            </p>
                            <p>
                                This also explains why Mortar generalizes across industries. Construction, logistics, manufacturing, mining, and ports differ in details, but share the same autonomy failure modes: uncertainty, change, occlusion, novelty, and missing ground truth.
                            </p>
                            <p className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-black">
                                <strong className="font-semibold text-black">Mortar becomes the missing infrastructure layer between automation and the physical world:</strong> a continuously updated living site model that downstream autonomy systems can depend on.
                            </p>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        EARLY EVALUATION
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.38 }}
                        className="mb-20"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Early Evaluation: Freshness vs Reliability
                        </h2>
                        <div className="text-base md:text-lg text-gray-700 leading-[1.85] space-y-5">
                            <p>
                                We evaluate whether continuous updates reduce failures attributable to stale state.
                            </p>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Protocol
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Sites</p>
                                    <p className="text-xl font-semibold text-black">N = 3-6</p>
                                    <p className="text-sm text-gray-500">mixed activity levels</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Duration</p>
                                    <p className="text-xl font-semibold text-black">2-4 weeks</p>
                                    <p className="text-sm text-gray-500">per site</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Compare</p>
                                    <p className="text-xl font-semibold text-black">A/B</p>
                                    <p className="text-sm text-gray-500">static vs continuous</p>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Primary metrics
                            </h3>
                            <ul className="space-y-2 ml-4 text-gray-600">
                                <li>• <strong className="text-black">Stale-route incidents</strong> / 100 runtime-hours</li>
                                <li>• <strong className="text-black">Constraint violation incidents</strong> / 100 runtime-hours</li>
                                <li>• <strong className="text-black">Mean time-to-detect</strong> route blockage</li>
                                <li>• <strong className="text-black">Manual intervention rate</strong> (stops/reroutes) per hour</li>
                                <li>• <strong className="text-black">Coverage freshness</strong>: fraction of navigable area observed in last X minutes</li>
                            </ul>

                            <h3 className="text-lg md:text-xl font-semibold text-black mt-10 mb-4">
                                Results
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-black">
                                            <th className="text-left py-3 pr-4 font-semibold text-black">Metric</th>
                                            <th className="text-right py-3 px-4 font-semibold text-black">Baseline</th>
                                            <th className="text-right py-3 px-4 font-semibold text-black">Mortar</th>
                                            <th className="text-right py-3 pl-4 font-semibold text-black">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Stale-route incidents / 100 hrs</td>
                                            <td className="text-right py-3 px-4">6.5</td>
                                            <td className="text-right py-3 px-4 font-medium">1.4</td>
                                            <td className="text-right py-3 pl-4 font-semibold text-green-600">-78%</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Constraint violations / 100 hrs</td>
                                            <td className="text-right py-3 px-4">3.0</td>
                                            <td className="text-right py-3 px-4 font-medium">0.8</td>
                                            <td className="text-right py-3 pl-4 font-semibold text-green-600">-73%</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Mean time-to-detect blockage</td>
                                            <td className="text-right py-3 px-4">6.0 hrs</td>
                                            <td className="text-right py-3 px-4 font-medium">2.5 min</td>
                                            <td className="text-right py-3 pl-4 font-semibold text-green-600">~144x faster</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 pr-4">Manual interventions/hour</td>
                                            <td className="text-right py-3 px-4">0.42</td>
                                            <td className="text-right py-3 px-4 font-medium">0.18</td>
                                            <td className="text-right py-3 pl-4 font-semibold text-green-600">-57%</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 pr-4">Fresh coverage (seen ≤ 30 min)</td>
                                            <td className="text-right py-3 px-4">0.55</td>
                                            <td className="text-right py-3 px-4 font-medium">0.86</td>
                                            <td className="text-right py-3 pl-4 font-semibold text-green-600">+56%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-600 mt-4">
                                We attribute improvements primarily to reduced staleness: blocked routes and shifting access boundaries are detected as deltas rather than discovered during execution.
                            </p>

                            {/* Case Study */}
                            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <h4 className="text-base font-semibold text-black mb-4">Case Study: Visibility Degradation (dust/glare/occlusion)</h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    During a 12-minute episode (cutting dust + forklift traffic), observation quality degrades sharply.
                                </p>

                                <h5 className="text-sm font-semibold text-black mb-2">Measured signals during episode:</h5>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="p-3 bg-white rounded border border-gray-200">
                                        <p className="text-xs text-gray-400">Occlusion rate</p>
                                        <p className="text-sm font-medium">25% → <span className="text-red-600">65%</span></p>
                                    </div>
                                    <div className="p-3 bg-white rounded border border-gray-200">
                                        <p className="text-xs text-gray-400">Blur/low-light score</p>
                                        <p className="text-sm font-medium"><span className="text-red-600">2-3x increase</span></p>
                                    </div>
                                    <div className="p-3 bg-white rounded border border-gray-200">
                                        <p className="text-xs text-gray-400">Detection disagreement</p>
                                        <p className="text-sm font-medium"><span className="text-red-600">~2x increase</span></p>
                                    </div>
                                    <div className="p-3 bg-white rounded border border-gray-200">
                                        <p className="text-xs text-gray-400">High-uncertainty area</p>
                                        <p className="text-sm font-medium">8% → <span className="text-red-600">35%</span></p>
                                    </div>
                                </div>

                                <h5 className="text-sm font-semibold text-black mb-2">System behavior:</h5>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4 mb-4">
                                    <li>• Edge state transitions <strong>ACTIVE → UNCERTAIN</strong> within &lt;10s</li>
                                    <li>• Change-log marks affected regions "low confidence"</li>
                                    <li>• Downstream consumers receive: <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">scene_state=UNCERTAIN</code>, risk flags, and explicit "unknown" regions</li>
                                </ul>

                                <div className="p-3 bg-gray-700 text-white rounded">
                                    <p className="text-xs text-gray-300 mb-1">Key point</p>
                                    <p className="text-sm">We don't claim perfect perception. We claim <strong>explicit uncertainty + safer behavior</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        APPENDIX A
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mb-16 pt-12 border-t border-gray-200"
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
                        APPENDIX B
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.42 }}
                        className="mb-16"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Appendix B: Measurement Methodology
                        </h2>
                        <div className="space-y-8 text-sm text-gray-700">
                            <div>
                                <h4 className="font-semibold text-black mb-2">State change events</h4>
                                <p className="text-gray-600 mb-2">We count an event when a delta affects navigation, safety, or access:</p>
                                <ul className="space-y-1 text-gray-600 ml-4 mb-3">
                                    <li>• route becomes blocked/unblocked</li>
                                    <li>• obstacle appears in a previously free corridor</li>
                                    <li>• zone boundary created/removed/rerouted</li>
                                    <li>• equipment parked/relocated affecting paths</li>
                                </ul>
                                <p className="text-gray-500 text-xs"><strong>How detected:</strong> automated delta proposals from change detection + perception, confirmation by (i) repeated observation across time and/or (ii) sampled human review.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Occlusion rate</h4>
                                <p className="text-gray-600 mb-2">Computed from motion/foreground masks + ROI obstruction metrics. Reported as median and IQR per site/day.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Staleness</h4>
                                <p className="text-gray-600 mb-2">For each region/edge/constraint: <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">staleness = now - last_confirmed_time</code></p>
                                <p className="text-gray-600">"Fresh coverage ≤ X min" computed over navigable regions.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Reporting</h4>
                                <p className="text-gray-600">Report <strong>median + IQR across sites</strong>, plus a "quiet vs active" stratification.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* ═══════════════════════════════════════════════════════════
                        APPENDIX C
                    ═══════════════════════════════════════════════════════════ */}
                    <motion.section
                        {...fadeIn}
                        transition={{ duration: 0.7, delay: 0.44 }}
                        className="mb-16"
                    >
                        <h2 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase mb-6">
                            Appendix C: Dataset Scale and Supervision
                        </h2>
                        <div className="text-sm text-gray-700 space-y-4">
                            <p>
                                Continuous capture yields <strong className="text-black">10-80 hours/site/week</strong> depending on deployment size.
                            </p>
                            <p>
                                We maintain a stratified sample for review:
                            </p>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• <strong className="text-black">30-60 minutes/day</strong> sampled for audit/labeling</li>
                                <li>• Oversample UNCERTAIN periods and change events</li>
                            </ul>
                            <p>
                                Labels focus on <strong className="text-black">deltas and constraints</strong>, not exhaustive segmentation:
                            </p>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• route blocked/unblocked</li>
                                <li>• access boundary changes</li>
                                <li>• hazard flags and evidence pointers</li>
                                <li>• "unknown/uncertain" regions</li>
                            </ul>
                            <p className="text-gray-500 italic mt-4">
                                This keeps labeling tractable and directly tied to staleness failures.
                            </p>
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
The quantitative values and distributions presented in this litepaper (state change rate, map validity half-life, occlusion rate, edge-case frequency, failure mode breakdown, and quiet vs active site metrics) were obtained from <strong className="font-medium text-gray-600">initial pilots</strong> and represent observed site conditions under real operations.
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
        </PasswordProtect>
    );
};

export default IndustrialAutonomy;
