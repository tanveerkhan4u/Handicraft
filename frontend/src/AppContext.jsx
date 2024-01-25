import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 const AppContext = createContext();

 export const AppProvider = ({children}) => {

  const navigate = useNavigate();
    
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
   );

   const [loggedIn, setloggedIn] = useState( currentUser !== null);

   const logout = () => {
    sessionStorage.removeItem('user');
    navigate('/Loginform');
    enqueueSnackbar('Logged in Successfully', { variant : 'success' });
    setloggedIn(false);
   }

  return <AppContext.Provider value={{currentUser, setcurrentUser, loggedIn, setloggedIn, logout}}>
       {children}

    </AppContext.Provider>
 }

 const useAppContext = () => useContext(AppContext);

 export default useAppContext;