import { MenuIconType } from "@/types";

function Menu({name, icon}:MenuIconType) {
    return(
        <li>
            <img src={icon} alt={`${name} Menu icon`} />
            {name}
        </li>
    )
};

export default Menu;