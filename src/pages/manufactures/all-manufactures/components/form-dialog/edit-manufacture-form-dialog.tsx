import { Button } from '@/components/ui/button.tsx'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog.tsx'
import {
    Form,
} from '@/components/ui/form.tsx'
import {
    useUpdateManufactureMutation,
} from '@/utils/query-options/manufactures.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import {useId} from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    AddressLoadingField,
    CreateYourProjectField, EmailsField,
    NameField, NoteField, WebsiteField
} from "@/pages/manufactures/all-manufactures/components/form-dialog/form-fields";
import {UpdateManufactureParams} from "@/api/endpoints";

export const editManufactureSchema = z.object({
    name: z.string().min(1, 'Поле Название компании не может быть пустым'),
    email: z.array(z.string().email('Неверный формат почты')),
    website: z.string(),
    address_loading: z.string(),
    note: z.string(),
    create_your_project: z.boolean(),
})

export const EditManufactureFormDialog = ({
                                              id,
                                              defaultValues,
                                              open,
                                              onOpenChange,
                                          }: {
    id: number
    defaultValues: UpdateManufactureParams
    open: boolean
    onOpenChange: (open: boolean) => void
}) => {
    const formId = useId()
    const form = useForm<z.infer<typeof editManufactureSchema>>({
        resolver: zodResolver(editManufactureSchema),
        defaultValues,
    })
    const updateManufactureMutation = useUpdateManufactureMutation(id)

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Редактирование компании</DialogTitle>
                    <DialogDescription>
                        Внесите изменения и нажмите кнопку Сохранить
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id={formId}
                        onSubmit={form.handleSubmit((data) =>
                            updateManufactureMutation.mutateAsync(data),
                        )}
                        className="flex flex-col gap-2">
                        <NameField control={form.control} isPending={updateManufactureMutation.isPending} />
                        <EmailsField form={form} isPending={updateManufactureMutation.isPending} />
                        <WebsiteField control={form.control} isPending={updateManufactureMutation.isPending} />
                        <AddressLoadingField control={form.control} isPending={updateManufactureMutation.isPending}/>
                        <NoteField control={form.control} isPending={updateManufactureMutation.isPending}/>
                        <CreateYourProjectField control={form.control} isPending={updateManufactureMutation.isPending}/>
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        disabled={updateManufactureMutation.isPending}
                        form={formId}
                        type="submit">
                        Сохранить
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
