import { HeaderLarge, HeaderPrimary } from "@/components/Shared/Heading";
import { PrimaryPara } from "@/components/Shared/Para";
import ProjectList from "./ProjectList";

function Projects() {
    return(
        <article className="w-full text-center content-center">
            <section>
                <HeaderLarge>My Favorite Projects</HeaderLarge>
                <PrimaryPara>Want to see more, visit <a href="https://github.com/TenNga" rel="Kevin Github URL">GitHub</a></PrimaryPara>
            </section>
            <ProjectList />
        </article>
    )
};

export default Projects;