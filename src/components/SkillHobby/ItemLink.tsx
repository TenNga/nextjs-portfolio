import { SkillHobbyType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ItemLink = ({item}: {item: SkillHobbyType}) => {
    return(
        <Link className="grow shrink-0 basis-3/12" key={item.title} href={item.link} rel={`${item.title} links`}>
            <Image src={item.icon} alt={item.title} width={52} height={52}/>
        </Link>
    )
}