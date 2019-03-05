import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router';
import "@babel/polyfill";
import 'assets/style/base.css' 
import { Switch,HashRouter as Router,Route } from 'react-router-dom';
const App = () =>
    (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
            </Switch>
        </Router>
    );
    
if (module.hot) {
        module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('root'));

