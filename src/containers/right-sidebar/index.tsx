import Image from "next/image"
import userImage from '../../public/images/userImage.png';
import SkillHobby from "@/components/SkillHobby";
import { HeaderLarge } from "@/components/Shared/Heading";

export default function RightSidebar() {
    return (
        <div className="basis-[35%] bg-[color:var(--content-background)] rounded-tl-[40px] px-16 box-border mobile:bg-transparent mobile:rounded-none mobile:basis-full">
            <div className="developer-title flex flex-col items-center">
                <Image src={userImage} alt="user image" width={152} height={152} className="mt-5"/>
                <HeaderLarge className="mt-8 mobile:text-base">kevin karma</HeaderLarge>
                <p className="text-white text-xl bg-[#2D3A3F] text-center mt-6 py-2 px-20 rounded-xl capitalize mobile:text-lg mobile:px-8">font-end engineer</p>
            </div>
            <div className="skill-hobby-container">
                <SkillHobby name="skills" />
                <SkillHobby name="hobby" />
            </div>
        </div>
    )
};
