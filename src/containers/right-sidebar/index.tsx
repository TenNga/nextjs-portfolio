import SkillHobby from "@/components/SkillHobby";
import ProfileInfo from "@/components/Shared/ProfileInfo";

export default function RightSidebar() {
    return (
        <aside className="basis-[35%] bg-[color:var(--content-background)] rounded-tl-[40px] px-16 box-border mobile:bg-transparent mobile:rounded-none mobile:basis-full">
            <div className="developer-title flex flex-col items-center">
               <ProfileInfo />
            </div>
            <div className="skill-hobby-container">
                <SkillHobby name="skills" />
                <SkillHobby name="hobby" />
            </div>
        </aside>
    )
};
