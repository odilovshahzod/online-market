import React,{useState} from 'react';
import './fast-food.css'
import '../../style.css'
import SearchFunction from '../SearchFunction';
import imgContainer from '../imgContainer';
const FastFood = ({numberPurchases}) => {
    const [myPizza, setMyPizza] = useState(pizza);
    const [burgers, setBurgers]=useState(burger);
    const [drinks, setDrinks]=useState(drink);
  const fun = (id, type) => {
      if(type==='pizza'){
             setMyPizza( myPizza.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
        }
      else{
              if(type === 'burger'){ 
                    setBurgers(burgers.map((item) => { 
                          if(item.id === id) {return { ...item, buy: !item.buy } } 
                          else{ return item } } 
            ));
        }
              else{
                    if(type === 'drink'){
                          setDrinks( drinks.map((item) => {
                                if(item.id === id) {return { ...item, buy: !item.buy } } 
                                else{ return item }}
                 ));
    }}
        }
  };
    return (
        <section className='container_fastFood'>
            <header className='food-header'>
                <img src={imgContainer[4].food_logo} alt="logo" />
            </header>
{/* --------------------------------------------------------- */}
            <main>
                 <section className='food'>
                     <h3>pizza</h3>
                    <SearchFunction props={myPizza} numberPurchases={numberPurchases} fun={fun}/>
                </section>
                <section className='food'>
                     <h3>burger</h3>
                    <SearchFunction props={burgers} numberPurchases={numberPurchases} fun={fun}/>
                </section>
                <section className='food'>
                     <h3>drink</h3>
                    <SearchFunction props={drinks} numberPurchases={numberPurchases} fun={fun}/>
                </section>
            </main>
        </section>
    );
};
export default FastFood;
const pizza=[
    {id:1, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat'},
    {id:2, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat'},
    {id:3, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat'},
    {id:4, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:5, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:6, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:7, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:8, img:imgContainer[4].pizza, text:'Lorem ipsum dolor : $125.00', type:'pizza', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' }
]
const burger=[
    {id:1, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:2, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:3, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:4, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:5, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:6, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:7, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:8, img:imgContainer[4].burger, text:'Lorem ipsum dolor : $125.00', type:'burger', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' }
]
const drink=[
    {id:1, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:2, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:3, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:4, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:5, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:6, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:7, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' },
    {id:8, img:imgContainer[4].drink, text:'Lorem ipsum dolor : $125.00', type:'drink', buy:false,
        price:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero error at optio, vero maxime labore est distinctio, magni molestias necessitatibus repellat' }
]