import "./articles.scss";
import art1 from "../../static/art1.png"
export default function Articles(){
    const title = "Графичный дизайн и бескомпромиссное качество в коллекции перегородок Grafica";
    const subtitle = "В этой коллекции мы создали многообразие дизайна створок и оснастили межкомнатные перегородки безупречным качеством механизмов. Особенность коллекции — плавность скольжения, комфорт и дизайн.";
    const date = "15 октября 2022"
    return (
        <section className="articles">
            <div className="wrapper">
                <div className="articles__title">
                    <div className="articles__title_text">
                        Новые статьи
                    </div>
                    <div className="articles__title_btn">
                        <button>Все статьи</button>
                    </div>
                </div>

                <div className="articles__list">
                <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                    <ArtCard img={art1} title={title} subtitle={subtitle} date={date}/>
                </div>
                <div className="articles__btn2">
                        <button>Все статьи</button>
                </div>
            </div>
        </section>
    )
}

function ArtCard({img, title, subtitle, date}){
    return (
        <div className="articlesItem">
            <div className="articlesItem__img">
                <img src={img} alt="" />
            </div>

            <div className="articlesItem__text">
                <div className="articlesItem__text_title">
                    {title}
                </div>
                <div className="articlesItem__text_subtitle">
                    {subtitle}
                </div>
                <div className="articlesItem__text_linksDate">
                    <div className="link">Читать дальше</div>
                    <div className="date">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
}