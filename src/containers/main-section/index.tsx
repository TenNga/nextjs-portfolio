import MainHobby from "@/components/MainHobby";
import GithubActivityGraph from "@/components/GithubActivityGraph.tsx";
import RecentProject from "@/components/RecentProject";

function MainSection() {

    return(
        <div className="mt-5 mx-6 basis-[65%] mobile:basis-full">
            <MainHobby />
            <GithubActivityGraph />
            <RecentProject />
        </div>
    )
};

export default MainSection;