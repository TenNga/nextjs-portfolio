'use client'
import React from "react";
import { TableRowType } from "@/types";
import { linkData } from "./data";
import Card from "@/components/Card";
import { HeaderPrimary } from "@/components/Shared/Heading";

function ListTable() {
    const RenderPersonalLink = ({category}:{category:string}) => {
        let currentCategory;
        if(category == 'personal')
            currentCategory = linkData.personal;
        else 
            currentCategory = linkData.others;

        return currentCategory.map((link:TableRowType) =>{
            return(
                <a className="" href={link.path} target="_blank" rel="noopener noreferrer">
                    <Card className="flex justify-center items-center max-w-[400px] text-white mx-auto py-4 px-7 my-4 pointer hover:scale-105">
                        <h1 className="grow text-left">{link.title}</h1>
                        <a className="grow flex justify-end" href={link.path} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    </Card>
                </a>
            );
        })
    }

    return(
        <section>
            <article>
                <HeaderPrimary>Personal Links.</HeaderPrimary>
                <RenderPersonalLink category="personal"/>
            </article>
            <article>
                <HeaderPrimary>More Interesting Links.</HeaderPrimary>
                <RenderPersonalLink category="other" />
            </article>
        </section>
    )
}

export default ListTable;