import { ClassProps } from "@/types";
import MainHobby from "./MainHobby";
import HistoryTimeline from "./HistoryTimeline";

function MainSection() {

    return(
        <div className="mt-20 basis-3/5">
            <MainHobby />
            <HistoryTimeline />
        </div>
    )
};

export default MainSection;