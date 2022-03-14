import React, { useState } from "react";
import "./clothes.css";
import "../../style.css";
// ------------------------------------------------------
import shopping from "./img_clothes/shopping-logos.png";
// -----------------------------------------------------
import SearchFunction from "../SearchFunction";
import imgContainer from "../imgContainer";

const Clothes = ({numberPurchases}) => {
    const [mens, setMens] = useState(men);
    const [girls, setGirls]=useState(girl);
    const [babys, setBabys]=useState(baby);
  const fun = (id, type) => {
      if(type==='men'){
             setMens( mens.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
        }
      else{
              if(type === 'girl'){ 
                    setGirls(girls.map((item) => { 
                          if(item.id === id) {return { ...item, buy: !item.buy } } 
                          else{ return item } } 
            ));
        }
              else{
                    if(type === 'baby'){
                          setBabys( babys.map((item) => {
                                if(item.id === id) {return { ...item, buy: !item.buy } } 
                                else{ return item }}
                 ));
    }}
        }
  };
  return (
    <section className="container_clothes">
        <header className="header-clothes">
            <img src={shopping} alt="sjopping" />
        </header>
        <main className="main-clothes">
            <section className="shopping flex">
                  <div className="shopping-nav flex">
                        <i className="fa fa-camera-retro"></i>
                        <div>
                            <h3>Free Shipping</h3>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                  </div>
                  <div className="shopping-nav flex">
                        <i className="fa fa-address-card"></i>
                        <div>
                              <h3>Securety Paymets</h3>
                              <span>Lorem ipsum dolor sit.</span>
                        </div>
                  </div>
                  <div className="shopping-nav flex">
                        <i className="fa fa-gift"></i>
                        <div>
                              <h3>14-Day Returns</h3>
                              <span>Lorem ipsum dolor sit.</span>
                        </div>
                  </div>
            </section>
            <section className="shipping-over mens-clothing">
                      <h3>men's clothing</h3>
                      <SearchFunction props={mens} fun={fun} numberPurchases={numberPurchases}/>
            </section>
            <section className="shipping-over girls-clothing">
                      <h3>girl's clothing</h3>
                      <SearchFunction props={girls} fun={fun} numberPurchases={numberPurchases}/>
            </section>
            <section className="shipping-over baby-clothing">
                      <h3>baby's clothing</h3>
                      <SearchFunction props={babys} fun={fun} numberPurchases={numberPurchases}/>
            </section>
        </main>
        <footer className="footer-clothes">
            <section className="shipping-over">
                      <SearchFunction props={shipping} />
            </section>
        </footer>
    </section>
  );
};
export default Clothes;
// -------------------------------------------------------------------------------
const men = [
  {id: 1, img: imgContainer[0].man1, text: "Lorem ipsum dolor", price: "$125.00", buy: false, type:'men'},
  {id: 2, img: imgContainer[0].man2, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 3, img: imgContainer[0].man3, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 4, img: imgContainer[0].man4, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 5, img: imgContainer[0].man5, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 6, img: imgContainer[0].man6, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 7, img: imgContainer[0].man7, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
  {id: 8, img: imgContainer[0].man8, text: "Lorem ipsum dolor", price: "$135.00", buy: false, type:'men'},
];
const girl = [
  {id: 9, img: imgContainer[0].man1, text: "Lorem ipsum dolor", price: "$125.00",  type:'girl',buy: false},
  {id: 10, img: imgContainer[0].man2, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 11, img: imgContainer[0].man3, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 12, img: imgContainer[0].man4, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 13, img: imgContainer[0].man5, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 14, img: imgContainer[0].man6, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 15, img: imgContainer[0].man7, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
  {id: 16, img: imgContainer[0].man8, text: "Lorem ipsum dolor", price: "$135.00", type:'girl',buy: false},
];
const baby = [
  { id: 17, img: imgContainer[0].baby1, text: "Lorem ipsum dolor", price: "$125.00", type:'baby', buy: false},
  { id: 18, img: imgContainer[0].baby2, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 19, img: imgContainer[0].baby3, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 20, img: imgContainer[0].baby4, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 21, img: imgContainer[0].baby1, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 22, img: imgContainer[0].baby2, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 23, img: imgContainer[0].baby3, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
  { id: 24, img: imgContainer[0].baby4, text: "Lorem ipsum dolor", price: "$135.00", type:'baby', buy: false},
];
const shipping = [
  { id: 25, text: "Lorem ipsum dolor", price:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, vel."},
  { id: 26, text: "Lorem ipsum dolor", price:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, vel."},
  { id: 27, text: "Lorem ipsum dolor", price:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, vel."},
  { id: 28, text: "Lorem ipsum dolor", price:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, vel."},
];
