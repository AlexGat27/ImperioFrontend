import {queryOptions, useMutation, useQueryClient} from "@tanstack/react-query";
import {updateToken} from "@/api/request.ts";
import {api} from "@/api";
import {useNavigate} from "@tanstack/react-router";

export const useLoginMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: api.postLogin,
        onSuccess: (data) => {
            updateToken(data.access_token)
            return queryClient.invalidateQueries({ queryKey: ['profile'] })
        },
    })
}

export const useLogoutMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: api.postLogout,
        onSuccess: async () => {
            updateToken(null)
            queryClient.clear()
            return navigate({ to: '/login' })
        },
    })
}

export const profileOptions = () =>
    queryOptions({
        queryFn: () => api.getProfile(),
        queryKey: ['profile'],
    })