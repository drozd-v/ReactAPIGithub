import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './component/Header/Header';
import AllRepositoryComponent from './component/AllRepository/AllRepositoryComponent';
import RepositoryComponent from './component/Repository/RepositoryComponent';
import Home from './component/Home/Home'


function App() {
  return (
    <div>
      <Header />
        <Route exact path="/" render={() => <Home />}/>
        <Route path='/list' render={() => <AllRepositoryComponent />} />
        <Route path='/repository/:id/:name' render={() => <RepositoryComponent />} />
        <Redirect to="/" />
    </div>);
}

export default App;