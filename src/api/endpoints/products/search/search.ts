import {createRequest} from "@/api/request.ts";
import {ProductsDto} from "@/api/types.ts";

export interface SearchProductsParams{
    product_name: string | null
    category_name: string | null
    checkbox_product: boolean | null
    checkbox_category: boolean | null
}

export const searchProducts = createRequest(
    (api, params: SearchProductsParams) => {
        return api
            .url('/products/search')
            .query(params) // Добавляем queryParams
            .get() // Выполняем GET-запрос
            .json<ProductsDto>(); // Преобразуем ответ в JSON
    }
)