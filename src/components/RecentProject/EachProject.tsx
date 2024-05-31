import { ProjectType } from "@/types/index.jsx";
import Card from "../Card.tsx";
import { HeaderPrimary } from "../Shared/Heading.jsx";

function EachProject({project}: ProjectType) {
    return(
        <Card className="grow py-7 px-6">
            <div>Hello</div>
            {/* <HeaderPrimary>hello</HeaderPrimary> */}
        </Card>
    )
};

export default EachProject;