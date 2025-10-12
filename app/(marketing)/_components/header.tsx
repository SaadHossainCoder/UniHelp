'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/providers/mode-toggle'

import { useScrollTop } from "@/hooks/use-scroll-top";

// const menuItems = [
//     { name: 'Features', href: '#link' },
//     { name: 'Solution', href: '#link' },
//     { name: 'Pricing', href: '#link' },
//     { name: 'About', href: '#link' },
// ]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const isScrolled = useScrollTop()

    // const [isScrolled, setIsScrolled] = React.useState(false)

    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 10)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full  top-0 ">
                <div className={cn(" pt-2  px-8 transition-all duration-100 lg:px-12",
                    isScrolled && "bg-background/50 border-b-1 backdrop-blur-lg shadow-lg shadow-zinc-300/20 dark:shadow-none dark:bg-[#1F1F1F]/50 border-zinc-200 dark:border-zinc-700")}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>


                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    // className={cn(isScrolled && 'lg:hidden')}
                                    >
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    // className={cn(isScrolled && 'lg:hidden')}
                                    >
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                {/* <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button> */}
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
