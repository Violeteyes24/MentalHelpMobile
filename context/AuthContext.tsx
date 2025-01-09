import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabase';

type AuthContextType = {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    user: any; // Supabase user object
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<any>(null);

    // Check if the user is already logged in
    useEffect(() => {
        const checkSession = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            }
        };

        checkSession();
    },)}