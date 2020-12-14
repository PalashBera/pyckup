import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './authenticatedRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CategoriesPage from '../pages/CategoriesPage';

export default (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LoginPage} />
    <AuthenticatedRoute path='/dashboard' component={DashboardPage} />
    <AuthenticatedRoute path='/categories' component={CategoriesPage} />
  </Switch>
);
