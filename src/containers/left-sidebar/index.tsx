'use client';
import Navigation from "@/components/Navigation";
import BurgerMenu from "./BurgerMenu";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
    const menuRef = useRef<HTMLUListElement>(null);

    const [showSidebar, setShowSidebar] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        // hide sidebar on path change
        menuRef.current? menuRef.current.style.left = "-100%" : null;
        setShowSidebar(false)
      }, [pathname])

    return (
        <>
            <BurgerMenu getMenuRef={menuRef}/>
            <Navigation menuRef={menuRef}/>
            
        </>
    )
};
