import React, { useState } from "react";
import '../style.css'
const SearchFunction = ({props, fun , numberPurchases,baskedList}) => {
 const style={
        green:{background:'#46c946'},
        red:{background:'#f33434'}
    }   
    return(
        <section className="function">
                { props.map(prop=>{
                        const {id, img, text, price, buy ,type}=prop
                return(
                    <div className="table" key={id}>
                        <div className="img_container flex">
                                <img src={img} alt="img"/>
                        </div>
                        <div className="text-cont">
                                <p className="text">{text}</p>
                                <div className="span star">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                </div>
                                <p className="price">{price}</p>
                                <button className="shopBtn" style={buy? style.red : style.green} onClick={()=>{fun(id, type); numberPurchases(buy); baskedList(prop)}}>
                                    {buy? 'no':'buy'}
                                </button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
export default SearchFunction