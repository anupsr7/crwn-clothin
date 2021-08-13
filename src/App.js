import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/signin-and-signup.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route  path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SigninAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
