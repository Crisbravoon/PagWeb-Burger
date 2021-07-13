import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import CardBurger from '../components/CardBurger/CardBurger';
import CardSnacks from '../components/CardSnacks/CardSnacks';
import Navbar from '../components/Navbar/Navbar';
import './AppRouter.css';
const AppRouter = () => {
    return (
        <div className="container">
            <Router>
                <Navbar/>
                <Switch>
                    <Route  path="/burger" exact component ={CardBurger} />
                    <Route  path="/snacks" exact component={CardSnacks}/>
                    <Route  path="/drinks" exact component={""}/>
                </Switch>
            </Router>
        </div>
    )
};

export default AppRouter;
