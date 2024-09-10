import {queryOptions} from "@tanstack/react-query";
import {api} from "@/api"
import {CityParams} from "@/api/endpoints";

export const listCitiesOptions = (cityParams: CityParams) =>
    queryOptions({
        queryKey: ['cities'],
        queryFn: () => api.getCities(cityParams),
        staleTime: 1000 * 60 * 10,
        enabled: !!cityParams,
    })
