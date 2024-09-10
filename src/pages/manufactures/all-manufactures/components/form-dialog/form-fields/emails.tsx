import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

// Correct Prop Types
export const EmailsField = ({
                                form,
                                isPending,
                            }: {
    form: UseFormReturn<z.infer<any>>;  // Generic typing to adapt to any Zod schema
    isPending: boolean;
}) => {
    const [email, setEmail] = useState<string>('');  // Email input state

    // Function to add an email to the form
    const handleAddEmail = () => {
        if (email) {
            const currentEmails = form.getValues('emails') || [];  // Ensure emails list is initialized
            form.setValue('emails', [...currentEmails, email]);  // Add new email
            setEmail('');  // Reset input field
        }
    };

    // Function to remove a specific email
    const handleRemoveEmail = (emailToRemove: string) => {
        const currentEmails = form.getValues('emails') || [];  // Fetch current emails list
        form.setValue('emails', currentEmails.filter((e) => e !== emailToRemove));  // Remove email
    };

    return (
        <FormField
            control={form.control}
            name="emails"
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormLabel>Электронные почты</FormLabel>
                    <FormControl>
                        <div className="flex space-x-2">
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  // Update input field
                                placeholder="Введите email"
                                disabled={isPending}
                            />
                            <Button
                                type="button"
                                onClick={handleAddEmail}
                                disabled={isPending || !email}  // Disable if no input or pending
                            >
                                Добавить
                            </Button>
                        </div>
                    </FormControl>
                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                    <div className="mt-2 space-y-2">
                        {field.value && field.value.map((email: string, index: number) => (
                            <div key={index} className="flex items-center justify-between">
                                <span>{email}</span>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => handleRemoveEmail(email)}  // Remove email
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
    );
};
