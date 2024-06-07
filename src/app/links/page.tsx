import { HeaderLarge } from "@/components/Shared/Heading";
import {Divider} from "@nextui-org/react";
import ListTable from "./ListTable";
import { linkData } from "./data";

function Links() {
    return(
        <div className="mt-20 text-center w-full">
            <HeaderLarge>List of related Links</HeaderLarge>
            <Divider className="my-4"/>
            <ListTable />
        </div>
    )
};

export default Links;