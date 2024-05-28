import { StaticImageData } from 'next/image';
import {IconType} from 'react-icons';

export type MenuIconType = {
    name: string,
    icon: JSX.Element | StaticImageData,
    path: string
}

export type ClassProps = {
    className: string
}

export type cardPromp = {
    children: React.ReactNode,
    className?: string
}