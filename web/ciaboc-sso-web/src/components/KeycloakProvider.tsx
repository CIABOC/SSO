"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import keycloak from "../lib/keycloak";

type KeycloakContextType = {
    initialized: boolean;
    authenticated: boolean;
    login: () => void;
    logout: () => void;
};

const KeycloakContext = createContext<KeycloakContextType | undefined>(
    undefined
);

let initializationPromise: Promise<boolean> | null = null;

export default function KeycloakProvider({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const [initialized, setInitialized] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (!initializationPromise) {
            initializationPromise = keycloak.init({
                onLoad: "check-sso",
                pkceMethod: "S256",
                checkLoginIframe: false,
            });
        }

        initializationPromise
            .then((authenticated) => {
                setAuthenticated(authenticated);
                setInitialized(true);
            })
            .catch((error) => {
                console.error("Keycloak initialization failed:", error);
                setInitialized(true);
            });
    }, []);

    const login = () => {
        keycloak.login({
            redirectUri: window.location.origin,
        });
    };

    const logout = () => {
        keycloak.logout({
            redirectUri: window.location.origin,
        });
    };

    return (
        <KeycloakContext.Provider
            value={{
                initialized,
                authenticated,
                login,
                logout,
            }}
        >
            {children}
        </KeycloakContext.Provider>
    );
}

export function useKeycloak() {
    const context = useContext(KeycloakContext);

    if (!context) {
        throw new Error(
            "useKeycloak must be used inside KeycloakProvider"
        );
    }

    return context;
}