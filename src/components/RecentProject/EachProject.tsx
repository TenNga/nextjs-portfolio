import { ProjectType } from "@/types/index.jsx";
import Card from "../Card.tsx";
import { HeaderSecondary } from "../Shared/Heading"
import LinkBtn from "../Shared/LinkBtn";

function EachProject({project}: ProjectType) {
    return(
        <Card className="grow py-7 px-6">
            <div className="flex justify-between items-center mb-6">
                <HeaderSecondary>{project.name}</HeaderSecondary>
                <LinkBtn href={project.link}>Link</LinkBtn>
            </div>
            <p className="text-white">{project.description}</p>
        </Card>
    )
};

export default EachProject;