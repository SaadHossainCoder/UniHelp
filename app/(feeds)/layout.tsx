import { MarketingFooter } from "../(marketing)/_components/footer";
import { HeroHeader } from "../(marketing)/_components/header";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
        <div className="flex min-h-screen flex-col dark:bg-[#1F1F1F] ">
            {/* The HeroHeader from the hero-section can serve as the Navbar */}
            <HeroHeader />
            <main className="flex-grow dark:bg-[#1F1F1F] h-full">
                    {/* 
                    The main content is now wrapped in a <main> tag for better semantics.
                    'flex-grow' allows this element to take up any available space,
                    pushing the footer to the bottom.
                    */}
                {children}
            </main>
            <MarketingFooter />
        </div>
    )
}

export default MarketingLayout
