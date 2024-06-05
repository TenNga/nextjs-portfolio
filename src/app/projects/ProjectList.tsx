import { HeaderPrimary } from "@/components/Shared/Heading";
import Card from "../../components/Card";
import { projectData } from "./data";
import { PrimaryPara } from "@/components/Shared/Para";
import Image from "next/image";
import ProjectBody from "./ProjectBody";

function ProjectList() {
    const renderProject = projectData.map(project => {
        return (
            <Card className="text-white basis-[calc(33.33%-12px)] px-10 py-5">
                <HeaderPrimary className="mb-5">{project.title}</HeaderPrimary>
                {/* <PrimaryPara className="mb-5">{project.description}</PrimaryPara> */}
                <ProjectBody project={project}/>
                <Image src={project.image} alt={project.title} className="mx-auto mt-5 object-contain w-[200px] h-[150px]"/>
            </Card>
        )
    })
    return(
        <section className="flex gap-3 mx-5 mt-5 flex-wrap mx-[10%]">
            {renderProject}
        </section>
    )
};

export default ProjectList;