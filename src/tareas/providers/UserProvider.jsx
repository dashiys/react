import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState({});
    return (
        <AppContext.Provider value={[userId, setUserId]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;