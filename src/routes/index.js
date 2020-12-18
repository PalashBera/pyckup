import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './authenticatedRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CategoriesPage from '../pages/CategoriesPage';
import NewCategoryPage from '../pages/CategoriesPage/newCategoryPage';

export default (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LoginPage} />
    <AuthenticatedRoute path='/dashboard' component={DashboardPage} />
    <AuthenticatedRoute exact path='/categories' component={CategoriesPage} />
    <AuthenticatedRoute exact path='/categories/new' component={NewCategoryPage} />
  </Switch>
);
