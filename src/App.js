import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Designcomponent from './Design';
import {AboutUs}  from './Design';
import { Admin } from './Design';
import { Student } from './Design';
import { Branches } from './Design';
import {Contactus} from './Design';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={(props) =>(<Designcomponent props={props}/>)}/>
          <Route exact path="/Admin" component={()=>(<Admin/>)}/>
          <Route exact path="/Student" component={()=>(<Student/>)}/>
          <Route exact path="/Aboutus" component={() => (<AboutUs/>)}/>
          <Route exact path="/Branches" component={() => (<Branches />)}/>
          <Route exact path="/Contactus" component={() => (<Contactus/>)}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

