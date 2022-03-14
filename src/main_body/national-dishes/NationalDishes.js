import React,{useState} from 'react';
import '../../style.css'
import './national-dishes.css'
import imgContainer from '../imgContainer';
import SearchFunction from '../SearchFunction';
const NationalDishes = ({numberPurchases}) => {
    const [foods, setFoods] = useState(food);
  const fun = (id) => {
             setFoods( foods.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
  };
    return (
        <section className='container_nationalDishes'>
            <header className='nationalDishes-header'>
                <img src={imgContainer[3].cook_logo} alt="img" />
            </header>
{/* ------------------------------------------------------ */}
            <main>
                <section className='navbar flex'>
                        <a className="cook flex">national dishes</a>
                        <a className="cook flex">disert</a>
                        <a className="cook flex">meat dishes</a>
                        <a className="cook flex">european dishes</a>
                </section>
                <section className='national-dishes meal'>
                        <h3>national dishes</h3>
                        <SearchFunction props={foods} fun={fun} numberPurchases={numberPurchases}/>
                </section>
                <section className='disert meal'>
                        <h3>disert</h3>
                        <SearchFunction props={foods} fun={fun} numberPurchases={numberPurchases}/>
                </section>
                <section className='meat-dishes meal'>
                        <h3>meat dishes</h3>
                        <SearchFunction props={foods} fun={fun} numberPurchases={numberPurchases}/>
                </section>
                <section className='european-dishes meal'>
                        <h3>european dishes</h3>
                        <SearchFunction props={foods} fun={fun} numberPurchases={numberPurchases}/>
                </section>
            </main>
        </section>
    );
};
export default NationalDishes;
const food=[
    {id:1, img:imgContainer[3].osh, text:'Lorem ipsum dolor', price:'$125.00', buy:false},
    {id:2, img:imgContainer[3].manti, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:3, img:imgContainer[3].kabob, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:4, img:imgContainer[3].shurva, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:5, img:imgContainer[3].kuza_shurva, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:6, img:imgContainer[3].lagmon, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:7, img:imgContainer[3].suyuq_lagmon, text:'Lorem ipsum dolor', price:'$135.00', buy:false},
    {id:8, img:imgContainer[3].tandir, text:'Lorem ipsum dolor', price:'$135.00', buy:false}
]