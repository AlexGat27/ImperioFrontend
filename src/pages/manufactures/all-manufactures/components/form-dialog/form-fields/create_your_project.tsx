import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { CheckboxInput } from "@/components/ui/input.tsx";
import { Controller } from "react-hook-form";

export const CreateYourProjectField = ({
                                           control,
                                           isPending,
                                       }: {
    control: any;
    isPending: boolean;
}) => {
    return (
        <FormField
            control={control}
            name="create_your_project"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Создайте свой проект</FormLabel>
                    <FormControl>
                        {/* Используем Controller для связи с react-hook-form */}
                        <Controller
                            control={control}
                            name={field.name}
                            render={({ field: controllerField }) => (
                                <CheckboxInput
                                    checked={controllerField.value}
                                    onChange={controllerField.onChange} // Устанавливаем onChange для обновления значения
                                    disabled={isPending}
                                    name={controllerField.name} // Передаем имя поля формы
                                />
                            )}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
