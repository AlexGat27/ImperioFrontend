import {createRequest} from "@/api/request.ts";
import {CarsLogistDto} from "@/api/types.ts";

export interface SearchCarsLogistParams{
    type_cars_id: number | null
    district_id: number | null
    region: string | null
}
export type ListCarsLogistResponse = CarsLogistDto[]

export const searchCarsLogist = createRequest(
    (api, params: SearchCarsLogistParams) => {
        return api.url('cars-logist/search').query(params).get().json<ListCarsLogistResponse>();
    }
)