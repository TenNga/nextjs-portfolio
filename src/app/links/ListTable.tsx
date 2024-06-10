'use client'
import React from "react";
import { TableRowType } from "@/types";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Divider} from "@nextui-org/react";
import { linkData } from "./data";

function ListTable() {
    const renderRow = linkData.personal.map((link:TableRowType) =>{
        return(
            <TableRow key="1"> 
                <TableCell>{link.title}</TableCell> 
                <TableCell>{link.icon}</TableCell> 
            </TableRow>
        );
    })
    const classNames = React.useMemo(
        () => ({
          wrapper: ["max-h-[382px]", "max-w-3xl"],
          th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
          td: [
            // changing the rows border radius
            // first
            "group-data-[first=true]:first:before:rounded-none",
            "group-data-[first=true]:last:before:rounded-none",
            // middle
            "group-data-[middle=true]:before:rounded-none",
            // last
            "group-data-[last=true]:first:before:rounded-none",
            "group-data-[last=true]:last:before:rounded-none",
          ],
        }),
        [],
      );
    return(
        <Table classNames={classNames} aria-label="Personal Links Table">
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>LINK</TableColumn>
            </TableHeader>
            <TableBody>
                {renderRow}
            </TableBody>
        </Table>
    )
}

export default ListTable;