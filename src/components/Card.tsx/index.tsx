import { childPromp } from "@/types"
import React from "react"

export default function Card({children}:childPromp) {
    return (
            <div className="bg-[#1B2022] rounded-xl">
                {children}
            </div>
            )
};