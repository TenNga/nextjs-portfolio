import Menu from "../Shared/Menu";
import homeIcon from '../../public/images/home_icon.png'

function Navigation(){
    const mainMenu = [
        {
            name:'home',
            icon: homeIcon
        },
        {
            name:'about',
            icon: homeIcon
        },
        {
            name:'projects',
            icon: homeIcon
        },
        {
            name:'links',
            icon: homeIcon
        },
        {
            name:'resume',
            icon: homeIcon
        }];
    const renderMenu = mainMenu.map(menu => <Menu key={menu.name} name={menu.name} icon={menu.icon.src} />) 
    return (
        <ul className="mt-20 mx-7">
            {renderMenu}
        </ul>
    )
};

export default Navigation;