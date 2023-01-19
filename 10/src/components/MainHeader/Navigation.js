import React, {useContext, useEffect} from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
    const ctx = useContext(AuthContext)

    return (
        // <AuthContext.Consumer>
        //     {(ctx) => (
        //         <nav className={classes.nav}>
        //             <ul>
        //                 {ctx.isLoggedIn && (
        //                     <li>
        //                         <a href="/">Users</a>
        //                     </li>
        //                 )}
        //                 {ctx.isLoggedIn && (
        //                     <li>
        //                         <a href="/">Admin</a>
        //                     </li>
        //                 )}
        //                 {ctx.isLoggedIn && (
        //                     <li>
        //                         <button onClick={props.onLogout}>Logout</button>
        //                     </li>
        //                 )}
        //             </ul>
        //         </nav>
        //     )}
        // </AuthContext.Consumer>
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
