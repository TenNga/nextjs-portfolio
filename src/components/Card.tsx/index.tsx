import { cardPromp } from "@/types"
import React from "react"

export default function Card({children,className}:cardPromp) {
    return (
            <div className={`${className} bg-[#1B2022] rounded-xl`}>
                {children}
            </div>
            )
};