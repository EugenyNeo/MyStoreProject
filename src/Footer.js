import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*import Button from '@material-ui/core/Button';*/


class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return ( <div className="container">
                    <div className="row footer">


                        <div className="col-sm-6 col-md-3">
                            <h5 className="heading"><i className=""></i><span>Информация</span></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://tayson.com.ua/klienty"><i className="fa fa-chevron-right"></i>Клиенты</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/uslugi"><i className="fa fa-chevron-right"></i>Услуги</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/company"><i className="fa fa-chevron-right"></i>О компании</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/dostavka"><i className="fa fa-chevron-right"></i>Доставка</a>
                                </li>
                            </ul>
                         </div>


                        <div className="col-sm-6 col-md-3 sdvig">
                            <h5 className="heading"><i className=""></i><span>Служба поддержки</span></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://tayson.com.ua/klienty"><i className="fa fa-chevron-right"></i>Контактыы</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/uslugi"><i className="fa fa-chevron-right"></i>Доставка</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/company"><i className="fa fa-chevron-right"></i>Оплата</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/dostavka"><i className="fa fa-chevron-right"></i>Политика безопасности</a>
                                </li>
                            </ul>
                        </div>




                        <div className="col-sm-6 col-md-3">
                            <h5 className="heading"><i className=""></i><span>Реквизиты главного офиса</span></h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://tayson.com.ua/klienty">г. Одесса, ул. Желябова 1, 401</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/uslugi"><i className="fa fa-phone"></i>0 800-400-500</a>
                                </li>
                                <li>
                                    <a href="https://tayson.com.ua/company"><i className="fa fa fa-envelope-open-o"></i>market@tayson.com.ua</a>
                                </li>

                            </ul>
                        </div>


                        <div className="col-sm-6 col-md-3">
                            <h5 className="heading"><i className=""></i><span>Схема проезда</span></h5>

                            <div className="ya_maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.502803845743!2d30.702815415035882!3d46.45854777456531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6323a2560c72f%3A0xdace7309b222acc8!2z0YPQuy4g0JbQtdC70Y_QsdC-0LLQsCwgMSwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1524211657795" width="250" height="125" ></iframe>
                            </div>

                        </div>

                        <div className="col-sm-12 col-md-12 ">
                            <hr className="line_footer"/>
                        </div>


                    </div>
               </div>
        );

    }
}
export default Footer;

