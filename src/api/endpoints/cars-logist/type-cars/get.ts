import {createRequest} from "@/api/request.ts";
import {TypeCarsDto} from "@/api/types.ts";

export type ListTypeCars = TypeCarsDto[]

export const getTypeCars = createRequest(
    (api) => {
        return api.get('cars-logist/type-cars').json<ListTypeCars>();
    }
)