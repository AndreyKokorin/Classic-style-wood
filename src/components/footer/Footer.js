import "./footer.scss";
import logo from "../../static/logo.svg";
import vk from "../../static/vk.svg";
import telegramm from "../../static/telegramm.png";
import pinterest from "../../static/pinterest.svg";

export default function Footer (){
    return(
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__column">
                    <ul>
                        <li><img src={logo} alt="" /></li>
                        <li>Фабрика G&G. 2022 <br /> © Все права защищены</li>
                        
                    </ul>
                </div>
                <div className="footer__column">
                    <ul className="footer__column_listlinks">
                        <li className="footer__column_num">8 (800) 550-81-79</li>
                        <li>м. Полежаевская</li>
                        <li>123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"</li>
                        <li>support@sofiadoors.com</li>
                    </ul>
                </div>
                <div className="footer__column footer__column_pages">
                    <ul className="footer__column_listlinks">
                       <li>Межкомнотные двери</li>
                       <li>Мебель</li>
                       <li>Стеновые панели «Буазери»</li>
                       <li>Лестницы</li>
                       <li>Мебельные фасады</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <ul className="footer__column_listlinks">
                       <li>Доставка</li>
                       <li>Статьи</li>
                       <li>О нас</li>
                       <li>Политика конфиденциальности</li>
                    </ul>
                </div>
                <div className="footer__column footer__column_media">
                    <ul className="footer__column_listlinks">
                       <li> <img src={vk} alt="" /> <img src={telegramm} alt="" /><img src={pinterest} alt="" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}