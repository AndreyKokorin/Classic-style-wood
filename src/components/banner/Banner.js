import "./banner.scss";

export default function Banner(){
    return (
        <section className="banner">
                <div className="banner__cikle">
                    <div className="banner__title">
                        Classic Wood Stile <br />
                    </div>
                    <div className="banner__litTitle">
                        enterior-exterior
                    </div>
                    <div className="banner__sabtitle">
                        Приглашает к сотрудничеству архитекторов, дизайнеров и строителей
                    </div>
                    <div className="banner__btn">
                        <button>Подробнее</button>
                    </div>
                </div>
        </section>
    )
}