import React, {useState} from 'react';
import './techniques.css'
import logo from './img_techniques/logo.jpg'
import SearchFunction from '../SearchFunction';
import imgContainer from '../imgContainer';
const Techniques = ({numberPurchases}) => {
    const [myTv, setMyTv] = useState(tv);
    const [myNotebook, setMyNotebook]=useState(notebook);
    const [myPhone, setMyPhone]=useState(phone);
    const [myConditioners, setMyConditioners]=useState(conditioners);

  const fun = (id, type) => {
      if(type==='tv'){
             setMyTv( myTv.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
        }
      else{
              if(type === 'notebook'){ 
                    setMyNotebook(myNotebook.map((item) => { 
                          if(item.id === id) {return { ...item, buy: !item.buy } } 
                          else{ return item } } 
            ));
        }
              else{
                    if(type === 'phone'){
                          setMyPhone(myPhone.map((item) => {
                                if(item.id === id) {return { ...item, buy: !item.buy } } 
                                else{ return item }}
                 ));
    }
            else{
                 if(type === 'conditioners'){
                          setMyConditioners(myConditioners.map((item) => {
                                if(item.id === id) {return { ...item, buy: !item.buy } } 
                                else{ return item }}
                 ));
    }}
}}
  };
    return (
        <section className='container_techniques'>
            <header className='techniques_header'>
                <img src={logo} alt="logo" />
            </header>
{/* ------------------------------------------------------ */}
            <main className='techniques_main'>
                   <div className="technology">
                       <h3>watch tv</h3>
                    <SearchFunction props={myTv} fun={fun} numberPurchases={numberPurchases}/>
                </div>
                  <div className="technology">
                       <h3>notebook</h3>
                    <SearchFunction props={myNotebook} fun={fun} numberPurchases={numberPurchases}/>
                </div>
                <div className="technology">
                       <h3>phone</h3>
                    <SearchFunction props={myPhone} fun={fun} numberPurchases={numberPurchases}/>
                </div>
                 <div className="technology">
                       <h3>condensers</h3>
                    <SearchFunction props={myConditioners} fun={fun} numberPurchases={numberPurchases}/>
                </div>
            </main>
        </section>
    );
};
export default Techniques;
const tv=[
    { id:1, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$125.00', type:'tv', buy:false},
    { id:2, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
    { id:3, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
    { id:4, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
    { id:5, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
    { id:6, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
    { id:7, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$125.00', type:'tv', buy:false},
    { id:8, img:imgContainer[5].tv, text:'Lorem ipsum dolor', price:'$135.00', type:'tv', buy:false},
]
const notebook=[
    { id:1, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$125.00', type:'notebook', buy:false},
    { id:2, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
    { id:3, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
    { id:4, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
    { id:5, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
    { id:6, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
    { id:7, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$125.00', type:'notebook', buy:false},
    { id:8, img:imgContainer[5].notebook, text:'Lorem ipsum dolor', price:'$135.00', type:'notebook', buy:false},
]
const phone=[
    { id:1, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$125.00', type:'phone', buy:false},
    { id:2, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
    { id:3, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
    { id:4, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
    { id:5, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
    { id:6, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
    { id:7, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$125.00', type:'phone', buy:false},
    { id:8, img:imgContainer[5].phone, text:'Lorem ipsum dolor', price:'$135.00', type:'phone', buy:false},
]
const conditioners=[
    { id:1, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$125.00', type:'conditioners', buy:false},
    { id:2, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
    { id:3, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
    { id:4, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
    { id:5, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
    { id:6, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
    { id:7, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$125.00', type:'conditioners', buy:false},
    { id:8, img:imgContainer[5].condensoner, text:'Lorem ipsum dolor', price:'$135.00', type:'conditioners', buy:false},
]