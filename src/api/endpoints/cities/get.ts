import {CityDto} from "@/api/types.ts";
import {createRequest} from "@/api/request.ts";

interface CityParamsInterface{
    parentid: number;
}
export type CityParams = Partial<CityParamsInterface>

export const getCities = createRequest(
    (api, params: CityParams) => {
    return api
        .url('/cities')
        .query(params)
        .get()
        .json<CityDto[]>()
})