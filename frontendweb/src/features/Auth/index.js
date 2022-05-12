import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import { Box } from '@material-ui/core';


LoginFeature.propTypes = {
    
};

function LoginFeature(props) {
    const match = useRouteMatch()

    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} component={LoginPage} exact />
                </Switch>
            </Box>
        </div>
    );
}

export default LoginFeature;
