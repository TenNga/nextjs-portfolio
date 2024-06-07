import { FaLinkedin,FaShopify,FaGithub,FaFigma,FaYoutube,FaRegNewspaper,FaMailBulk } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

export const linkData =
    {
        personal: [
            {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/kevin-karma-b57007210',
                icon: FaLinkedin
            },
            {
                title: 'Github',
                path: 'https://github.com/TenNga',
                icon: FaGithub
            },
            {
                title: 'Figma',
                path: 'https://www.figma.com/@kevinkarma',
                icon: FaFigma
            },
            {
                title: 'Shopify',
                path: 'https://community.shopify.com/c/user/viewprofilepage/user-id/1072323',
                icon: FaShopify
            },
        ],
        others: [
            {
                title: 'Learning area',
                path: 'https://www.udemy.com/',
                icon: SiUdemy
            },
            {
                title: 'CSS King',
                path: 'https://www.youtube.com/@KevinPowell',
                icon: FaYoutube
            },
            {
                title: 'Keep updated: TLDR',
                path: 'https://tldr.tech/webdev',
                icon: FaRegNewspaper
            },
            {
                title: 'Keep updated: Frontend Focus',
                path: 'https://frontendfoc.us/',
                icon: FaMailBulk
            },
        ]
    };