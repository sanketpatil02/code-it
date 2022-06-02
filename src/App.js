import "./App.css";
import Header from "./components/Header";
import Header_fun from "./components/Header_fun";
import Home from "./pages/Home";
import Contest from "./pages/Contest";
import Career from "./pages/Career";
import Practise from "./pages/Practise";
import SingleQuestion from "./pages/SingleQuestion";
import Error from "./components/Error";
import Profile from "./pages/Profile";
import Online_IDE from "./pages/Online_IDE";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const axios = require("axios");

function App() {
  const { isAuthenticated, user } = useAuth0();

  // useEffect(() => {
  // 	alert("LOGIN");

  // 	if (isAuthenticated) {
  // 		var in_data = {
  // 			email: user.email,
  // 			problemsolved: [],
  // 		};
  // 		axios
  // 			.post(
  // 				"https://codekit-user-registration.herokuapp.com/api/auth/",
  // 				in_data
  // 			)
  // 			.then((response) => {
  // 				alert("r= " + response);
  // 				console.log(response);
  // 			})
  // 			.catch((error) => {
  // 				alert("e= " + error);
  // 			});
  // 	} else {
  // 		alert("Not authencted");
  // 	}
  // }, [isAuthenticated]);
  return (
    <>
      <Header_fun />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/problems" component={Practise}></Route>
        <Route exact path="/contest" component={Contest}></Route>
        <Route exact path="/career" component={Career}></Route>
        <Route exact path="/user" component={Home}></Route>
        <Route exact path="/online_ide" component={Online_IDE}></Route>
        <Route
          exact
          path="/problems/:problem_id"
          component={SingleQuestion}
        ></Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
