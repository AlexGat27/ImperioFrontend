import * as React from "react"

import { cn } from "@/utils/cn"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


interface CheckboxInputProps {
    checked: boolean;
    disabled?: boolean;
    className?: string;
    name: string;
}

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
    ({ className, checked, disabled, name }, ref) => {
        return (
            <input
                type="checkbox"
                checked={checked} // Используем checked для булевого значения
                name={name} // Передаем имя поля, как ожидается в форме
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                disabled={disabled} // Управляем состоянием disabled
                ref={ref}
            />
        )
    }
);

export { Input, CheckboxInput }
