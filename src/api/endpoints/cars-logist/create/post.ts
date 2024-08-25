import {createRequest} from "@/api/request.ts";
import {CarsLogistDto} from "@/api/types.ts";

export interface CreateCarsLogistResponse{
    status: string
    model: CarsLogistDto
}

export const createCarsLogist = createRequest(
    (api, params: CarsLogistDto) => {
        return api.post(params, '/cars-logist').json<CreateCarsLogistResponse>()
    }
)