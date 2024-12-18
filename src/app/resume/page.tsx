import DisplayResume from "./DisplayResume";
import LinkBtn from "@/components/Shared/LinkBtn";

function Resume() {
    
    return(
        <article className="flex justify-center items-center w-full">
           <div className="mobile:mt-10">
                <LinkBtn href="/files/Kevin_Resume.pdf" download="Kevin_Resume">
                    Download Resume
                </LinkBtn>
            
                {/* <DisplayResume pdfUrl={"/files/Kevin_Resume.pdf"}/> */}
            </div>
        </article>
    )
};

export default Resume;