import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";

export const AddressLoadingField = ({
                          control,
                          isPending,
                      }: {
    control: any
    isPending: boolean
}) => {
    return (
        <FormField
            control={control}
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