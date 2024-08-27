import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import {editManufactureSchema} from "@/pages/manufactures/all-manufactures/components";

export const NoteField = ({
                       form,
                       isPending,
                   }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    return (
        <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Примечание</FormLabel>
                    <FormControl>
                        <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
