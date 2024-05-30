import { SkillHobbyType } from "@/types";
import Image from "next/image";
import {Tooltip} from "@nextui-org/react";

export const ItemLink = ({item}: {item: SkillHobbyType}) => {
    return(
        <Tooltip key={item.title} content={item.title} color="primary" classNames={{
            content: [
              "py-1 px-3",
              "text-black bg-white rounded",
            ],
          }}>
            <a className="grow shrink-0 basis-3/12" href={item.link} rel={`${item.title} links`} target="_blank">
                <Image src={item.icon} alt={item.title} width={52} height={52}/>
            </a>
        </Tooltip>
    )
}