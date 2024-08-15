'use client';

import UsersTable from './UsersTable';
import UsersTableErrorBoundary from './UsersTableErrorBoundary';

const Users = () => {

    return (
        <div className="pt-12 container">
            <h1 className="pb-8 text-4xl text-center">
                Users Table
            </h1>

            <UsersTableErrorBoundary>
                <UsersTable />
            </UsersTableErrorBoundary>
        </div>
    );
};

export default Users;
