import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext} from '../contexts/AuthContext';

const PrivateRouter = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    console.log("currentUser :", currentUser);
    return (
        <Route
        {...rest}

        render= {routeProps =>
        !!currentUser ? (
            <RouteComponent {...routeProps}/>

        ) : (
            <Redirect to= {"/Login"}/>
        )
    }
    />
    );
};

export default PrivateRouter;
