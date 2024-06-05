import { HeaderPrimary } from "@/components/Shared/Heading";
import Card from "../../components/Card";
import { projectData } from "./data";
import { PrimaryPara } from "@/components/Shared/Para";
import Image from "next/image";
import ProjectBody from "./ProjectBody";
import { FaGithub } from "react-icons/fa6";
import { MdOndemandVideo } from "react-icons/md";

function ProjectList() {
    const renderProject = projectData.map(project => {
        return (
            <Card className="text-white basis-[calc(33.33%-12px)] px-10 py-5 mobile:basis-full">
                <section className="flex justify-between items-center mb-5">
                    <HeaderPrimary>{project.title}</HeaderPrimary>
                    <div className="flex gap-x-2 justify-center">
                        <a href={project.link} target="_blank" rel="Project link to Github" className="hover:scale-125"><FaGithub/></a>
                        {project.videoLink && <a href={project.videoLink} target="_blank" rel="Project link to Github" className="hover:scale-125"><MdOndemandVideo/></a>}
                    </div>
                </section>
                {/* <PrimaryPara className="mb-5">{project.description}</PrimaryPara> */}
                <ProjectBody project={project}/>
                <Image src={project.image} alt={project.title} className="mx-auto mt-5 object-contain w-[200px] h-[150px]"/>
            </Card>
        )
    })
    return(
        <section className="flex gap-3 m-5 mt-5 flex-wrap mx-[10%]">
            {renderProject}
        </section>
    )
};

export default ProjectList;