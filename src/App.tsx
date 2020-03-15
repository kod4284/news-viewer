import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsPage from '@/pages/NewsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/:category?" component={NewsPage} />
      </Switch>
    </div>
  );
}

export default App;
