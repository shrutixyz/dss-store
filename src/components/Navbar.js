import React, { useEffect, useContext, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';
import {signInWithGoogle, auth} from '../utils/firebase';

function Navbar() {
    const history = useHistory();
    const [user, setuser] = useState(null);
    const [mobileNav, setMobileNav] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((_user) => {
            if(_user) {
                console.log("user signed in");
                setuser(_user)
            }else {
                console.log("uh,oh")
            }
            
        })
        
    }, [])

    const handleSignOut = async () => {
        await auth.signOut();
        setuser(null);
        history.push('/')
    }

    const handleMobileNav = () => {if(mobileNav)  setMobileNav(false)}

    
    return (
        <div className="max-w flex shadow-md p-4 justify-between relative" onClick={handleMobileNav}>
            <div className="flex justify-items-start lg:ml-48">
                <div className="bg-accent rounded-full h-8 w-8"></div>
                <Link to="/home" className="lg:mx-3 md:mx-3 mx-4">Dos Sistas</Link>
            </div>

            {user ? (
                <div className="justify-items-end lg:pr-96  pr-64 md:block hidden">
                    <Link to="/products" className="mx-6">Browse</Link>
                    <Link to="/cart">My Cart</Link>
                    <button className="mx-6" onClick={()=>handleSignOut()}>Log Out</button>
            </div>

            ) : (
                <div className="justify-items-end lg:pr-96  pr-64 md:block hidden">
                        <Link to="/products" className="mx-6">Browse</Link>
                         <button className="mx-6" onClick={()=>signInWithGoogle()}>Sign In</button>
                </div>
                
            )}
            

            <div className="md:hidden">
                <MenuIcon onClick={() => setMobileNav(!mobileNav)}/>
            </div>

            {
                mobileNav ? <div className="absolute top-0 right-0 bg-lightaccent">
                     {user ? (
                <div className=" mt-6">
                    <Link to="/products" className="block my-10  mx-6">Browse</Link>
                    <Link to="/cart" className="block my-10 mx-6">My Cart</Link>
                    <button className="mx-6 block my-10" onClick={()=>handleSignOut()}>Log Out</button>
            </div>

            ) : (
                <div className=" mt-6">
                        <Link to="/products" className="block my-10 mx-6">Browse</Link>
                         <button className="mx-6 block my-10" onClick={()=>signInWithGoogle()}>Sign In</button>
                </div>
                
            )}
                    
                </div>:""

            }
           
          
        </div>
    )
}

export default Navbar
