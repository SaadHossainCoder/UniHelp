import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { Logo } from '@/components/logo'

export const MarketingFooter = () => {
    return (
        <div className="w-full">
            <Footer
                logo={<Logo className="h-10 w-10" />}
                brandName="UniHelp"
                socialLinks={[
                    {
                        icon: <Twitter className="h-5 w-5" />,
                        href: "https://twitter.com",
                        label: "Twitter",
                    },
                    {
                        icon: <Github className="h-5 w-5" />,
                        href: "https://github.com/SaadHossainCoder/UniHelp",
                        label: "GitHub",
                    },
                ]}
                mainLinks={[
                    { href: "/products", label: "Products" },
                    { href: "/about", label: "About" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contact" },
                ]}
                legalLinks={[
                    { href: "/privacy", label: "Privacy" },
                    { href: "/terms", label: "Terms" },
                ]}
                copyright={{
                    text: "© 2025 Awesome Corp. ",
                    license: "All rights reserved",
                }}
            />
        </div>
    )
}
