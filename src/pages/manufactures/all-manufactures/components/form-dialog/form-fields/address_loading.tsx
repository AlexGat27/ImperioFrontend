import {UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {editManufactureSchema} from "@/pages/manufactures/all-manufactures/components";

export const AddressLoadingField = ({
                          form,
                          isPending,
                      }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    return (
        <FormField
            control={form.control}
            name="address_loading"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Адрес</FormLabel>
                    <FormControl>
                        <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}