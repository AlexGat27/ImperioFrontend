import { api } from '@/api'
import {useMutation, useQueryClient, queryOptions} from '@tanstack/react-query'
import {
    CreateManufactureParams,
    SearchManufacturesParams,
    UpdateManufactureParams
} from "@/api/endpoints";

// Хук для получения списка производителей
export const listManufacturesOptions = () =>
    queryOptions({
        queryKey: ['manufactures'],
        queryFn: () => api.getListManufactures(),
    })

// Хук для поиска среди производителей
export const searchManufacturesOptions = (searchParams: SearchManufacturesParams) =>
    queryOptions({
        queryKey: ['manufactures', searchParams],
        queryFn: () => api.searchManufactures(searchParams),
        enabled: !!searchParams && !!searchParams.category,
    })

// Хук для создания производителя
export const useCreateManufactureMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateManufactureParams) => api.createManufacture(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['manufactures'] }),
    })
}

// Хук для обновления информации о производителе
export const useUpdateManufactureMutation = (id: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Omit<UpdateManufactureParams, 'id'>) => api.updateManufactureRequest({id, ...data}),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['manufactures'] }),
    })
}

// Хук для удаления производителя
export const useDeleteManufactureMutation = (manufactureId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => api.deleteManufacture({manufactureId}),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['manufactures'] }),
    })
}
