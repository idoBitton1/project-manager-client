import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { authService } from 'services/authService';
import { accessTokenAtom, isAuthenticatedAtom, isLoadingAtom } from 'atoms/authentication/authAtoms';

export const useAuthInit = () => {
    const setIsLoading = useSetAtom(isLoadingAtom);
    const setAccessToken = useSetAtom(accessTokenAtom);
    const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

    useEffect(() => {
        const initializeAuth = async () => {
            await authService.refreshToken();
            setIsLoading(false);
        };

        initializeAuth();
    }, [setAccessToken, setIsAuthenticated, setIsLoading]);
};
