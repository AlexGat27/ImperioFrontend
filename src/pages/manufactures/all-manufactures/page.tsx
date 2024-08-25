import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {useQuery} from "@tanstack/react-query";


const ManufacturesTable = () => {
    const usersQuery = useQuery(listUsersOptions())

    if (usersQuery.isPending) {
        return null
    }

    if (usersQuery.isError) {
        return null
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Имя</TableHead>
                    <TableHead>Фамилия</TableHead>
                    <TableHead>Логин</TableHead>
                    <TableHead>Роли</TableHead>
                    <TableHead className="w-12"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

            </TableBody>
        </Table>
    )
}