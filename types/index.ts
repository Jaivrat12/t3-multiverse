import type { ReactNode } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export type RecordKey = string | number | symbol;

export type ChildrenProps = Readonly<{
    children?: ReactNode;
}>;

export interface Page<T> {
    docs: T;
    meta: {
        totalDocs: number;
        page: number;
        totalPages: number;
    };
}

export type QueryOptions<T> = Omit<UseQueryOptions<AxiosResponse<T>>, 'queryKey'>;
export type MutationOptions<T> = UseMutationOptions<AxiosResponse<T>>;
