import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {CheckboxInput} from "@/components/ui/input.tsx";

export const CreateYourProjectField = ({
                                    control,
                                    isPending,
                                }: {
    control: any
    isPending: boolean
}) => {
    return (
        <FormField
            control={control}
            name="create_your_project"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Создайте свой проект</FormLabel>
                    <FormControl>
                        <CheckboxInput
                            checked={field.value} // Связываем значение чекбокса с состоянием формы
                            disabled={isPending} // Управляем состоянием disabled
                            name={field.name} // Передаем имя поля формы
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}