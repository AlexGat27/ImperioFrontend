import {createRequest} from "@/api/request.ts";
import {SearchManufacturesDto} from "@/api/types.ts";

export interface ManufacturesParams{
    category: string | null
    district: string | null
    region: string | null
    city: string | null
}
export type SearchManufacturesParams = Partial<ManufacturesParams>;

export const searchManufactures = createRequest(
    (api, params: SearchManufacturesParams) => {
        return api
            .url('/manufactures/search')
            .query(params) // Добавляем queryParams
            .get() // Выполняем GET-запрос
            .json<SearchManufacturesDto[]>(); // Преобразуем ответ в JSON
    }
)