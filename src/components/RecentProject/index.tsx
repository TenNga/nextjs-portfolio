import { HeaderLarge, HeaderPrimary } from "../Shared/Heading";
import EachProject from "./EachProject";

function RecentProject() {
    const recentProjectData = [
        {
            name:"OpTracker",
            link: "https://github.com/TenNga/op-tracker-frontend",
            description: "No more spreadsheets, OpTracker organize your jobs with a beautiful user interface. Designed to make job search fun by representing each job in colorful cards. Developed ruby-on-rails back-end to store user’s information"
        },
        {
            name:"InvenTracker",
            link: "https://github.com/TenNga/inventracker-frontend",
            description: "Developed the app using React native to simplify the process of tracking product/item and ability to deploy on iOS or Android platforms. Implemented scanner to save time when searching on inventory items by 50%."
        }
    ];

    const renderProject = recentProjectData.map(project => <EachProject key={project.name} project={project}/>)
    return(
        <div className="mt-5">
            <HeaderPrimary>Recent Project</HeaderPrimary>
            <div className="flex w-full gap-x-6 mt-5">
                {renderProject}
            </div>
        </div>
    )
};

export default RecentProject;