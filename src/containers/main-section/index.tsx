import { ClassProps } from "@/types";
import MainHobby from "./MainHobby";

function MainSection({className}:ClassProps) {

    return(
        <div className={className}>
            <MainHobby />
            Main Section Content
        </div>
    )
};

export default MainSection;