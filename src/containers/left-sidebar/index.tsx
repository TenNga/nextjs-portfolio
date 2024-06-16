'use client';
import Navigation from "@/components/Navigation";
import BurgerMenu from "./BurgerMenu";
import { useRef } from "react";

export default function LeftSidebar() {
    const menuRef = useRef<HTMLUListElement>(null);

    return (
        <>
            <BurgerMenu getMenuRef={menuRef}/>
            <Navigation menuRef={menuRef}/>
            
        </>
    )
};
