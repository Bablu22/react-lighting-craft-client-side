import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import AllProducts from "./Pages/AllProducts/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Purchase from "./Pages/PurchasePage/Purchase";
import Footer from "./Shared/Footer/Footer";
import NavigationTwo from "./Shared/Navigation/NavigationTwo";
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./Pages/PageNotFound/NotFound";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <NavigationTwo />
              <Login></Login>
            </Route>
            <Route path="/register">
              <NavigationTwo />
              <Register></Register>
            </Route>
            <Route path="/products">
              <NavigationTwo />
              <AllProducts></AllProducts>
            </Route>
            <Route path="/contact">
              <NavigationTwo />
              <Contact />
            </Route>
            <PrivateRoute path="/dashboard">
              <NavigationTwo />
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <NavigationTwo />
              <Purchase />
            </PrivateRoute>
            <Route path='*'>
              <NavigationTwo />
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
