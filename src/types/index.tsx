import { StaticImageData } from 'next/image';
import React from 'react';
import {IconType} from 'react-icons';

export type MenuIconType = {
    name: string,
    icon: JSX.Element,
    path: string
}

export type ClassProps = {
    className: string
}

export type cardPromp = {
    children: React.ReactNode,
    className?: string
}

export interface childrenPromp extends cardPromp {}

export type SkillHobbyType = {
    title: string,
    link: string,
    icon: StaticImageData
}

export type ProjectType = {
    project: {
        name: string,
        link: string,
        description: string,
    }
}

export type ProjectDetailType = {
    project: {
        title: string;
        description: string;
        link: string;
        image: StaticImageData;
        videoLink?: string
    }
}

export type TableRowType = {
        title: string,
        path: string,
        icon: React.ReactNode
}

export interface LinkProp extends cardPromp {
    href: string
}
