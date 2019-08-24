import React from 'react';
import Header from './components/Header/';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import SingleCourse from './components/ShowCourse';
import { Link, Redirect, Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/CourseList/Dashboard'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import ShowCourse from './components/ShowCourse/'


import { login, getProfile } from './services/ApiServices'

import authService from './services/authService';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isSignedIn: false,
      user: {}
    }
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile()

      this.setState(state => {
        return {
          isSignedIn: authService.isAuthenticated(),
          user: fetchedUser
        }
      })
    }
    catch(e) {
      throw e
    }
  }

  loginUser = async (credentials) => {
    try {
      const user = await login(credentials)

      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        }
      })
    }
    catch(e) {
      throw e
    }
  }

  signOutUser = () => {
    authService.signOut()

    this.setState(state => {
      return {
        isSignedIn: false,
        user: {}
      }
    })
  }

  render(){
    const { isSignedIn, user } = this.state
    return (
      <div className="App">
        <Header />
        <nav>
          
          

          {/* {
            isSignedIn &&
            <div><Link to="/courses">Courses</Link></div>
          } */}

          {
            !isSignedIn ? (
              <div className = 'login'><Link className="login-link" to="/login">Login</Link></div>
            ) : (
              <button onClick={this.signOutUser}>Sign Out</button>
            )
          }
        </nav>
        <main>
        <div className = "home">
        <Route exact path="/" component={Home} />
        </div>
          <ProtectedRoute
            exact path="/courses"
            user={user}
            component={Dashboard}
          />
          <Route
            path="/login"
            render={(props) =>
              <Login {...props} handleLogin={this.loginUser} isSignedIn={isSignedIn} />
            }
          />
        <Switch>
          <Route exact path='/courses/:id' 
          render={(props) => <SingleCourse {...props}/>}/>
        </Switch>
        <Footer/>
        </main>
        
      </div>
    );
  }

}


export default App;
