import Navigation from "@/components/Navigation";

export default function LeftSidebar() {
    return (
        <nav className="grow border-r-[1px] border-[#585858] h-dvh mobile:absolute mobile:-left-full mobile:bg-[var(--background)]">
            <Navigation />
        </nav>
    )
};
