import Menu from "../Shared/Menu";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { CiLink } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";

function Navigation({menuRef}:{menuRef: React.RefObject<HTMLUListElement>}){
    const mainMenu = [
        {
            name:'home',
            icon: <IoHomeOutline size={28}/>,
            path: '/'
        },
        {
            name:'about',
            icon: <FaRegUserCircle size={28}/>,
            path: '/about'
        },
        {
            name:'projects',
            icon: <LiaProjectDiagramSolid size={28}/>,
            path: '/projects'
        },
        {
            name:'links',
            icon: <CiLink size={28}/>,
            path: '/links'
        },
        {
            name:'resume',
            icon: <TiDocumentText  size={28}/>,
            path: '/resume'
        }];
    const renderMenu = mainMenu.map(menu => {
        return (
                <Menu key={menu.name} name={menu.name} icon={menu.icon} path={menu.path} />
            )
    }) 
    return (
        <nav className="grow border-r-[1px] border-[#585858] h-dvh mobile:absolute mobile:-left-full mobile:bg-[var(--background)]" ref={menuRef}>
            <ul className="flex justify-center items-center flex-col mt-20 mx-7">
                {renderMenu}
            </ul>
        </nav>
    )
};

export default Navigation;