import React from "react";
import Header from "../head/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../head/footer/Footer";
import About from "../home/featured/about/About"
import Services from "../services/Services";
import Pricing from "../pricing/Pricing"

const Pages = () => {
    return (
        <>
        <Router>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/pricing" component={Pricing} />
            </Switch>
            <Footer />
        </Router>
    </>
 )
}

export default Pages;