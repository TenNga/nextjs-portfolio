import { childrenPromp, LinkProp } from "@/types";

function LinkBtn({children,className, href}:LinkProp) {
    return(
        <a className={`px-9 py-1 bg-[color:var(--menu-background)] rounded-md text-black font-bold ${className}`} href={href} target="_blank">{children}</a>
    )
}

export default LinkBtn;