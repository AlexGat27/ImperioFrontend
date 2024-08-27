import {createRequest} from "@/api/request.ts";
import {ManufacturesDto} from "@/api/types.ts";

export interface SearchManufacturesParams{
    category: string | null
    district: string | null
    region: string | null
    city: string | null
}
export type SearchManufacturesList = ManufacturesDto[];

export const searchManufactures = createRequest(
    (api, params: SearchManufacturesParams) => {
        return api
            .url('/manufactures/search')
            .query(params) // Добавляем queryParams
            .get() // Выполняем GET-запрос
            .json<SearchManufacturesList>(); // Преобразуем ответ в JSON
    }
)