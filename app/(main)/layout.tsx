
import { Navigation } from "./_components/navigation"

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            {/* The HeroHeader from the hero-section can serve as the Navbar */}
            <Navigation />
            <main className="flex-1 overflow-y-auto h-full dark:bg-[#1F1F1F]">
                    {/* 
                    The main content is now wrapped in a <main> tag for better semantics.
                    'flex-grow' allows this element to take up any available space,
                    pushing the footer to the bottom.
                    */}
                {children}
            </main>
            
        </div>
    )
}

export default MainLayout
