import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-[#1F1F1F] pt-40 pb-10 px-10  sm:px-6 lg:px-8 transition-colors duration-300">
                <div className="max-w-7xl px-10 mx-auto">
                    {/* Hero Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                            About UniHelp
                        </h1>
                        <p className="text-md md:text-md text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Welcome to your community&apos;s toolkit for turning everyday challenges into collective triumphs. We&apos;re a passionate group of developers, civic enthusiasts, and problem-solvers dedicated to fostering a more connected, responsive, and empowered world.
                        </p>
                    </div>

                    {/* Our Story */}
                    <section className="mb-16">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                                Our Story
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        In a world buzzing with potential yet bogged down by overlooked issues—from pothole-riddled streets to unspoken social hurdles—we saw a gap. Why do problems persist when so many hands are ready to help?
                                        Born in late 2024,UniHelp started as a simple idea: empower individuals to report, collaborate, and resolve civic and social issues together.
                                        Today, on October 12, 2025, we&apos;re proud to be a thriving platform that&apos;s already sparked hundreds of local actions and inspired global conversations.
                                    </p>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Our journey began with the frustration of fragmented reporting systems and the untapped power of community. We believe that when people unite—armed with anonymity, rewards, and real collaboration—real change happens fast.
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    <div className="bg-gradient-to-br from-blue-50 dark:from-gray-900/50 to-purple-50 dark:to-gray-900/50 rounded-2xl p-6 h-64 flex items-center justify-center">
                                        <span className="text-6xl">🌟</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Mission */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                To create a safer, more equitable society by bridging the gap between citizens, communities, and authorities through crowdsourced action and gamified engagement.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-md font-semibold text-blue-900 dark:text-blue-300 mb-2">Theme</h3>
                                    <p className="text-blue-800 dark:text-blue-200">Community Collaboration and Civic Empowerment</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                                    <h3 className="text-md font-semibold text-purple-900 dark:text-purple-300 mb-2">Category</h3>
                                    <p className="text-purple-800 dark:text-purple-200">Civic Tech / Social Good / Crowd-sourced Problem Reporting</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Problem We're Solving */}
                    <section className="mb-16">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">The Problem We&apos;re Solving</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                Every day, hazards like unsafe roads, pollution, or neighborhood vulnerabilities go unreported or unaddressed. Vulnerable groups—the elderly, disabled, and marginalized—face these silently, while well-meaning folks lack ways to contribute.
                                Authorities struggle with slow responses due to scattered complaints, and fear of reprisal silences too many voices.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                Existing apps? They&apos;re siloed, reward-free, and often expose users. We change that.
                            </p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>Lack of centralized citizen engagement platforms.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>Authorities respond slowly due to underreporting.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>People want to help but lack meaningful channels.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>Fear of exposure prevents sensitive reporting.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* What Sets Us Apart */}
                    <section className="mb-16">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">What Sets Us Apart</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                UniHelp isn&apos;t just another complaint box—it&apos;s a movement:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-b from-yellow-50 dark:from-yellow-900/20 to-orange-50 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Gamification & Rewards</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Earn points, badges, and monthly shoutouts for every vote, report, or collaboration.</p>
                                </div>
                                <div className="bg-gradient-to-b from-green-50 dark:from-green-900/20 to-emerald-50 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-500">
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Safe & Flexible Reporting</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Go anonymous or claim credit—your choice, always protected.</p>
                                </div>
                                <div className="bg-gradient-to-b from-blue-50 dark:from-blue-900/20 to-indigo-50 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Democratic Prioritization</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Community votes rank issues by urgency, ensuring the most critical get attention first.</p>
                                </div>
                                <div className="bg-gradient-to-b from-purple-50 dark:from-purple-900/20 to-violet-50 dark:to-violet-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Action Beyond Words</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Form groups, share resources, and escalate to authorities with evidence-backed reports.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">1. Anonymous or Named Reporting</h3>
                                <p className="text-gray-700 dark:text-gray-300">Snap a photo, add details, and submit hazards or issues your way.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <div className="text-4xl mb-4">🗳️</div>
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">2. Community Voting & Prioritization</h3>
                                <p className="text-gray-700 dark:text-gray-300">Upvote to spotlight urgent problems and rally support.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <div className="text-4xl mb-4">🏆</div>
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">3. Gamified Contribution System</h3>
                                <p className="text-gray-700 dark:text-gray-300">Climb leaderboards, unlock titles, and get recognized for your impact.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">4. Collaboration Spaces</h3>
                                <p className="text-gray-700 dark:text-gray-300">Team up virtually or in-person to solve issues, share tips, and track progress.</p>
                            </div>
                        </div>
                    </section>

                    {/* Our Impact So Far */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-green-50 dark:from-green-900/20 to-emerald-50 dark:to-emerald-900/20 rounded-2xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Impact So Far</h2>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5,000+</div>
                                    <p className="text-gray-700 dark:text-gray-300">Reports Resolved in Pilot Cities</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20%</div>
                                    <p className="text-gray-700 dark:text-gray-300">Faster Authority Responses</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10,000+</div>
                                    <p className="text-gray-700 dark:text-gray-300">Active Contributors</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About
