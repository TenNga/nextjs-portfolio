import { HeaderPrimary } from "@/components/Shared/Heading";
import DisplayResume from "./DisplayResume";

function Resume() {
    
    return(
        <article className="mx-auto">
            <HeaderPrimary>Resume page</HeaderPrimary>
            <div className="mh-[100px]">
                <DisplayResume pdfUrl={"/files/Kevin_Resume.pdf"}/>
            </div>
        </article>
    )
};

export default Resume;