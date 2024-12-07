import Image from "next/image";
import userImage from '../../../public/images/userImage.png';
import { HeaderLarge } from "./Heading";

export default function ProfileInfo({className}:{className?:string}) {
    return(
        <>
            <Image src={userImage} alt="user image" width={120} height={120} className="mt-5"/>
            <HeaderLarge className="mt-8 mobile:text-base">kevin karma</HeaderLarge>
            <p className="text-white text-base bg-[#2D3A3F] text-center mt-6 py-2 px-5 rounded-xl capitalize mobile:text-lg mobile:px-8">font-end engineer</p>
        </>
    )
}