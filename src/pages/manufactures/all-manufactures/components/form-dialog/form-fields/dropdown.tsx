import { useController } from "react-hook-form";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Типы для опций в dropdown
type Option = {
    value: null | number;
    label: string;
};

// Пропсы для DropdownMenuField
export const DropdownMenuField = ({
                                      control,
                                      name,
                                      label,
                                      options,
                                      placeholder,
                                      disabled,
                                      onChange, // Добавляем onChange
                                  }: {
    control: any;
    name: string;
    label: string;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    onChange?: (value: null | number) => void; // Функция onChange
}) => {
    const { field: { value, onChange: fieldOnChange } } = useController({
        name,
        control,
    });

    // Обработка изменения выбора
    const handleChange = (value: null | number) => {
        fieldOnChange(value); // Обновляем значение в форме
        if (onChange) {
            onChange(value); // Вызываем дополнительный обработчик
        }
    };

    return (
        <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button disabled={disabled}>
                        {value || placeholder || `Выберите ${label.toLowerCase()}`}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>{label}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {options.map((option) => (
                        <DropdownMenuItem
                            key={option.value}
                            onClick={() => handleChange(option.value)}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
