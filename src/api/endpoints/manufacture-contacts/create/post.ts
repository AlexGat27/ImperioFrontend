import { createRequest } from '@/api/request'
import {ManufactureContactsModel} from '@/api/types'

export interface CreateManufactureContactParams extends ManufactureContactsModel{
    manufacture_name: string
}

export const createManufactureContact = createRequest(
    (api, params: CreateManufactureContactParams) => {
        return api.post(params, '/manufacture-contacts').json<ManufactureContactsModel>()
    },
)
