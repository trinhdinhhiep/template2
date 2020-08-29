import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const BasicRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}

export default BasicRouter
