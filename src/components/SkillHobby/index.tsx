import { skills } from "./data";
import { hobbies } from "./data";
import { ItemLink } from "./ItemLink";

function SkillHobby({name}:{name:string}) {
    
    const renderSkills = skills.map(skill => <ItemLink key={skill.title} item={skill} />);
    const renderHobbies = hobbies.map(hobby => <ItemLink key={hobby.title} item={hobby} />);

    return(
        <div className="mt-10">
            <h1 className="text-white font-medium text-xl capitalize">{name}</h1>
            <div className="flex flex-wrap mt-8 gap-y-4">
                {name === 'skills'? renderSkills : renderHobbies}
            </div>
        </div>
    )
};

export default SkillHobby;