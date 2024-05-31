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