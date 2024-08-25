import { createRequest } from '@/api/request'
import {ManufacturesDto} from "@/api/types.ts";

export type GetListManufacturesResponse = ManufacturesDto[]

export const getListManufactures = createRequest((api) => {
    return api.get('/manufactures').json<GetListManufacturesResponse>()
})