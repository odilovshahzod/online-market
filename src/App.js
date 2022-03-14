import React, { useEffect, useState } from "react";
// ------------------------------------------------
import Vegetable from "./main_body/vegetable/Vegetable";
import Fruits from "./main_body/fruits/Fruits";
import Clothes from "./main_body/clothes/Clothes";
import NationalDishes from "./main_body/national-dishes/NationalDishes";
import FastFood from "./main_body/fast-food/FastFood";
import Techniques from "./main_body/techniques/Techniques";
// -------------------------------------------------
import "./style.css";
import logo from "./img/Graf.png";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [basked, setBasked]=useState(false);
  const [items, setItems] = useState(0);
  let loog=0;
  let pricers=0;
  const numberPurchases =(buy)=>{buy? setItems(items - 1) : setItems(items + 1);}
  const [todo, setTodo]=useState([])
  const baskedList=(prop)=>{
          setTodo([...todo, prop])
  }
        useEffect(()=>{
                let n=0;
                const linked=document.querySelectorAll('.link');
                for (let index = 0; index < linked.length; index++) {
                        linked[index].addEventListener('click',()=>{
                                linked[n].classList.remove('active')
                                linked[index].classList.add('active')
                                n=index;
                        }
                        )}
        })
  return (
     <Router className="containerApp">
          <section className="main_header flex">
                <div className="search flex">
                    <input type="text" placeholder="Search" maxLength='24'/>
                    <a href="#" className="lupa bg"></a>
                </div>
                <div className="logo">
                   <img src={logo} alt="logo" />
                </div>
                <div className="profil flex">
                      <a className="people_icon bg"></a>
                      <a className="shopping_icon bg" onClick={()=>setBasked(true)}>
                         <span className="shop flex" style={{display:`${items === 0 ? 'none' : 'block'}`}}>{items}</span>
                     </a>
                </div>
          </section>
         <section className="main_header_navbar flex">
                <Link className="link active" to="/">
                        Vegetable
                </Link>
                <Link className="link" to="/fruits">
                        Fruits
                </Link>
                <Link className="link" to="/clothes">
                        Clothes
                </Link>
                <Link className="link" to="/national-dishes">
                        National Dishes
                </Link>
                <Link className="link" to="/fast-food">
                        Fast Food
                </Link>
                <Link className="link" to="/techniques">
                        Techniques
                </Link>
        </section>
        <Switch className="switch">
                <div className="main_body">
                        <Route exact path="/">
                              <Vegetable numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>

                        <Route path="/fruits">
                              <Fruits numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>

                        <Route path="/clothes">
                              <Clothes numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>

                        <Route path="/national-dishes">
                              <NationalDishes numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>

                        <Route path="/fast-food">
                              <FastFood numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>

                        <Route path="/techniques">
                              <Techniques numberPurchases={numberPurchases} baskedList={baskedList}/>
                        </Route>
                </div>
        </Switch>
        <section className="basked_container" style={{display:`${basked? 'block':'none'}`}}>
            <div className="basked">
                <h1>Basked</h1>
                <table className="basked_shopping">
                    <thead>
                        <tr className="tr">
                                <th>№</th>
                                <th>name</th>
                                <th>sum</th>
                                <th>kilogram</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map(item => 
                                <tr>
                                        <td>{loog=loog+1}</td>
                                        <td>{item.text}</td>
                                        <td>{item.price}</td>
                                        <td><input type="number" placeholder="0" min={0} max={5}/>kg</td>
                                        <td><button>no</button></td>
                                </tr>
                        )}                         
                    </tbody>

                </table>
           </div>
                <button className="close" onClick={()=>setBasked(false)}>close</button>
        </section>
    </Router>
  );
};

export default App;
