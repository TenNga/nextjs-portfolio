import Image from "next/image"
import userImage from '../../public/images/userImage.png';
import SkillHobby from "@/components/SkillHobby";

export default function RightSidebar() {
    return (
        <div className="grow-[2] bg-[color:var(--content-background)] rounded-tl-[40px]">
            <div className="developer-title flex flex-col items-center">
                <Image src={userImage} alt="user image" width={152} height={152} className="mt-20"/>
                <h1 className="text-white text-2xl font-medium mt-8 capitalize">kevin karma</h1>
                <p className="text-white text-xl bg-[#2D3A3F] text-center mt-6 py-2 px-20 rounded-xl capitalize">font-end engineer</p>
            </div>
            <div className="skill-hobby-container">
                <SkillHobby />
            </div>
        </div>
    )
};
