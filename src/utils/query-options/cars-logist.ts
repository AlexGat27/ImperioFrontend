import {CreateCarsLogistParams, SearchCarsLogistParams} from "@/api/endpoints";
import {queryOptions, useMutation, useQueryClient} from "@tanstack/react-query";
import { api } from '@/api'

export const searchCarsLogistOptions = (searchParams: SearchCarsLogistParams) =>
    queryOptions({
        queryKey: ['cars-logist', searchParams],
        queryFn: () => api.searchCarsLogist(searchParams),
        enabled: !!searchParams,
    })

export const getTypeCarsOptions = () =>
    queryOptions({
        queryKey: ['cars-logist'],
        queryFn: () => api.getTypeCars(),
    })

export const useCreateCarsLogistMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateCarsLogistParams) => api.createCarsLogist(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars-logist'] }),
    })
}