import "./form.scss";
import img from "../../static/formImg.png"

export default function Form(){
    return (
        <section className="form">
            <div className="wrapper">
                    <div className="form__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="form__inputs">
                        <div className="form__title">
                            Нужна помощь с выбором?
                        </div>
                        <div className="form__subtitle">
                            Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!
                        </div>
                    

                        <form className="form__into">
                            <div>
                                <input type="text" placeholder="Как вас зовут?" className="form__into_nameinput"/> 
                                <input type="text" placeholder="Ваш телефон?" className="form__into_tel"/>
                            </div>
                        
                            <div>
                                <button>Связаться с нами</button>
                            </div>
                        </form> 
                    </div>
                </div>
        </section>
    )
}