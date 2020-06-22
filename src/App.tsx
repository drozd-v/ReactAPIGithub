import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './component/Header/Header';
import AllRepositoryContainer from './component/AllRepository/AllRepositoryContainer';
import RepositoryContainer from './component/Repository/RepositoryContainer';
import Home from './component/Home/Home'


function App() {
  return (
    <div>
      <Header />
        <Route exact path="/" render={() => <Home />}/>
        <Route path='/list' render={() => <AllRepositoryContainer />} />
        <Route path='/repository/:id/:name' render={() => <RepositoryContainer />} />
        <Redirect to="/" />
    </div>);
}

export default App;