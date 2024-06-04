import MainHobby from "@/components/MainHobby";
import HistoryTimeline from "@/components/HistoryTimeline.tsx";
import RecentProject from "@/components/RecentProject";

function MainSection() {

    return(
        <div className="mt-5 mx-6 basis-[65%] mobile:basis-full">
            <MainHobby />
            <HistoryTimeline />
            <RecentProject />
        </div>
    )
};

export default MainSection;