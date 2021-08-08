import React, { useEffect } from 'react';
import orgsData from './orgs.json';
import { Switch, Route, useLocation } from 'react-router-dom';
import OrgList from './pages/OrgList';
import Home from './pages/Home';
import Org from './pages/Org';
import NewOrg from './pages/NewOrg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  let query = useQuery();

  const initialNGOs =
    window.localStorage.getItem('NGOs') === null
      ? orgsData
      : JSON.parse(window.localStorage.getItem('NGOs'));

  useEffect(() => {
    window.localStorage.setItem('NGOs', JSON.stringify(initialNGOs));
  }, [initialNGOs]);

  const findOrg = (id) => {
    return initialNGOs.find(function (org) {
      return org.id === id;
    });
  };

  const filterOrg = (name) => {
    return initialNGOs.filter(function (org) {
      return org.name.match(name);
    });
  };

  return (
    <>
      <Switch>
        <Route exact path='/small-some-body' component={Home} />
        <Route
          exact
          path='/org-list'
          render={() => (
            <OrgList
              orgsData={
                query.get('name') === null
                  ? initialNGOs
                  : filterOrg(query.get('name'))
              }
            />
          )}
        />
        <Route
          exact
          path='/org/:id'
          render={(routeProps) => (
            <Org org={findOrg(routeProps.match.params.id)} />
          )}
        />
        <Route exact path='/new' render={() => <NewOrg />} />
      </Switch>
    </>
  );
}

export default App;
