import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Painel from "../components/Painel";
import Sobre from "../components/Sobre";
import Header from "../components/Header";

export default () => (
    <Router>
        <Header>
            <Switch>
                <Route path="/" exact children={<Painel />} />
                <Route path="/sobre" children={<Sobre />} />
            </Switch>
        </Header>
    </Router>
);
