import {createRequest} from "@/api/request.ts";

export interface DeleteManufactureContactParams{
    manufactureContactId: number;
}

export const deleteManufacture = createRequest(
    (api, params: DeleteManufactureContactParams) => {
        return api.delete(`manufacture-contacts/${params.manufactureContactId}`).json();
    }
)