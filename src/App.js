import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import General from './routes/General/General';
import Courses from './routes/Courses/Courses';
import Shop from './routes/Shop/Shop';
import News from './routes/News/News';
import ContextData from './context/Data/ContextData';
import ReducerData from './context/Data/ReducerData';
import StateData from './context/Data/StateData';

function App() {
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)
  return (
    <Switch>
      <ContextData.Provider value={{stateData, dispatchData}}>
        <Route path="/" exact component={General} />
        <Route path="/courses" component={Courses} />
        <Route path="/shop" component={Shop} />
        <Route path="/news" component={News} />
      </ContextData.Provider>
    </Switch>
  );
}

export default App;
