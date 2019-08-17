import React from 'react';
import {Switch ,Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors';
import {HomePage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.css';
import {auth,createUserProfileDocument } from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component{
 

unsubscribeFromAuth = null;

componentDidMount() {
  //console.log(this.props);
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      //console.log(this.props.currentUser); 
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        //console.log(this.props.currentUser); 
      });
    }else{
     setCurrentUser(userAuth);
    }
    //console.log('11');
     //console.log(this.props.currentUser); 
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
componentDidUpdate(){
  //console.log('updated');
    // console.log(this.props.currentUser);
}
render(){
  //console.log(this.props.currentUser)
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signin'  render ={ ()=>
       this.props.currentUser ? (<Redirect to="/"/>): (<SignInAndSignUp/>)
      } />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector ({
  //console.log(state);
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
