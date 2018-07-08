import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Button } from 'reactstrap';

/*import logo from './logo.svg';*/
/*import './App.css';*/

class  App extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        );
      }
    }
export default App;


