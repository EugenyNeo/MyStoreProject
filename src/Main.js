import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*import Button from '@material-ui/core/Button';*/


class Main extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return (

            <div className="container colorMain">
                <div className="row">

                        <div id="slide" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#slide" data-slide-to="0" className="active"></li>
                                <li data-target="#slide" data-slide-to="1" className="active"></li>
                                <li data-target="#slide" data-slide-to="2" className="active"></li>
                                <li data-target="#slide" data-slide-to="3" className="active"></li>
                                <li data-target="#slide" data-slide-to="4" className="active"></li>
                            </ol>

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img
                                        src="https://tayson.com.ua/image/cache/catalog/Slider/4-1140x380.jpg"
                                        alt="" height="375" className=""/>

                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Ковры</h3>

                                    </div>

                                </div>
                                <div className="carousel-item ">
                                    <img src="https://tayson.com.ua/image/cache/catalog/Slider/1-1140x380.jpg" alt=""
                                         height="375" className=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Ламинат</h3>

                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <img src="https://tayson.com.ua/image/cache/catalog/Slider/5-1140x380.jpg"
                                         alt="" height="375" className=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Укладеа ковровых покрытий</h3>

                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img src="https://tayson.com.ua/image/cache/catalog/Slider/2-1140x380.jpg" alt=""
                                         height="375" className=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Ковровые покрытия</h3>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src=" https://tayson.com.ua/image/cache/catalog/Slider/3-1140x380.jpg" alt=""
                                         height="375" className=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Ламинат</h3>

                                    </div>
                                </div>

                            </div>
                            <a href="#slide" relo="bottun" data-slide="prev" className="carousel-control-prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span></a>
                            <a href="#slide" relo="bottun" data-slide="next" className="carousel-control-next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span></a>
                        </div>

                </div>

                <div className="container">

                 <h3>Наши товары</h3>

                    <div className=" color_m col-md-12 row no-gutters">

                    <div className="color1 col-md-4">
                        <div className="mainCat">
                            <div className="mainCatNext">
                            <a href="https://tayson.com.ua/akcii">
                                <img src="https://tayson.com.ua/image/cache/catalog/News/sc-200x200.jpg" alt="АКЦИИ"/>
                            </a>
                            </div>
                            <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"> <b>АКЦИИ</b></a></div>


                        </div>
                    </div>

                    <div className="color2 col-md-4">
                        <div className="mainCat">
                            <div className="mainCatNext">
                            <a href="https://tayson.com.ua/akcii">
                                <img src="https://tayson.com.ua/image/cache/catalog/data/1/linbit-200x200.jpg" alt="ПВХ ЛИНОЛЕУМ"/></a>
                            </div>
                            <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"><b>ПВХ ЛИНОЛЕУМ</b></a></div>

                        </div>
                    </div>

                    <div className="color3 col-md-4">
                        <div className="mainCat">
                            <div className="mainCatNext">
                            <a href="https://tayson.com.ua/akcii">
                                <img src="https://tayson.com.ua/image/cache/catalog/data/1/linnat-200x200.jpg" alt="НАТУРАЛЬНЫЙ ЛИНОЛЕУМ"/></a>
                            </div>
                            <div className="mainCat-item-name"> <a href="https://tayson.com.ua/akcii"> <b>НАТУРАЛЬНЫЙ ЛИНОЛЕУМ</b></a></div>
                        </div>
                    </div>

                    </div>


                    <div className=" color_m col-md-12 row no-gutters">

                        <div className="color1 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/data/2/laminat_TBK_line-200x200.jpg" alt="ЛАМИНАТ"/>
                                    </a>
                                </div>
                                <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"> <b>ЛАМИНАТ</b></a></div>


                            </div>
                        </div>

                        <div className="color2 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/data/2/kak_stelit_kovrolin_3-200x200.jpg" alt="КОВРОВОЕ ПОКРЫТИЕ"/></a>
                                </div>
                                <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"><b>КОВРОВОЕ ПОКРЫТИЕ</b></a></div>

                            </div>
                        </div>

                        <div className="color3 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/catalog/lvt/moduleo/select_click/24932/classic-oak-24932_1-200x200.jpg" alt="ВИНИЛОВАЯ ПЛИТКА ( LVT)"/></a>
                                </div>
                                <div className="mainCat-item-name"> <a href="https://tayson.com.ua/akcii"> <b>ВИНИЛОВАЯ ПЛИТКА ( LVT)</b></a></div>
                            </div>
                        </div>

                    </div>





                    <div className=" color_m col-md-12 row no-gutters">

                        <div className="color1 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/News/IMG_3457-200x200.jpg" alt="КОВРЫ"/>
                                    </a>
                                </div>
                                <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"> <b>КОВРЫ</b></a></div>


                            </div>
                        </div>

                        <div className="color2 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/data/2/0ee123604bf2694579fce524ce6e78a475ee43f2-200x200.jpeg" alt="ИСКУССТВЕННАЯ ТРАВА"/></a>
                                </div>
                                <div className="mainCat-item-name"><a href="https://tayson.com.ua/akcii"><b>ИСКУССТВЕННАЯ ТРАВА</b></a></div>

                            </div>
                        </div>

                        <div className="color3 col-md-4">
                            <div className="mainCat">
                                <div className="mainCatNext">
                                    <a href="https://tayson.com.ua/akcii">
                                        <img src="https://tayson.com.ua/image/cache/catalog/data/2/179162847_w230_h230_bez_imeni84-200x200.jpg" alt="СОПУТСТВУЮЩИЕ ТОВАРЫ"/></a>
                                </div>
                                <div className="mainCat-item-name"> <a href="https://tayson.com.ua/akcii"> <b>СОПУТСТВУЮЩИЕ ТОВАРЫ</b></a></div>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                            <h4 ><span>О компании</span></h4> <hr/>
                        <div >
                            <h4 align="center">Интернет магазин «ТАЙСОН КОМПАНИ» - эксклюзивные напольные покрытия</h4>
                        </div>

                            <p>В ассортименте розничного интернет магазина ТАЙСОН КОМПАНИ вы найдете комплексные решения для комфорта и уюта. В каталоге представлены коллекции лучших европейских и американских производителей по самым выгодным ценам. Наша компания готова предложить клиенту собственное покрытие, изготовленное в Украине и адаптированное под потребности самого требовательного покупателя.</p>
                            <ul><li><b>Практичность и стиль </b></li></ul>

                            <p>Из полноценного модельного ряда вы сможете подобрать покрытие, которое будет идеально вписываться в интерьер и создаст особую атмосферу в помещении. В магазине вы найдете варианты для ванной, кухни, спальни, для офиса и коммерческого помещения с большой площадью. В карточке товара указаны характеристики, которые помогут вам быстро определиться с выбором. Для максимального удобства можно воспользоваться фильтром. </p>
                            <ul><li><b>Современные технологии </b></li></ul>


                            <p>Мы представляем лучшие варианты напольных покрытий, соответствующие современным стандартам и требованиям. В каталоге есть коллекции эксклюзивных товаров, которые вы не найдете в обычном магазине. Это изделия, завоевавшие популярность в Европе и лишь частично представленные на украинском рынке.</p>
                            <p>Отдельные виды покрытий используются для установки теплого пола и отличаются своей экологичностью, безопасностью и длительным сроком службы. Мы готовы предоставить нестандартные решения, которые будут радовать глаз и дарить наслаждение от повседневного использования.</p>
                            <ul><li><b>Качественный сервис</b></li></ul>

                            <p>Специалисты ТАЙСОН КОМПАНИ осуществляют бесплатный замер и дают консультации по правильному выбору покрытия. Фирма сотрудничает с лучшими дизайнерами и дает самые выгодные цены на рынке. Клиенту предоставляются гибкие условия оплаты. У нас есть собственная доставка и возможность ознакомиться с образцами товаров перед заказом.</p>
                            <p>В крупных городах Украины открыты наши шоурумы. Если вы ранее не покупали товары для дома через интернет, забрать заказ можно непосредственно из торгового центра. Помимо основного ассортимента, в каталоге есть сопутствующие товары, которые позволят благоустроить пол под ключ. Консультанты помогут правильно рассчитать метраж и оформить покупку.</p>
                            <ul><li><b>Специальные предложения</b></li></ul>

                           <p>Ассортимент нашего магазина регулярно обновляется. В отдельной категории вы найдете новинки и товары, на которые предоставляется скидка до 70%. Мы работаем напрямую с производителями и устанавливаем стоимость товаров без посреднических наценок.</p>
                           <p> Для оптовых заказчиков действует отдельный сайт, на котором можно сделать заказ и увидеть презентации по отдельным видам напольных покрытий.</p>
                           <p>ТАЙСОН КОМПАНИ – это опыт профессионалов, которым доверяет более 50 тыс. клиентов по всей стране. Оставляйте заявку на сайте, и мы перезвоним для предоставления полной информации по каждому товару.  </p>

                    </div>

                </div>



    </div>


            );
    }
}
export default Main;











