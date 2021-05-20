import {useState, useEffect, createContext} from "react";
import {auth} from './firebase';
import Home from '../components/Home'
import Products from '../components/Products'

export const UserContext = createContext({user:null});



const UserProvider = (props) => {
    const [user, setuser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            const {displayName, email} = user;

            setuser({
                displayName,
                email
            })
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
