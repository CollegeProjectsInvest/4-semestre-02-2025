import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { meUserService } from "../services/me-user-service";
import { loginUserService } from "../services/login-user-service";
import { registerUserService } from "../services/register-user-service";
import { logoutUserService } from "../services/logout-user-service";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const checkAuth = useCallback(async () => {
        try {
            setLoading(true);
            setErrorMessage(null);
            const me = await meUserService();
            setIsAuthenticated(!!me);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = useCallback(async ({ email, password }) => {
        try {
            setLoading(true);
            setErrorMessage(null);
            const result = await loginUserService({ email, password });
            setIsAuthenticated(!!result.user);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const register = useCallback(
        async ({ email, password, confirmationPassword }) => {
            try {
                setLoading(true);
                setErrorMessage(null);
                const result = await registerUserService({
                    email,
                    password,
                    confirmationPassword,
                });
                setIsAuthenticated(!!result.user);
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                }
            } finally {
                setLoading(false);
            }
        },
        [],
    );

    const logout = useCallback(async () => {
        try {
            setLoading(true);
            setErrorMessage(null);
            await logoutUserService();
            setIsAuthenticated(false);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const value = useMemo(
        () => ({
            isAuthenticated,
            loading,
            errorMessage,
            checkAuth,
            login,
            register,
            logout,
        }),
        [
            isAuthenticated,
            loading,
            errorMessage,
            checkAuth,
            login,
            register,
            logout,
        ],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useAuthContext must be used within AuthContextProvider",
        );
    }
    return context;
};
