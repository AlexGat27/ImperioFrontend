import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";

export const NameField = ({
                       control,
                       isPending,
                   }: {
    control: any,
    isPending: boolean
}) => {
    return (
        <FormField
            control={control}
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