import React, { Component } from 'react';
/*import * as $ from 'jquery';*/

class Header extends Component {
    render() {
        return (
            <div className="container colorMain">
                <div className="row one">
                               <div className="col-xs-12 col-sm-6 col-md-3 one1">
                                 <div className="logo">
                                    <a href="https://tayson.com.ua/" >
                                        <img src="https://tayson.com.ua/image/catalog/new_logo.gif" title="Напольные покрытия - Тайсон Компани" alt="Напольные покрытия - Тайсон Компани" className="img-responsive"/>
                                    </a>
                                 </div>
                               </div>




                    <div id="div_search" className="col-xs-12 col-sm-6 col-md-5 one2 input_search">
                                            <div id="search" className="search_form input-group se">
                                                <input type="hidden" name="filter_category_id" value=""/>
                                                        <div className="cat_id input-group-btn">
                                                            <button type="button" className="btn btn-default btn-md "
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                <span>Везде</span>
                                                                <i className="fa fa-chevron-down"></i>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li data-id=""><a>Везде</a></li>
                                                                <li data-id="73"><a>АКЦИИ</a></li>
                                                                <li data-id="66"><a>ПВХ ЛИНОЛЕУМ</a></li>
                                                                <li data-id="70"><a>НАТУРАЛЬНЫЙ ЛИНОЛЕУМ</a></li>
                                                                <li data-id="69"><a>ЛАМИНАТ</a></li>
                                                                <li data-id="65"><a>КОВРОВОЕ ПОКРЫТИЕ</a></li>
                                                                <li data-id="63"><a>ВИНИЛОВАЯ ПЛИТКА ( LVT)</a></li>
                                                                <li data-id="76"><a>КОВРЫ</a></li>
                                                                <li data-id="67"><a>ИСКУССТВЕННАЯ ТРАВА</a></li>
                                                                <li data-id="71"><a>СОПУТСТВУЮЩИЕ ТОВАРЫ</a></li>
                                                            </ul>
                                                        </div>

                                                 <input type="text" name="search" value="" placeholder="Поиск"
                                                       className="form-control input-md" autoComplete="off"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="search btn btn-default btn-md">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </span>
                                            </div>

                                            <div id="search_phrase" className="hidden-xs hidden-sm">
                                                Например: <a>ламинат berry alloc</a>
                                            </div>
                    </div>



                                   <div id="div_search" className="col-xs-12 col-sm-6 col-md-3 one3">
                                       <div id="search" className="-search_input-group se">
                                           <input type="hidden" className="filter_category_id" value/>
                                       </div>


                                   <div className="col-xs-9 col-sm-4 col-md-3">
                                       <div id="phone">
                                           <div className="phone" data-toggle="dropdown" arial-expanded="false">
                                               <div>
                                                   <i className="fa fa-phone" aria-hidden="true"></i>
                                                    <span>
                                                        <a onClick="/" className="">0 800-400-500</a>
                                                    </span>
                                                   <i className="fa fa-chevron-down hidden-xs" aria-hidden="true"></i>
                                               </div>
                                               <p>Бесплатно по Украине!<br/>Принимаем звонки ежедневно с 8:00 до 21:00. вс до15:00</p>
                                           </div>
                                       </div>
                                   </div>
                                   </div>


                       <div id="cart" className="btn-group pull-right col-md-1 one4">
                           <button type="button" data-toggle="dropdown" data-loading-text="Загрузка..."
                                   className="btn " aria-expanded="false">
                               <i className="fa fa-shopping-basket"></i>
                               <span id="cart-total">0</span>
                           </button>
                               <ul className="dropdown-menu pull-right">
                                   <li>
                                       <p className="text-center">Ваша корзина пуста!</p>
                                   </li>
                               </ul>
                       </div>
                    </div>

             <div className="row">

                <div className="col-sm-6 col-md-4 ">
                    <nav id="menu" className="menu2 navbar">
                        <div className="navbar-header">
                            <span id="category" className="">Каталог продукции:</span>
                            <button type="button" className="btn btn-navbar navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-ex1-collapse"><i className="fa fa-bars"
                                                                          aria-hidden="false"></i></button>
                        </div>


                        <div className="navbar-collapse navbar-ex1-collapse collapse in" aria-expanded="true">
                            <ul className="nav navbar-nav ">
                                <li><a href="#">ПВХ ЛИНОЛЕУМ</a></li>
                                <li><a href="#">НАТУРАЛЬНЫЙ ЛИНОЛЕУМ</a></li>
                                <li><a href="#">ЛАМИНАТ</a></li>
                                <li><a href="#">КОВРОВОЕ ПОКРЫТИЕ</a></li>
                                <li><a href="#">ВИНИЛОВАЯ ПЛИТКА ( LVT)</a></li>
                                <li><a href="#">КОВРЫ</a></li>
                                <li><a href="#">ИСКУССТВЕННАЯ ТРАВА</a></li>
                                <li><a href="#">СОПУТСТВУЮЩИЕ ТОВАРЫ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                 <div className="col-sm-12 col-md-8 ">
                     <div className="menu_links">
                         <a href="/" title="Главная"><i className="hidden-md"></i>Главная</a>
                         <a href="akcii" title="Акции"><i className=" hidden-md"></i>Акции</a>
                         <a href="dostavka" title="Доставка"><i className=" hidden-md"></i>Доставка</a>
                         <a href="company" title="О Компании"><i className=" hidden-md"></i>О Компании</a>
                         <a href="news" title="Новости"><i className=" hidden-md"></i>Новости</a>
                         <a href="klienty" title="Партнеры"><i className="hidden-md"></i>Партнеры</a>
                         <a href="contact" title="Контакты"><i className=" hidden-md"></i>Контакты</a>
                     </div>
                 </div>



             </div>
    </div>


        );
    }
}
export default Header;
