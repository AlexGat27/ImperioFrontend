import { createRequest } from '@/api/request'

export interface CreateManufactureParams{
    name: string
    emails: string[]
    website: string
    note: string
    create_your_project: boolean
    address_loading: string
    id_district: number
    id_region: number
    id_city: number
    is_work: boolean
}

export const createManufacture = createRequest(
    (api, params: CreateManufactureParams) => {
        return api.post(params, '/manufactures').json()
    },
)
