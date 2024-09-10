import {z} from "zod";
import {useId, useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCreateManufactureMutation} from "@/utils/query-options/manufactures.ts";
import {useQuery} from "@tanstack/react-query";
import {listCitiesOptions} from "@/utils/query-options/cities.ts";
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
    AddressLoadingField, CreateYourProjectField, DropdownMenuField, EmailsField,
    NameField, NoteField,
    WebsiteField
} from "@/pages/manufactures/all-manufactures/components/form-dialog/form-fields";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form.tsx";

export const createManufactureSchema = z.object({
    name: z.string().min(1, 'Поле Название компании не может быть пустым'),
    emails: z.array(z.string().email('Неверный формат почты')),
    website: z.string(),
    address_loading: z.string(),
    note: z.string(),
    id_district: z.number(),
    id_region: z.number(),
    id_city: z.number(),
    create_your_project: z.boolean(),
    is_work: z.boolean(),
})

const Separator = () => (
    <div className="border-t border-gray-300 my-2" />
);

export const CreateManufactureFormDialog = () => {
    const formId = useId();
    const form = useForm<z.infer<typeof createManufactureSchema>>({
        resolver: zodResolver(createManufactureSchema),
        defaultValues: {
            name: '',
            emails: [],
            website: '',
            address_loading: '',
            note: '',
            create_your_project: false,
            id_district: 0,
            id_region: 0,
            id_city: 0,
            is_work: true
        },
    });
    const createManufactureMutation = useCreateManufactureMutation();
    const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

    // Fetch data for locations
    const { data: locations, isLoading } = useQuery(listCitiesOptions({parentid: undefined}));
    const districts = locations || [];
    const regions = useMemo(() => locations?.filter(loc => loc.parentid === selectedDistrict) || [], [locations, selectedDistrict]);
    const cities = useMemo(() => locations?.filter(loc => loc.parentid === selectedRegion) || [], [locations, selectedRegion]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="ml-auto">
                    Создать нового производителя
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-auto">
                <DialogHeader>
                    <DialogTitle>Создание компании</DialogTitle>
                    <DialogDescription>
                        Заполните форму и нажмите кнопку Создать
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id={formId}
                        onSubmit={form.handleSubmit((data) =>
                            createManufactureMutation.mutateAsync(data),
                        )}
                        className="flex flex-col gap-2"
                    >
                        <NameField control={form.control} isPending={createManufactureMutation.isPending} />
                        <Separator />
                        <EmailsField form={form} isPending={createManufactureMutation.isPending} />
                        <Separator />
                        <WebsiteField control={form.control} isPending={createManufactureMutation.isPending} />
                        <Separator />
                        <DropdownMenuField
                            control={form.control}
                            name="id_district"
                            label="Федеральный округ"
                            options={districts.map(d => ({ value: d.id, label: d.name }))}
                            placeholder={isLoading ? "Загрузка округов..." : "Выберите округ"}
                            disabled={createManufactureMutation.isPending || isLoading}
                            onChange={(value) => setSelectedDistrict(value)}
                        />
                        <Separator />
                        <DropdownMenuField
                            control={form.control}
                            name="id_region"
                            label="Регион"
                            options={regions.map(r => ({ value: r.id, label: r.name }))}
                            placeholder={selectedDistrict ? (isLoading ? "Загрузка регионов..." : "Выберите регион") : "Сначала выберите округ"}
                            disabled={!selectedDistrict || createManufactureMutation.isPending || isLoading}
                            onChange={(value) => setSelectedRegion(value)}
                        />
                        <Separator />
                        <DropdownMenuField
                            control={form.control}
                            name="id_city"
                            label="Город"
                            options={cities.map(c => ({ value: c.id, label: c.name }))}
                            placeholder={selectedRegion ? (isLoading ? "Загрузка городов..." : "Выберите город") : "Сначала выберите регион"}
                            disabled={!selectedRegion || createManufactureMutation.isPending || isLoading}
                        />
                        <Separator />
                        <AddressLoadingField control={form.control} isPending={createManufactureMutation.isPending} />
                        <Separator />
                        <NoteField control={form.control} isPending={createManufactureMutation.isPending} />
                        <Separator />
                        <CreateYourProjectField control={form.control} isPending={createManufactureMutation.isPending} />
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        disabled={createManufactureMutation.isPending}
                        form={formId}
                        type="submit"
                    >
                        Создать
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};