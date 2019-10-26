import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Painel from "../components/Painel";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact children={<Painel />} />
            <Route path="/outro" children={<div>Ainda não tem nada</div>} />
        </Switch>
    </Router>
);
