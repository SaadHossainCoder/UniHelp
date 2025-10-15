'use client'
import { Logo } from '@/components/logo'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, Bell, Mail, User, Settings, Menu, X, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { ModeToggle } from '@/components/providers/mode-toggle'

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const navItems = [
        { href: '/home', icon: Home, label: 'Home' },
        { href: '/explore', icon: Search, label: 'Explore' },
        { href: '/notifications', icon: Bell, label: 'Notifications' },
        { href: '/messages', icon: Mail, label: 'Messages' },
        { href: '/profile', icon: User, label: 'Profile' },
        { href: '/settings', icon: Settings, label: 'Settings' },
    ]

    const sidebarVariants = {
        expanded: { width: '16rem' },
        collapsed: { width: '4rem' },
    }

    const textVariants = {
        expanded: { opacity: 1, x: 0 },
        collapsed: { opacity: 0, x: -20 },
    }

    const headerVariants = {
        expanded: { opacity: 1 },
        collapsed: { opacity: 0 },
    }

    return (
        <div className="flex h-screen flex-col md:flex-row relative">
            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background md:hidden">
                <nav className="flex items-center justify-around p-2">
                    {navItems.slice(0, 4).map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground">
                                <Icon className="h-5 w-5" />
                                <span className="text-xs">{item.label}</span>
                            </Link>
                        )
                    })}
                    {/* Mobile Menu Toggle for additional items */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="text-xs">More</span>
                    </button>
                </nav>
            </div>

            {/* Mobile Overlay Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <motion.div
                        className="absolute bottom-16 left-0 right-0 bg-background border-t border-border p-4"
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">More</h3>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <nav className="mt-4 space-y-2">
                            {navItems.slice(4).map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-3 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Icon className="h-5 w-5" />
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </nav>
                    </motion.div>
                </motion.div>
            )}

            {/* Desktop Sidebar */}
            <motion.aside
                className="relative hidden border-r border-border bg-background md:flex md:flex-col"
                variants={sidebarVariants}
                initial="expanded"
                animate={isCollapsed ? "collapsed" : "expanded"}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4
                }}
            >
                <motion.div
                    className="p-4"
                    variants={headerVariants}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="text-xl font-bold whitespace-nowrap"> <Logo /></h1>
                </motion.div>
                <nav className="flex-1 p-2">
                    {isCollapsed && <div className="h-10">
                        <div className="absolute top-5 left-0 right-0 flex justify-center ">
                            <Logo/>
                        </div>
                            <hr className=" border-border" />
                    </div>}
                    {navItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.href}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >

                                <Link
                                    href={item.href}
                                    className="flex w-full items-center gap-3 rounded-md p-3 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                                >
                                    <Icon className="h-5 w-5 flex-shrink-0" />
                                    <motion.span
                                        className="whitespace-nowrap overflow-hidden"
                                        variants={textVariants}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.label}
                                    </motion.span>
                                </Link>
                            </motion.div>

                        )
                    })}
                </nav>
                <div className="w-full p-4 border-t border-border">
                    <ModeToggle />
                </div>
                {/* Collapse Toggle Button - Bottom Middle */}
                <motion.button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute bottom-4 left-1/2 translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-r-lg bg-background p-2 text-muted-foreground "
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <motion.div
                        animate={{ rotate: isCollapsed ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronsLeft className="h-5 w-5" />
                    </motion.div>
                </motion.button>
            </motion.aside>
        </div>
    );
};