'use client';

import { Pagination } from '@nextui-org/react';
import Table from '../Common/Table';
import { useGetAllUsersQuery } from '@/api/users/users.hooks';

const columns = [
    {
        key: 'firstName',
        label: 'First Name',
    },
    {
        key: 'lastName',
        label: 'Last Name',
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'dob',
        label: 'Date of Birth',
    },
];

export default function UsersTable() {
    const {
        data: usersPage,
        isLoading: isUsersPageLoading,
    } = useGetAllUsersQuery({
        throwOnError: true,
    });

    return (
        <Table
            idKey="_id"
            columns={columns}
            rows={usersPage?.docs ?? []}
            isLoading={isUsersPageLoading}
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        color="primary"
                        page={usersPage?.meta.page}
                        total={usersPage?.meta.totalPages || 1}
                        isDisabled={isUsersPageLoading}
                        // onChange={(page) => setQuery((query) => ({
                        //     ...query,
                        //     page,
                        // }))}
                        isCompact
                        showControls
                        showShadow
                    />
                </div>
            }
        />
    );
};
