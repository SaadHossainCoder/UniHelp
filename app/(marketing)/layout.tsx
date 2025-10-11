// import { Navbar } from "./_components/navbar"


const MarketingLayout = (
    {
        children
    }: { children: React.ReactNode }
) => {

    return (
        <div className="h-full w-full ">
            {/* <Navbar /> */}
            <div className="h-full w-full overflow-y-auto dark:bg-[#1F1F1F] scroll-smooth
            ">
                {children}
            </div>
        </div>
    )
}

export default MarketingLayout
