import {createRequest} from "@/api/request.ts";
import {ProductsDto} from "@/api/types.ts";

interface SearchProducts{
    search_query: string
    checkbox_product: boolean | null
    checkbox_category: boolean | null
}
export type SearchProductsParams = Partial<SearchProducts>;

export const searchProducts = createRequest(
    (api, params: SearchProductsParams) => {
        return api
            .url('/products/search')
            .query(params) // Добавляем queryParams
            .get() // Выполняем GET-запрос
            .json<ProductsDto[]>(); // Преобразуем ответ в JSON
    }
)