import { childrenPromp } from "@/types"

export const PrimaryPara = ({className,children}:childrenPromp) => {
    return(
        <p className={`text-white text-balance ${className}`}>{children}</p>
    )
}