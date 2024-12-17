import { HeaderLarge, HeaderPrimary } from "../Shared/Heading";
import EachProject from "./EachProject";

function RecentProject() {
    const recentProjectData = [
        {
            name:"Hue Match",
            link: "https://hue-match.vercel.app/",
            description: "Web application built with React, Next.js, and TypeScript. It uses the ChatGPT to generate customized color palettes based on the user's selected colors, creating seasonal palettes and color groups to avoid."
        },
        {
            name:"OpTracker",
            link: "https://op-tracker-frontend.vercel.app/",
            description: "No more spreadsheets, OpTracker organize your jobs with a beautiful user interface. Designed to make job search fun by representing each job in colorful cards. Developed ruby-on-rails backend to store user’s information"
        }
    ];

    const renderProject = recentProjectData.map(project => <EachProject key={project.name} project={project}/>)
    return(
        <div className="mt-5">
            <HeaderPrimary>Recent Project</HeaderPrimary>
            <div className="flex w-full gap-x-6 mt-5 mobile:flex-wrap mobile:gap-y-6 mobile:mb-5">
                {renderProject}
            </div>
        </div>
    )
};

export default RecentProject;