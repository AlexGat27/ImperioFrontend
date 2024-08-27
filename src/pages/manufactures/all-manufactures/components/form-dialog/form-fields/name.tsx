import {UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import { editManufactureSchema } from '../edit-manufacture-form-dialog'

export const NameField = ({
                       form,
                       isPending,
                   }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    return (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Название</FormLabel>
                    <FormControl>
                        <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}