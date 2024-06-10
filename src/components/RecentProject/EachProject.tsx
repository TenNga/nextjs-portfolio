import { ProjectType } from "@/types/index.jsx";
import Card from "../Card";
import { HeaderSecondary } from "../Shared/Heading"
import LinkBtn from "../Shared/LinkBtn";
import { PrimaryPara } from "../Shared/Para";

function EachProject({project}: ProjectType) {
    return(
        <Card className="grow py-7 px-6">
            <header className="flex justify-between items-center mb-6">
                <HeaderSecondary>{project.name}</HeaderSecondary>
                <LinkBtn href={project.link}>Link</LinkBtn>
            </header>
            <PrimaryPara>{project.description}</PrimaryPara>
        </Card>
    )
};

export default EachProject;