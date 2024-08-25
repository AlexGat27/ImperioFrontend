import { createRequest } from '@/api/request'
import {ManufactureModel} from '@/api/types'

export interface CreateManufactureParams extends ManufactureModel{
    name: string
    emails: string[]
}

export const createManufacture = createRequest(
    (api, params: CreateManufactureParams) => {
        return api.post(params, '/manufactures').json<CreateManufactureParams>()
    },
)
