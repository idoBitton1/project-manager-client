import axios from 'axios';
import { getDefaultStore } from 'jotai';

import { LoginFormInputs } from 'models/types/login';
import { SERVER_ENDPOINTS } from 'utils/serverEndpoints';
import { RegisterFormInputs } from 'models/types/register';
import { accessTokenAtom, isAuthenticatedAtom } from 'atoms/authentication/authAtoms';

const set = getDefaultStore().set;

const handleSuccessfulAuth = (accessToken: string) => {
    set(accessTokenAtom, accessToken);
    set(isAuthenticatedAtom, true);
}

const handleClearAuth = () => {
    set(accessTokenAtom, null);
    set(isAuthenticatedAtom, false);
}

export const authService = {
    login: async (credentials: LoginFormInputs) => {
        const response = await axios.post(SERVER_ENDPOINTS.AUTH.LOGIN, credentials, {
            withCredentials: true
        });

        handleSuccessfulAuth(response.data.accessToken);
    },
    register: async (userData: RegisterFormInputs) => {
        const response = await axios.post(SERVER_ENDPOINTS.AUTH.REGISTER, userData, {
            withCredentials: true
        });

        handleSuccessfulAuth(response.data.accessToken);
    },
    refreshToken: async () => {
        try {
            const response = await axios.get(
                SERVER_ENDPOINTS.AUTH.REFRESH,
                { withCredentials: true }
            );

            handleSuccessfulAuth(response.data.accessToken);
        } catch (error) {
            handleClearAuth();
        }
    },
    logout: async () => {
        try {
            await axios.get(
                SERVER_ENDPOINTS.AUTH.LOGOUT,
                { withCredentials: true }
            );

            handleClearAuth();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
};
