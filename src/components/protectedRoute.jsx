import React from "react";
import { Route, Redirect } from 'react-router-dom';
import storage from '../utils/localStorage';

const ProtectedRoute = ({isAuth, component: Component, ...rest}) => {
  return ( <Route {...rest} render={(props) => {
    if(isAuth || storage.get('currentUser')) {
      return <Component />
    } else{
      return (
        <Redirect to={{pathname: '/', state: { from: props.location}}}/>
      )
    }
  }}/> );
}
 
export default ProtectedRoute;