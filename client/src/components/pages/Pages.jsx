import React from "react";
import Header from "../head/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../head/footer/Footer";
import About from "../about/About"
const Pages = () => {
    return (
        <>
        <Router>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Footer />
        </Router>
    </>
 )
}

export default Pages;