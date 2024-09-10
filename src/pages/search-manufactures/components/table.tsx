import {SearchManufacturesParams} from "@/api/endpoints";
import {useQuery} from "@tanstack/react-query";
import {searchManufacturesOptions} from "@/utils/query-options/manufactures.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

export const SearchManufacturesTable = (params: SearchManufacturesParams) => {
    const manufacturesQuery = useQuery(searchManufacturesOptions(params))

    if (manufacturesQuery.isPending) {
        return null
    }

    if (manufacturesQuery.isError) {
        return null
    }

    return (
        <Table className="mt-4">
            <TableHeader>
                <TableRow>
                    <TableHead>Название категории</TableHead>
                    <TableHead>Производитель</TableHead>
                    <TableHead>Сайт</TableHead>
                    <TableHead>Контактные лица</TableHead>
                    <TableHead>Федеральный округ</TableHead>
                    <TableHead>Регион</TableHead>
                    <TableHead>Город</TableHead>
                    <TableHead className="w-12"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {manufacturesQuery.data.map((manufacture) => (
                    <TableRow key={manufacture.id}>
                        <TableCell>{manufacture.category}</TableCell>
                        <TableCell>{manufacture.name}</TableCell>
                        <TableCell>{manufacture.website}</TableCell>
                        <TableCell>Контакты</TableCell>
                        <TableCell>{manufacture.district}</TableCell>
                        <TableCell>{manufacture.region}</TableCell>
                        <TableCell>{manufacture.city}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}