import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/login';
import history from './store/history';
import { ConnectedRouter } from 'connected-react-router';
import ReduxToastr from 'react-redux-toastr';
import DashboardAnalysis from './dashboard/dashboard-analysis';
import DashboardMonitor from './dashboard/dashboard-monitor';
import Loader from './provider/loader';


function App() {
  const [isLogin, setLogin] = useState()
  useEffect(() => {
    const fetchdata = async () => {
      const login = await sessionStorage.getItem('isLogin')
      setLogin(login)
      return isLogin;
    }
    fetchdata();
  }, [isLogin])

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/">
          {isLogin === undefined ?
            <Route>
              <Loader />
            </Route>
            :
            isLogin === 'true' ?
              <Redirect to="/dashboard-analysis" />
              :
              <Redirect to="/login" />

          }
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/dashboard-analysis">
          <DashboardAnalysis />
        </Route>
        <Route path="/dashboard-monitor">
          <DashboardMonitor />
        </Route>
      </Switch>
      <ReduxToastr />
    </ConnectedRouter>
  );
}

export default App;
