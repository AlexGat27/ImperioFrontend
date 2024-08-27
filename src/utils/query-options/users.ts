import { api } from '@/api'
import { PostUpdateUserParams } from '@/api/endpoints'
import { PostCreateUserParams } from '@/api/endpoints/users/create/post.ts'
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export const listUsersOptions = () =>
  queryOptions({ queryKey: ['users'], queryFn: () => api.getListUsers() })

export const useUpdateUserMutation = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Omit<PostUpdateUserParams, 'id'>) =>
      api.postUpdateUser({ id, ...data }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}

export const useDeletUserMutation = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => api.postDeleteUser({ id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: PostCreateUserParams) => api.postCreateUser(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })
}


