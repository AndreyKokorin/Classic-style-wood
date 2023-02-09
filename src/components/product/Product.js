import "./product.scss";
import img1 from "../../static/product1.png"
import img2 from "../../static/product2.png"


export default function Product(){
    return (
        <section className="product">
            <div className="wrapper">
                <div className="product__lout">
                    <div className="product__card">
                        <div className="product__card_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="product__card_title">
                            <h2>Двери на заказ</h2>
                        </div>
                        <div className="product__card_subtitle">
                        На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.
                        </div>
                        <div className="product__card_link">
                            Заказать уникальную дверь
                        </div>
                    </div>
                    <div className="product__card">
                        <div className="product__card_img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="product__card_title">
                            <h2>3D фрезеровка</h2>
                        </div>
                        <div className="product__card_subtitle">
                            Изделия, которые создает фрезерный станок, управляемый компьютером, отличаются высочайшим качеством, абсолютной детализацией и идеальной точностью.
                        </div>
                        <div className="product__card_link">
                            Выбрать из каталога
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}