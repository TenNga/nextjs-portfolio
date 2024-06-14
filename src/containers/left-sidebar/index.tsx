import Navigation from "@/components/Navigation";
import BurgerMenu from "./BurgerMenu";

export default function LeftSidebar() {
    return (
        <>
            <BurgerMenu />
            <nav className="grow border-r-[1px] border-[#585858] h-dvh mobile:absolute mobile:-left-full mobile:bg-[var(--background)]">
                <Navigation />
            </nav>
        </>
    )
};
