'use client'
import { MenuIconType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu({name, icon,path}:MenuIconType) {
    const pathName = usePathname();
    const isActive = pathName === path;
    return(
        <li className={`flex items-center justify-center mt-[4px] ${isActive? "text-black" : ""}`}>
            <Link href={path} 
                className={`flex items-center w-[180px] text-xs capitalize mt-[24px] pl-[48px] ${isActive? "bg-[color:var(--menu-background)] rounded" : "text-[color:var(--light-white)]"}`}>
                <span className="mr-4">{icon}</span>
                {name}
            </Link>
        </li>
    )
};

export default Menu;