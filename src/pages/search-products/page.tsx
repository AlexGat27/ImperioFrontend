import {useState} from "react";
import {SearchProductsParams} from "@/api/endpoints";
import {CheckboxInput, Input} from "@/components/ui/input.tsx";
import {SearchProductsTable} from "@/pages/search-products/components/table.tsx";

const ProductsSearchPage = () => {
    const [checkboxCategory, setCheckboxCategory] = useState<boolean>(false);
    const [checkboxProductName, setCheckboxProductName] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParams, setSearchParams] = useState<SearchProductsParams | null>(null);

    const performSearchParams = () => {
        setSearchParams({
            search_query: searchQuery,
            checkbox_product: checkboxProductName,
            checkbox_category: checkboxCategory,
        });
    }
    // Handle checkbox changes
    const handleCategoryCheckboxChange = () => setCheckboxCategory(!checkboxCategory);
    const handleProductNameCheckboxChange = () => setCheckboxProductName(!checkboxProductName);

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Поиск продуктов</h1>

            <div className="space-y-4">
                <Input
                    placeholder="Введите запрос"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className="flex justify-around">
                    <CheckboxInput
                        checked={checkboxCategory}
                        onChange={handleCategoryCheckboxChange}
                        name="Категория"
                    />

                    <CheckboxInput
                        checked={checkboxProductName}
                        onChange={handleProductNameCheckboxChange}
                        name="Название"
                    />
                </div>

                <button
                    className="w-full p-2 mt-4 bg-blue-800 text-white rounded-md"
                    onClick={performSearchParams}
                    disabled={!searchQuery}
                >
                    Поиск
                </button>
            </div>

            {/* Render the SearchProductsTable with current search parameters */}
            <SearchProductsTable {...searchParams} />
        </div>
    );
};

export default ProductsSearchPage;