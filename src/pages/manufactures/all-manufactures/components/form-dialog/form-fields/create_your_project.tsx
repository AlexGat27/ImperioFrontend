import {UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {editManufactureSchema} from "@/pages/manufactures/all-manufactures/components";
import {CheckboxInput} from "@/components/ui/input.tsx";

export const CreateYourProjectField = ({
                                    form,
                                    isPending,
                                }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    return (
        <FormField
            control={form.control}
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