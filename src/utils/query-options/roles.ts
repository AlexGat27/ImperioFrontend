import {queryOptions} from "@tanstack/react-query";
import {api} from '@/api'

export const listRolesOptions = () =>
    queryOptions({
        queryKey: ['roles'],
        queryFn: () => api.getListRoles(),
    })