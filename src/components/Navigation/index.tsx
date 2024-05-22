import Menu from "../Shared/menu";
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
    const renderMenu = mainMenu.map(menu => <Menu name={menu.name} icon={menu.icon.src} />) 
    return (
        <div>

        </div>
    )
};

export default Navigation;