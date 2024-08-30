import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";

export const WebsiteField = ({
                          control,
                          isPending,
                      }: {
    control: any
    isPending: boolean
}) => {
    return (
        <FormField
            control={control}
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
