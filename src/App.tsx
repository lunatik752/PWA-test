import React, { Suspense } from 'react'
import {Route, Switch} from 'react-router-dom';
import './App.css';


const Home = React.lazy(() => import('./Home'))
const About = React.lazy(() => import('./About'))
const Settings = React.lazy(() => import('./Settings'))


const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route path="/about" render={() => <About/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </Switch>
            </div>
        </Suspense>
    );
}

export default App;


