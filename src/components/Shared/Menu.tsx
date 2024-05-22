import { MenuIconType } from "@/types";

function Menu({name, icon}:MenuIconType) {
    return(
        <li className="flex items-center w-[180px] text-xs capitalize mt-[28px] pl-[48px]">
            <img className="mr-[12px]" src={icon} alt={`${name} Menu icon`} />
            {name}
        </li>
    )
};

export default Menu;