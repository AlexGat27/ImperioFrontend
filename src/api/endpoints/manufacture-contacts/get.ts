import { createRequest } from '@/api/request'
import {ManufactureContactsModel} from "@/api/types.ts";

export type GetListManufactureContactsResponse = ManufactureContactsModel[]

export const getListManufactureContacts = createRequest((api) => {
    return api.get('/manufacture-contacts').json<GetListManufactureContactsResponse>()
})