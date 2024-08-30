import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const NoteField = ({
                       control,
                       isPending,
                   }: {
    control: any
    isPending: boolean
}) => {
    return (
        <FormField
            control={control}
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
