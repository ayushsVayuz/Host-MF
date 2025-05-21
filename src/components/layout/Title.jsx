import React, { useEffect } from 'react'
import * as pkg from 'react-router-dom';

const Title = () => {
    const { useLocation } = pkg; 
    let location = useLocation();
    console.log("location", location.pathname);
    let path = location.pathname

    // It sets title for each components or page according to the pathname 
    useEffect(() => {

        if (path === ('/')) {
            document.title = "Login | CRUD";
        } else if (path.includes('/login')) {
            document.title = "Login | CRUD";
        } else if (path.includes('/signup')) {
            document.title = "Signup | CRUD";
        } else if (path.includes('/home')) {
            document.title = "Home | CRUD";
        } else if (path.includes('/about')) {
            document.title = "About | CRUD"
        } else if (path.includes('/createUser')) {
            document.title = "Create User | CRUD"
        } else if (path.includes('/updateUser')) {
            document.title = "Update User | CRUD"
        } else if (path.includes('/userDetails')) {
            document.title = "User Details | CRUD"
        }

    }, [location.pathname]);

    return null;
}

export default Title
