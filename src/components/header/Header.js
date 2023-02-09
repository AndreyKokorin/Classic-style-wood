import { useState } from "react";
import "./header.scss"
import logo from "../../static/logo.svg";
import tel from "../../static/tel.svg"

export default function Header () {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="header">    
            <div className="wrapper">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className={(openMenu) ? "header__nav dis-block" : "header__nav"}>
                        <div className="header__nav_links">
                            <ul>
                                <li>Доставка</li>
                                <li>Статьи</li>
                                <li>О нас</li>
                                <li>Контакты</li>
                            </ul>
                        </div>
                        <div className="header__nav_media">
                                <div className="mail">
                                    support@sofiadoors.com
                                </div>
                                <div className="number">
                                    8 (800) 550-81-79
                                </div>
                        </div>
                    </nav>
                    <div className="header__btn">
                            <button>
                                Коталог
                            </button>
                        </div>
                    <div className="header__telBtn">
                        <div className="header__btntel">
                            <img src={tel} alt="" />
                        </div>
                        <div className={(openMenu) ? "header__burger openMenu" : "header__burger"} onClick={() => setOpenMenu(menu => !menu)}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}