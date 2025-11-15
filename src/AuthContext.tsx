import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    usuarioActivo: string;
    login: (nombreUsuario: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [usuarioActivo, setUsuarioActivo] = useState<string>("");

    const login = (nombreUsuario: string) => {
        setIsAuthenticated(true);
        setUsuarioActivo(nombreUsuario);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUsuarioActivo("");
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, usuarioActivo, login, logout }}>
            {children}
        </AuthContext.Provider>
    )   
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth debe estar dentro de AuthProvider");
    }
    return context;
}
