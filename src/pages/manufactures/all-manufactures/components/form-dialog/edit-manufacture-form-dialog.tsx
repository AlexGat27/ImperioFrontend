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
    emails: z.array(z.string().email('Неверный формат почты')),
    website: z.string(),
    address_loading: z.string(),
    note: z.string(),
    create_your_project: z.boolean(),
})

const Separator = () => (
    <div className="border-t border-gray-300 my-2" />
);

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
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-auto">
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
                            updateManufactureMutation.mutateAsync(data)
                        )}
                        className="flex flex-col gap-2">
                        <NameField control={form.control} isPending={updateManufactureMutation.isPending} />
                        <Separator />
                        <EmailsField form={form} isPending={updateManufactureMutation.isPending} />
                        <Separator />
                        <WebsiteField control={form.control} isPending={updateManufactureMutation.isPending} />
                        <Separator />
                        <AddressLoadingField control={form.control} isPending={updateManufactureMutation.isPending}/>
                        <Separator />
                        <NoteField control={form.control} isPending={updateManufactureMutation.isPending}/>
                        <Separator />
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
