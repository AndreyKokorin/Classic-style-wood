import "./showcase.scss";
import door from "../../static/door.png";
export default function Showcase(){
    return(
        <section className="showcase">
            <div className="wrapper">
            <div className="showcase__title">
            Витрина товаров
            </div>
            
            <FilterBtns/>

            <div className="showcase__list">
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
                <ProductCard title="Sofia Original 50.07" price="24 500 ₽" img={door}/>
            </div>
            </div>

            <div className="showcase__showall">
                <div className="wrapper">
                     <button>
                    показать все
                </button>
                </div>
            </div>
        </section>
    )
}

function ProductCard ({title, price, img}){
    return (
        <div className="card">
            <div className="card__title">
                {title}
            </div>
            <div className="card__price">    
                {price}
            </div>
            <div className="card__img">
                <img src={img} alt="" />
            </div>
            <div className="card__salebtn">
                <button>Купить</button>
            </div>
        </div>
    )
}

function FilterBtns(){

    function setClickElem(e){
        document.querySelectorAll(".showcase__filter_item").forEach(item => item.classList.remove("choosen"))
        e.target.classList.add("choosen")
    }

    return (<div className="wrapper">
        <div className="showcase__filter">
            
            <div className="showcase__filter_item choosen" onClick={setClickElem}>
                    Межкомнатные двери
                </div>
                <div className="showcase__filter_item" onClick={setClickElem}>
                    мебель
                </div>
                <div className="showcase__filter_item" onClick={setClickElem}>
                Стеновые панели «Буазери»
                </div>
                <div className="showcase__filter_item" onClick={setClickElem}>
                Лестницы
                </div>
                <div className="showcase__filter_item" onClick={setClickElem}>
                Мебельные фасады
                </div>
            </div>
            </div>
    )
}