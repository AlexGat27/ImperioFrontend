import {createRequest} from "@/api/request.ts";
import {ManufacturesDto} from "@/api/types.ts";

export interface GetManufactureParams{
    manufactureId: number
}

export const getManufacture = createRequest(
    (api, params: GetManufactureParams) => {
        return api.get(`/manufactures/${params.manufactureId}`).json<ManufacturesDto>();
    }
)