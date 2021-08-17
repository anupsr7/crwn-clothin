import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/signin-and-signup.component';
import React from 'react';
import { auth } from './firebase/firebase.util';
class App extends React.Component {

  constructor(props){
   super(props);
   this.state = {
     currentUser: null
   }
  }

  unsubscribeAuth = null;

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SigninAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
