import { cardPromp } from "@/types"
import React from "react"

export default function Card({children,className}:cardPromp) {
    return (
            <article className={`${className} bg-[#1B2022] rounded-xl`}>
                {children}
            </article>
            )
};