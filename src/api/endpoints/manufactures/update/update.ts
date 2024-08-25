import {createRequest} from "@/api/request.ts";
import {ManufactureModel} from "@/api/types.ts";

export interface UpdateManufactureParams extends ManufactureModel{
    id: number
    emails: string[] | null
}

export const updateManufactureRequest = createRequest(
    (api, params: UpdateManufactureParams) => {
        return api.put(params, `/manufactures/${params.id}`).json<UpdateManufactureParams>()
    }
)