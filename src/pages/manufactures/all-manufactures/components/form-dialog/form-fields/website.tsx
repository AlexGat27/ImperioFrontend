import {UseFormReturn} from "react-hook-form";
import {editManufactureSchema} from "@/pages/manufactures/all-manufactures/components";
import {z} from "zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";

export const WebsiteField = ({
                          form,
                          isPending,
                      }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    return (
        <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Вебсайт</FormLabel>
                    <FormControl>
                        <Input type="url" disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
