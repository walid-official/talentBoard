export const storeToken = (token: string) => {

    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  };
  
  export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  };
  
  export const removeToken = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  };

  export const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      window.location.href = '/signin'; 
    }
  };
  

  
  export const isAuthenticated = (): boolean => {
    return !!getToken();
  };
  