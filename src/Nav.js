import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*import Button from '@material-ui/core/Button';*/


class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return <nav id="top">
            <div className="container">
                <div className="pull-right">

                   <div id="account"  className="dropdown">
                       <button className="btn-xs" data-toggle="dropdown">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span className="hidden-xs">  Личный кабинет</span>
                           <i className="fa fa-caret-down" aria-hidden="true"></i>
                       </button>

                       {/*<script>
                           $(".phone").click(function(){
                           alert("Hello World!")
                       });
                       </script>*/}

                         <ul className="dropdown-menu dropdown-menu-right registration">
                            <li><a onClick="#;">Регистрация</a></li>
                            <li><a onClick="#">Авторизация</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </nav>;
    }
}
export default Nav;

