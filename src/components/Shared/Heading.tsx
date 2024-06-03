import { childrenPromp } from "@/types"

export const HeaderLarge = ({children,className}:childrenPromp) => {
    return(
        <h1 className={`capitalize text-white font-medium text-2xl ${className}`}>{children}</h1>
    )
}

export const HeaderPrimary = ({children, className}:childrenPromp) => {
    return(
        <h1 className={`capitalize text-white font-medium text-xl ${className}`}>{children}</h1>
    )
}

export const HeaderSecondary = ({children, className}:childrenPromp) => {
    return(
        <h1 className={`capitalize text-white font-medium text-l ${className}`}>{children}</h1>
    )
}