import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { listCitiesOptions } from "@/utils/query-options/cities.ts";
import {SearchManufacturesTable} from "./components/table.tsx";
import {SearchManufacturesParams} from "@/api/endpoints"; // Adjust the import path as necessary



const ManufacturerSearchPage = () => {
    const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
    const [selectedCity, setSelectedCity] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");
    const [searchParams, setSearchParams] = useState<SearchManufacturesParams | null>(null);

    // Fetch locations data
    const { data: locations } = useQuery(listCitiesOptions({parentid: undefined}));
    const districts = locations || [];
    const regions = useMemo(() => locations?.filter(loc => loc.parentid === selectedDistrict) || [], [locations, selectedDistrict]);
    const cities = useMemo(() => locations?.filter(loc => loc.parentid === selectedRegion) || [], [locations, selectedRegion]);

    const performSearch =  () => {
        if (!category && !selectedDistrict && !selectedRegion && !selectedCity) return;
        const params: SearchManufacturesParams = {
            ...(category ? { category } : {}),
            ...(selectedDistrict ? { district: districts.find(d => d.id === selectedDistrict)?.name } : {}),
            ...(selectedRegion ? { region: regions.find(r => r.id === selectedRegion)?.name } : {}),
            ...(selectedCity ? { city: cities.find(c => c.id === selectedCity)?.name } : {}),
        };
        setSearchParams(params);
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Поиск производителей</h1>

            <div className="space-y-4">
                <Input
                    placeholder="Введите категорию"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <div className="flex justify-between">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="w-1/4 p-2 border rounded-md text-left">
                                {selectedDistrict ? districts.find(d => d.id === selectedDistrict)?.name : "Выберите федеральный округ"}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-72 overflow-y-auto">
                            <DropdownMenuLabel>Федеральный округ</DropdownMenuLabel>
                            {districts?.map((district) => (
                                <DropdownMenuItem
                                    key={district.id}
                                    onClick={() => setSelectedDistrict(district.id)}
                                >
                                    {district.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="w-1/4 p-2 border rounded-md text-left"
                                disabled={!selectedDistrict}
                            >
                                {selectedRegion
                                    ? regions?.find((r) => r.id === selectedRegion)?.name
                                    : "Выберите регион"}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-72 overflow-y-auto">
                            <DropdownMenuLabel>Регион</DropdownMenuLabel>
                            {regions?.map((region) => (
                                <DropdownMenuItem
                                    key={region.id}
                                    onClick={() => setSelectedRegion(region.id)}
                                >
                                    {region.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="w-1/4 p-2 border rounded-md text-left"
                                disabled={!selectedRegion}
                            >
                                {selectedCity
                                    ? cities?.find((c) => c.id === selectedCity)?.name
                                    : "Выберите город"}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-72 overflow-y-auto">
                            <DropdownMenuLabel>Город</DropdownMenuLabel>
                            {cities?.map((city) => (
                                <DropdownMenuItem
                                    key={city.id}
                                    onClick={() => setSelectedCity(city.id)}
                                >
                                    {city.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <button
                    className="w-full p-2 bg-blue-800 text-white rounded-md"
                    onClick={performSearch} // Trigger refetch if necessary
                    disabled={!category}
                >
                    Поиск
                </button>
            </div>

            {/* Render the SearchManufacturesTable with current search parameters */}
            <SearchManufacturesTable {...searchParams} />
        </div>
    );
};

export default ManufacturerSearchPage;
