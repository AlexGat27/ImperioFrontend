import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {useQuery} from "@tanstack/react-query";
import {
    listManufacturesOptions,
    useDeleteManufactureMutation
} from "@/utils/query-options/manufactures.ts";
import {ManufacturesDto} from "@/api/types.ts";
import {useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {EllipsisVerticalIcon, TrashIcon, UserIcon} from "lucide-react";
import {
    AlertDialog, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx";
import {CreateManufactureFormDialog, EditManufactureFormDialog} from "@/pages/manufactures/all-manufactures/components";


const ManufacturesTable = () => {
    const manufacturesQuery = useQuery(listManufacturesOptions())

    if (manufacturesQuery.isPending) {
        return null
    }

    if (manufacturesQuery.isError) {
        return null
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Название компании</TableHead>
                    <TableHead>Контактные лица</TableHead>
                    <TableHead>Сайт</TableHead>
                    <TableHead>Регион</TableHead>
                    <TableHead>Город</TableHead>
                    <TableHead>Адрес погрузки</TableHead>
                    <TableHead>Информация</TableHead>
                    <TableHead className="w-12"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {manufacturesQuery.data.filter(manufacture => manufacture.is_work).map((manufacture) => (
                    <TableRow key={manufacture.id}>
                        <TableCell>{manufacture.id}</TableCell>
                        <TableCell>{manufacture.name}</TableCell>
                        <TableCell>Контакты</TableCell>
                        <TableCell>{manufacture.website}</TableCell>
                        <TableCell>{manufacture.region}</TableCell>
                        <TableCell>{manufacture.city}</TableCell>
                        <TableCell>{manufacture.address_loading}</TableCell>
                        <TableCell>{manufacture.note}</TableCell>
                        <TableCell className="w-12">
                            <ActionsDropdownMenu manufacture={manufacture} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

function ActionsDropdownMenu({ manufacture }: { manufacture: ManufacturesDto }) {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isRemoveOpen, setIsRemoveOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <EllipsisVerticalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                            <UserIcon className="mr-2 h-4 w-4" />
                            <span>Редактировать</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup onClick={() => setIsRemoveOpen(true)}>
                        <DropdownMenuItem className="text-red-500 focus:text-red-600">
                            <TrashIcon className="mr-2 h-4 w-4" />
                            <span>Удалить производителя</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <EditManufactureFormDialog
                id={manufacture.id}
                open={isEditOpen}
                onOpenChange={setIsEditOpen}
                defaultValues={manufacture}
            />
            <DeleteManufactureDialog
                open={isRemoveOpen}
                onOpenChange={setIsRemoveOpen}
                manufactureId={manufacture.id}
            />
        </>
    )
}

const DeleteManufactureDialog = ({
                              open,
                              onOpenChange,
                              manufactureId,
                          }: {
    open: boolean
    onOpenChange: (open: boolean) => void
    manufactureId: number
}) => {
    const deleteManufactureMutation = useDeleteManufactureMutation(manufactureId)

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Это действие не может быть отменено. Это приведет к безвозвратному
                        удалению данного пользователя и удалинию данные с серверов.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleteManufactureMutation.isPending}>
                        Отменить
                    </AlertDialogCancel>
                    <Button
                        disabled={deleteManufactureMutation.isPending}
                        variant="destructive"
                        onClick={() =>
                            deleteManufactureMutation.mutateAsync().then(() => onOpenChange(false))
                        }
                    >
                        Удалить
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export const ManufacturesPage = () => {
    return (
        <main className="flex flex-col">
            <div className="p-4">
                {/* Диалоговое окно для создания нового производителя */}
                <CreateManufactureFormDialog/>
            </div>
            <ManufacturesTable/>
        </main>
    )
}