import React,{useState} from "react"
import "./fruits.css"
import "../../style.css";
import SearchFunction from "../SearchFunction";
import imgContainer from "../imgContainer";
// --------------------------------------------------------
const Fruits = ({numberPurchases}) => {
    const [infos, setInfos] = useState(info);

  const fun = (id) => {
             setInfos( infos.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
  };
    return(
        <section className="container_fruits">
{/* ---------------------------------------------------- */}
            <header className="fruits_header">
                    <img src={imgContainer[2].cooking} alt="coking" />
                    <div className="cook-img">
                        <img src={imgContainer[2].greenimg} alt="greenimg" />
                        <img src={imgContainer[2].appleimg} alt="appleimg" />
                    </div>
            </header>
{/* ---------------------------------------------------- */}
            <main className="fruits_body">
                <nav className="flex">
                    <a href="#">All</a>
                    <a href="#">Seed</a>
                    <a href="#">Fruit</a>
                    <a href="#">Herbs</a>
                    <a href="#">Vegetable</a>
                    <a href="#">Cereals</a>
                    <a href="#">Spices</a>
                </nav>
                <div className="all">
                    <SearchFunction props={infos} fun={fun} numberPurchases={numberPurchases}/>
                </div>
            </main>
{/* --------------------------------------------------- */}
            <footer className="fruits_footer">
                <img src={imgContainer[2].imgLogo}/>
                <div className="fruct_subcribe">
                    <input placeholder="Your Email"/>
                    <button>subscribe</button>
                </div>
            </footer>
{/* ---------------------------------------------------- */}
        </section>
    )
}
export default Fruits
const info=[
    { id:1, img:imgContainer[2].ananas_fruits, text:'Ananas', price:'$12.00', buy:false }, 
    { id:2, img:imgContainer[2].apilsin_fruits, text:'Apilsin', price:'$12.00', buy:false },
    { id:3, img:imgContainer[2].apple_fruits, text:'Apple', price:'$12.00', buy:false },
    { id:4, img:imgContainer[2].banana_fruits, text:'Banana', price:'$12.00', buy:false },
    { id:5, img:imgContainer[2].cacos_fruits, text:'Cacos', price:'$12.00', buy:false },
    { id:6, img:imgContainer[2].kive, text:'Kivi', price:'$12.00', buy:false },
    { id:7, img:imgContainer[2].ananas_fruits, text:'Ananas', price:'$12.00', buy:false },
    { id:8, img:imgContainer[2].apilsin_fruits, text:'Apilsin', price:'$12.00', buy:false },
    { id:9, img:imgContainer[2].apple_fruits, text:'Apple', price:'$12.00', buy:false },
    { id:10, img:imgContainer[2].banana_fruits, text:'Banana', price:'$12.00', buy:false},
    { id:11, img:imgContainer[2].cacos_fruits, text:'Cacos', price:'$12.00', buy:false},
    { id:12, img:imgContainer[2].kive, text:'Kivi', price:'$12.00', buy:false},
    { id:13, img:imgContainer[2].ananas_fruits, text:'Ananas', price:'$12.00', buy:false},
    { id:14, img:imgContainer[2].apilsin_fruits, text:'Apilsin', price:'$12.00', buy:false},
    { id:15, img:imgContainer[2].apple_fruits, text:'Apple', price:'$12.00', buy:false},
    { id:16, img:imgContainer[2].banana_fruits, text:'Banana', price:'$12.00', buy:false},
    { id:17, img:imgContainer[2].cacos_fruits, text:'Cacos', price:'$12.00', buy:false},
    { id:18, img:imgContainer[2].kive, text:'Kivi', price:'$12.00', buy:false}
]