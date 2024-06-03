import { childrenPromp, LinkProp } from "@/types";

function LinkBtn({children,className, href}:LinkProp) {
    return(
        <a className={`px-9 py-1 bg-[color:var(--menu-background)] rounded-md text-black font-bold hover:bg-[color:var(--background)] hover:text-white ${className}`} href={href} target="_blank">{children}</a>
    )
}

export default LinkBtn;