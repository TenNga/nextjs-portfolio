'use client';
import { IoIosMenu } from "react-icons/io";

function BurgerMenu({getMenuRef}:{getMenuRef: React.RefObject<HTMLUListElement>}) {
    const handleNavClick = () =>{
        // console.log("REF:: ", getMenuRef.current);
        getMenuRef.current? getMenuRef.current.style.left = "0" : null;
    }

    return(
        <IoIosMenu className="hidden mobile:block mobile:absolute mobile:left-2 mobile:top-2 w-7 h-7" onClick={handleNavClick} />
    )
};

export default BurgerMenu;