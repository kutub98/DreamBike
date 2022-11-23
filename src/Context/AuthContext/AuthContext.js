import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../Firebase/FirebaseConfig/Firebase.config';



const auth = getAuth(app)
export const authContext = createContext()
const AuthContext = ({children}) => {
    const user = [{displayName: 'Kutub', phone: "0349385495"}]

    const authInfo = {user}
    return (
        <div>
            <authContext.Provider value ={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContext;