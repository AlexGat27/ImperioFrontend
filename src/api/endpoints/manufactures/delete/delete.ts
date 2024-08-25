import {createRequest} from "@/api/request.ts";
import {ManufacturesDto} from "@/api/types.ts";

export interface DeleteManufactureParams{
    manufactureId: number;
}
export interface SuccessDeleteManufactureResponse{
    success: boolean
    model: ManufacturesDto
}
export interface ErrorDeleteManufactureResponse{
    success: boolean
    errors: any[]
}

export const deleteManufacture = createRequest(
    (api, params: DeleteManufactureParams) => {
        return api.delete(`manufactures/${params.manufactureId}`).json();
    }
)