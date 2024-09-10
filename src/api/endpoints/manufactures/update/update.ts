import {createRequest} from "@/api/request.ts";
import {ManufacturesDto} from "@/api/types.ts";

export type UpdateManufactureParams = Partial<
    Pick<ManufacturesDto, 'name' | 'website' | 'address_loading' | 'create_your_project' | 'note' | 'id' | 'emails'>
>

export const updateManufactureRequest = createRequest(
    (api, {id, ...params}: UpdateManufactureParams) => {
        return api.put(params, `/manufactures/${id}`).json<ManufacturesDto>()
    }
)