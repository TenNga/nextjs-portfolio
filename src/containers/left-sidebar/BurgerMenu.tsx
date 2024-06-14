'use client';
import { IoIosMenu } from "react-icons/io";

function BurgerMenu() {
    const handleNavClick = () =>{
        
    }

    return(
        <IoIosMenu className="hidden mobile:block mobile:absolute mobile:left-2 mobile:top-2 w-7 h-7" onClick={handleNavClick}/>
    )
};

export default BurgerMenu;