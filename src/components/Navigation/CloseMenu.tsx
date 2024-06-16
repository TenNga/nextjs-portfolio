'use client'
import { RxCross2 } from "react-icons/rx";

function CloseMenu({menuRef}:{menuRef: React.RefObject<HTMLUListElement>}) {
    const handleCloseMenu = () => {
        // console.log("Cross: ",menuRef.current)
        menuRef.current? menuRef.current.style.left = "-100%" : null;
    }
    return(
        <div className="absolute right-4 top-4 hidden mobile:block" onClick={handleCloseMenu}>
            <RxCross2 size={24}/>
        </div>
    )
};

export default CloseMenu;