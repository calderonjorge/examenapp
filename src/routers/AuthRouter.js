import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Redirect to="/login" />
                </Switch>
            </div>

        </div>
    )
}
