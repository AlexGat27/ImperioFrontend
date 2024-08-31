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

    // Fetch locations data
    const { data: locations } = useQuery(listCitiesOptions());
    const districts = useMemo(() => locations?.filter(loc => loc.parent_id === null) || [], [locations]);
    const regions = useMemo(() => locations?.filter(loc => loc.parent_id === selectedDistrict) || [], [locations, selectedDistrict]);
    const cities = useMemo(() => locations?.filter(loc => loc.parent_id === selectedRegion) || [], [locations, selectedRegion]);

    // Prepare search parameters
    const searchParams: SearchManufacturesParams = {
        category: category || null,
        district: selectedDistrict ? districts.find(d => d.id === selectedDistrict)?.name : null,
        region: selectedRegion ? regions.find(r => r.id === selectedRegion)?.name : null,
        city: selectedCity ? cities.find(c => c.id === selectedCity)?.name : null,
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

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="w-full p-2 border rounded-md text-left">
                            {selectedDistrict ? districts.find(d => d.id === selectedDistrict)?.name : "Выберите федеральный округ"}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
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
                            className="w-full p-2 border rounded-md text-left"
                            disabled={!selectedDistrict}
                        >
                            {selectedRegion
                                ? regions?.find((r) => r.id === selectedRegion)?.name
                                : "Выберите регион"}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
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
                            className="w-full p-2 border rounded-md text-left"
                            disabled={!selectedRegion}
                        >
                            {selectedCity
                                ? cities?.find((c) => c.id === selectedCity)?.name
                                : "Выберите город"}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
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

                <button
                    className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md"
                    onClick={() => {}} // Trigger refetch if necessary
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
