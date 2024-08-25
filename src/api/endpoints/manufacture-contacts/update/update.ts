import {createRequest} from "@/api/request.ts";
import {ManufactureContactsModel} from "@/api/types.ts";

export interface UpdateManufactureContactsParams extends ManufactureContactsModel{
    id: number
}

export const updateManufactureContactRequest = createRequest(
    (api, params: UpdateManufactureContactsParams) => {
        return api.put(params, `/manufacture-contacts/${params.id}`).json<ManufactureContactsModel>()
    }
)