import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import Users from "./components/users";
import Error404 from "./components/Error404";
import User from "./components/User";

function App2() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
         
          </ul>
        </nav>

        {/* 
        TÜMÜNÜ "path" KONTROL ETMESİ İÇİN "exact" yazılır.
         */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
          <Route path="/user/:id" exact component={User} />
          <Route path="*" exact component={Error404} />


 {/* 
______
        
<Route component={Notfound}></Route> 
______

 */}


        </Switch>
      </div>
    </Router>
  );
}

export default App2;


///////////////@6 güncel////////////// @5.2.0////////////

// @6 güncel

/*
 <Routes>
   <Route
     exact
    path="/"
    render={(props) => (
      <ProductList
        {...props}
        products={this.state.products}
        currentText={this.state.currentText}
        addToCart={this.addToCart}
        info={productInfo}
      />
    )}
  />
  <Route exact path="/cart" element={<CartList />} />
  <Route element={<Notfound/>}></Route>
</Routes>
*/


// @5.2.0
/*

 <Switch>
  <Route
    exact
    path="/"
    render={(props) => (
      <ProductList
        {...props}
        products={this.state.products}
        currentText={this.state.currentText}
        addToCart={this.addToCart}
        info={productInfo}
      />
    )}
  />
  <Route exact path="/cart" component={CartList} />
  <Route component={Notfound}></Route>
</Switch> 


*/

//render=props gönderir