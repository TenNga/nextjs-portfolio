'use client'
import { TableType } from "@/types";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Divider} from "@nextui-org/react";
import { linkData } from "./data";

function ListTable() {
    const renderRow = linkData.personal.map(link =>{
        return(
            <TableRow key="1"> 
                <TableCell>{link.title}</TableCell> 
                <TableCell>{link.icon}</TableCell> 
            </TableRow>
        );
    })
    return(
        <Table aria-label="Personal Links Table">
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