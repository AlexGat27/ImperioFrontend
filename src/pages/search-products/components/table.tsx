import {SearchProductsParams} from "@/api/endpoints";
import {useQuery} from "@tanstack/react-query";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {searchProductsOptions} from "@/utils/query-options/products.ts";
import {ProductsDto} from "@/api/types.ts";

export const SearchProductsTable = (params: SearchProductsParams) => {
    const productsQuery = useQuery(searchProductsOptions(params))

    if (productsQuery.isPending) {
        return null
    }

    if (productsQuery.isError) {
        return null
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-12">Популярное</TableHead>
                    <TableHead>Название</TableHead>
                    <TableHead>Длина</TableHead>
                    <TableHead>Ширина</TableHead>
                    <TableHead>Высота</TableHead>
                    <TableHead>Вес</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead className="w-12"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {productsQuery.data.map((product: ProductsDto, index) => (
                    <TableRow key={index}>
                        <TableCell></TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.length}</TableCell>
                        <TableCell>{product.width}</TableCell>
                        <TableCell>{product.height}</TableCell>
                        <TableCell>{product.weight}</TableCell>
                        <TableCell>{product.category_name}</TableCell>
                        <TableCell>...</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}