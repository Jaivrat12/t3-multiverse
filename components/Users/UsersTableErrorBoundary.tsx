import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { AxiosError } from 'axios';
import CustomErrorUI from '../Common/CustomErrorUI';
import RetryButton from '../Common/Buttons/RetryButton';
import type { ChildrenProps } from '@/types';

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    console.log(error);
    if (!(error instanceof AxiosError)) {
        throw error;
    }

    return (
        <CustomErrorUI
            title="Failed to get Users"
            message={error.response?.data.message ?? error.message}
        >
            <RetryButton
                className="mt-4"
                onClick={resetErrorBoundary}
            />
        </CustomErrorUI>
    );
};

export default function UsersTableErrorBoundary({ children }: ChildrenProps) {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary
                    FallbackComponent={Fallback}
                    onReset={reset}
                >
                    {children}
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
}
