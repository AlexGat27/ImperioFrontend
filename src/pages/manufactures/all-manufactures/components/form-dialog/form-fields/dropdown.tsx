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
import {useState} from "react";

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
    const { field: {onChange: fieldOnChange } } = useController({
        name,
        control,
    });
    const [valueLabel, setValueLabel] = useState<string | null>(null);

    // Обработка изменения выбора
    const handleChange = (option: null | Option) => {
        fieldOnChange(option?.value); // Обновляем значение в форме
        setValueLabel(option?.label || null);
        if (onChange) {
            onChange(option?.value || null); // Вызываем дополнительный обработчик
        }
    };

    return (
        <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button disabled={disabled}>
                        {valueLabel || placeholder || `Выберите ${label.toLowerCase()}`}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 max-h-64 overflow-y-auto">
                    <DropdownMenuLabel>{label}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {options.map((option) => (
                        <DropdownMenuItem
                            key={option.value}
                            onClick={() => handleChange(option)}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
