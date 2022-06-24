import React,{ useState }from "react";
import{HashRouter as Router,Route,Switch} from "react-router-dom";
import Auth from "../router/Auth";
import Home from "../router/Home";
import App from "./App";

const AppRouter = ()=>{
    const [isLoggedIn, setisLoggin] = useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn?
                <>
                <Route exact path="/">
                    <Home />
                </Route>
                </> : 
                <Route exact path="/">
                    <Auth />
                </Route>}
            </Switch>
        </Router>

    );
};
export default AppRouter;