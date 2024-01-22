// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoged, setLogin] = useState(false);

  const fetchData = async () => {
    // Lógica para verificar a autenticação...
  };

  const login = () => {
    // Lógica para realizar o login...
    // Isso pode incluir uma chamada ao servidor para obter um novo token, se necessário.
    setLogin(true);
  };

  const logout = () => {
    // Lógica para realizar o logout...
    // Isso pode incluir a remoção do token do localStorage.
    setLogin(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <AuthContext.Provider value={{ isLoged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
