import {UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {useState} from "react";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {editManufactureSchema} from "@/pages/manufactures/all-manufactures/components";

export const EmailsField = ({
                        form,
                        isPending,
                    }: {
    form: UseFormReturn<z.infer<typeof editManufactureSchema>>
    isPending: boolean
}) => {
    const [email, setEmail] = useState('')

    const handleAddEmail = () => {
        const currentEmails = form.getValues('email')
        form.setValue('email', [...currentEmails, email])
        setEmail('')
    }

    const handleRemoveEmail = (emailToRemove: string) => {
        const currentEmails = form.getValues('email')
        form.setValue('email', currentEmails.filter((e) => e !== emailToRemove))
    }

    return (
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Электронные почты</FormLabel>
                    <FormControl>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введите email"
                            disabled={isPending}
                        />
                        <Button type="button" onClick={handleAddEmail} disabled={isPending}>
                            Добавить
                        </Button>
                    </FormControl>
                    <FormMessage />
                    <div>
                        {field.value.map((email: string) => (
                            <div key={email} className="flex items-center">
                                <span>{email}</span>
                                <Button
                                    type="button"
                                    onClick={() => handleRemoveEmail(email)}
                                    disabled={isPending}
                                >
                                    Удалить
                                </Button>
                            </div>
                        ))}
                    </div>
                </FormItem>
            )}
        />
    )
}