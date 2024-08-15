import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosClient } from '@/lib/axios';
import type { PartialUserPayload, User, UserPayload } from './users.types';
import type { MutationOptions, Page, QueryOptions } from '@/types';

export const USERS_QUERY_KEY = 'users';
const getEndpoint = (id?: string) => '/users/' + (id ?? '');

export function useGetAllUsersQuery(
    // TODO: query (search, filters, etc)
    options?: QueryOptions<Page<User[]>>
) {
    return useQuery({
        ...options,
        queryKey: [USERS_QUERY_KEY],
        queryFn: () => axiosClient.get<Page<User[]>>(getEndpoint()),
        select: (res) => res.data,
    });
}

export function useGetUserByIdQuery(
    id: string,
    options?: QueryOptions<User>
) {
    return useQuery({
        ...options,
        queryKey: [USERS_QUERY_KEY, id],
        queryFn: () => axiosClient.get<User>(getEndpoint(id)),
        select: (res) => res.data,
    });
}

export function useCreateUserMutation(
    data: UserPayload,
    options?: MutationOptions<User>
) {
    return useMutation({
        mutationKey: ['create', USERS_QUERY_KEY],
        mutationFn: () => axiosClient.post<User>(getEndpoint(), data),
        ...options,
    });
}

export function useUpdateUserByIdMutation(
    id: string,
    data: PartialUserPayload,
    options?: MutationOptions<User>
) {
    return useMutation({
        mutationKey: ['update', USERS_QUERY_KEY, id],
        mutationFn: () => axiosClient.put<User>(getEndpoint(id), data),
        ...options,
    });
}

export function useDeleteUserByIdMutation(
    id: string,
    options?: MutationOptions<User>
) {
    return useMutation({
        mutationKey: ['delete', USERS_QUERY_KEY, id],
        mutationFn: () => axiosClient.delete<User>(getEndpoint(id)),
        ...options,
    });
}
