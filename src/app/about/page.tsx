import MainHobby from "@/components/MainHobby";
import { HeaderLarge } from "@/components/Shared/Heading";
import ProfileInfo from "@/components/Shared/ProfileInfo";

function About() {
    return (
        <div className="w-full mx-5 text-center content-center mx-[20%] mobile:mx-4">
            <div className="flex flex-col items-center w-full">
                <ProfileInfo />
            </div>
            <MainHobby className="mt-5 mobile:flex-wrap mobile:mx-2"/>
            <div className="mt-5">
                <HeaderLarge>Hello, I'm Kevin Karma</HeaderLarge>
                <p className="mt-5 w-1/2 mx-auto text-l text-[color:var(--true-white)] mobile:w-full">Experienced Front-End Developer with 3 years' expertise in Javascript, HTML, CSS, Typescript, Tailwind, React and NextJS (coming soon). Skilled in responsive design and UI/UX principles. Collaborates effectively with cross-functional teams to deliver high-quality applications. Passionate about staying updated with the latest technologies to drive innovation.</p>
            </div>
        </div>
    )
};

export default About;