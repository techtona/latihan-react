import React, {Component} from 'react';
import './App.css';
import Main from './component/Main';
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom';
import Kontak from "./component/Kontak";
import Profile from "./component/Profile";
import Portofolio from "./component/Portofolio";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/kontak" component={Kontak}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/portofolio" component={Portofolio}/>
                </Switch>
                <hr/>
            </BrowserRouter>
        );
    }
}

export default App;
