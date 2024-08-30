import {queryOptions} from "@tanstack/react-query";
import {api} from "@/api"

export const listCitiesOptions = () =>
    queryOptions({
        queryKey: ['cities'],
        queryFn: () => api.getCities(),
        staleTime: 1000 * 60 * 10
    })
