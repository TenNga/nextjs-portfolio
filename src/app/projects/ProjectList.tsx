import { HeaderPrimary } from "@/components/Shared/Heading";
import Card from "../../components/Card";
import { projectData } from "./data";
import { PrimaryPara } from "@/components/Shared/Para";
import Image from "next/image";

function ProjectList() {
    const renderProject = projectData.map(project => {
        return (
            <Card className="text-white basis-[calc(50%-12px)]">
                <HeaderPrimary>{project.title}</HeaderPrimary>
                <PrimaryPara>{project.description}</PrimaryPara>
                <Image src={project.image} alt={project.title} width={80}/>
            </Card>
        )
    })
    return(
        <section className="flex gap-3 mx-5 mt-10 flex-wrap">
            {renderProject}
        </section>
    )
};

export default ProjectList;