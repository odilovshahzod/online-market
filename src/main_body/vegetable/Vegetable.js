import React,{useState} from "react";
import "./vegetable.css";
import "../../style.css";
import SearchFunction from "../SearchFunction";
import imgContainer from "../imgContainer";
import organik from "./img_vegetable/vegetable_logo.jpg";
// {/* ----------------------------------------------------------------------------- */}
const Vegetable = ({numberPurchases,baskedList}) => {
    const [infos, setInfos] = useState(info);
    const [newArivalsInfo, setNewArivalsInfo]=useState(new_arivals_info);
    const [featuredProductInfo, setFeaturedProductInfo]=useState(featured_product_info);
  const fun = (id, type) => {
      if(type==='info'){
             setInfos( infos.map((item) => { 
                      if(item.id === id) {return { ...item, buy: !item.buy}}
                      else{ return item} 
            }));
        }
      else{
              if(type === 'new_arivals_info'){ 
                    setNewArivalsInfo(newArivalsInfo.map((item) => { 
                          if(item.id === id) {return { ...item, buy: !item.buy } } 
                          else{ return item } } 
            ));
        }
              else{
                    if(type === 'featured_product_info'){
                          setFeaturedProductInfo( featuredProductInfo.map((item) => {
                                if(item.id === id) {return { ...item, buy: !item.buy } } 
                                else{ return item }}
                 ));
    }}
        }
  };
    return(
            <section className="container_vegetable">
                    <header className="header">
                        <img src={organik}/>
                    <div className="fruit-organic">
                    <span>big sale</span>
                    <h1>fruit organic</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>buy now</button>
                </div>
</header>
{/* ----------------------------------------------------------------------------- */}
<main className="main_container">
        <section className="main">
                <div className='today_deals'>
                    <div>
                        <img style={{width:"330px"}} src={imgContainer[1].grass}/>
                        <h2 style={{textAlign:'center',color:'#62A83D', margin:'30px 0'}}>Today Deals</h2>
                    </div>
                    <div className="add_to_cart">
                        <div className="flex" style={{margin:'15px auto', width:'240px',height:'260px',background:'#F3F3F3'}}>
                          <img style={{width:'180px',height:'100px'}} src={imgContainer[1].black_grapes}/>
                         </div>
                        <h3>Grapes</h3>
                            <div className="star span">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                            </div>
                        <p style={{fontWeight:'bold', margin:'10px 0'}}>$20.00</p>
                        <button>add to cart</button>
                     </div>
                </div>
                <div className="best_sellers">
                    <h3>Best Sellers</h3>
                    <SearchFunction props={infos} fun={fun} numberPurchases={numberPurchases} baskedList={baskedList}/>
                </div>
        </section>
{/* ----------------------------------------------------------------------------- */}
        <section className="main">
                  <div className='today_deals'>
                    <div className="left_img_text">
                        <img style={{width:"330px",marginBottom:'25px'}} src={imgContainer[1].imgVegetable}/>
                        <h1>do you know</h1>
                        <p>What you are eating?</p>
                    </div>
                </div>
                <div className="best_sellers season">
                        <img src={imgContainer[1].cacos}/>
                        <div className="season_text"><span></span></div>
                </div>
        </section>
{/* ----------------------------------------------------------------------------- */}
        <section className="main">
                <div className='today_deals medical'>
                    <div className="herbal_medical flex">
                        <span>25%</span>
                    </div>
                      <p>on Ayurvedic Herbal Medicine</p>
                    <div>
                        <img src={imgContainer[1].unversal}/>
                    </div>
                </div>
                <div className="best_sellers new_arrivals">
                    <div className="new_arrivals_navbar flex">
                        <h1>New Arrivals</h1>
                        <div className="flex">
                            <span>{'<'}</span>
                            <span>{'>'}</span>
                        </div>
                    </div>
                    <SearchFunction props={newArivalsInfo} fun={fun} numberPurchases={numberPurchases}/>
                </div>
        </section>
{/* ----------------------------------------------------------------------------- */}
        <section className="featured_product">
                <div className="new_arrivals_navbar flex">
                        <h1>Featured Product</h1>
                        <div className="flex">
                            <span>{'<'}</span>
                            <span>{'>'}</span>
                        </div>
                </div>
                      <SearchFunction props={featuredProductInfo} fun={fun} numberPurchases={numberPurchases}/>
        </section>
{/* ---------------------------------------------------------------------------- */}
        <section className="latest_blog">
            <div className="latest_blog_img_container">
                <img src={imgContainer[1].girl_img3}/>
            </div>   
            <div className="latest_blog_posted">
                <h1 style={{fontSize:'23px', marginBottom:'12px'}}>Latest Blog</h1>
                <div className='posted flex'>
                      <div className="box">
                          <img src={imgContainer[1].girl_img2}/> 
                          <span className="post_text">
                                <i className="fa fa-user"></i>
                                posted by admin
                              </span>
                          <span className="post_text">
                              <i className="fa fa-comment"></i>
                                commennts
                              </span>
                          <p>Standard blog post with photo</p>
                          <span style={{fontSize:"14px"}}>Lid est loborum dolo rumes fugats untras.<br/>Etharums ser quidem rerum facilis dolores nemis.</span>
                          <button>read more</button>
                      </div>
                      <div className="box">
                          <img src={imgContainer[1].girl_img1}/> 
                          <span className="post_text">
                                <i className="fa fa-user"></i>
                                posted by admin
                          </span>
                          <span className="post_text">
                              <i className="fa fa-comment"></i>
                              commennts
                          </span>
                          <p>Standard blog post with photo</p>
                          <span style={{fontSize:"14px"}}>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna</span>
                          <button>read more</button>
                      </div>
                </div>
            </div>      
        </section>
</main>
{/* ----------------------------------------------------------------------------- */}
<footer className="vegetable_footer">
        <div className="footer_before">
            <div><i className="fa fa-truck"></i>Free Shipping Worldwide</div>
            <div><i className="fa fa-headphones"></i>24X7 Customer Support</div>
            <div><i className="fa fa-arrow-right"></i>Returns and Exchange</div>
            <div><i className="fa fa-phone"></i>Phone number +998(93) 805-29-12</div>
        </div>
                <table>
                    <thead>
                       <tr>
                         <th>My Account</th> 
                         <th>Style Advisor</th>
                         <th>Information</th>
                         <th>Popular Post</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`>`} Login</td>
                            <td>{`>`} Your Account</td>
                            <td>{`>`} Site Map</td>
                            <td>Standard blog post with photo</td>
                        </tr>
                        <tr>
                            <td>{`>`} About us</td>
                            <td>{`>`} Information</td>
                            <td>{`>`} Search Terms</td>
                            <td>Standard blog post with photo</td>
                        </tr>
                        <tr>
                            <td>{`>`} Wishlist</td>
                            <td>{`>`} Addresses</td>
                            <td>{`>`} Advanced Search</td>
                            <td>Standard blog post with photo</td>
                        </tr>
                        <tr>
                            <td>{`>`} Checkout</td>
                            <td>{`>`} Discount</td>
                            <td>{`>`} Privacy Policy</td>
                            <td>Standard blog post with photo</td>
                        </tr>
                        <tr>
                            <td>{`>`} FAQs</td>
                            <td>{`>`} Orders History</td>
                            <td>{`>`} Suppliers</td>
                            <td>Standard blog post with photo</td>
                        </tr>                  
                        <tr>
                            <td>{`>`} Contact Us</td>
                            <td>{`>`} Additional Information</td>
                            <td>{`>`} Our stores</td>
                            <td>Standard blog post with photo</td>
                        </tr>                              
                    </tbody>
                </table>
                <div className="footer_paypal">
                    <div className="subscribe">
                        <input placeholder="Enter your email address"/>
                        <button>subscribe</button>
                    </div>
                    <div className="uzcard">
                        <img src={imgContainer[1].paypal} alt="card"/>
                        <img src={imgContainer[1].visa} alt="card"/>
                        <img src={imgContainer[1].american} alt="card"/>
                        <img src={imgContainer[1].mastercard} alt="card"/>
                    </div>
                    <div className="internet">
                        <a href='#'><i className="fa fa-facebook"></i></a>
                        <a href='#'><i className="fa fa-twitter"></i></a>
                        <a href='#'><i className="fa fa-instagram"></i></a>
                        <a href='#'><i className="fa fa-linkedin"></i></a>
                        <a href='#'><i className="fa fa-youtube"></i></a>
                        <a href='#'><i className="fa fa-google-plus"></i></a>
                        <a href='#'><i className="fa fa-pinterest"></i></a>
                    </div>
                </div>
</footer>
{/* ----------------------------------------------------------------------------- */}
        </section>
    )}
export default Vegetable
// {/* ----------------------------------------------------------------------------- */}
    const info=[
        { id:1, img:imgContainer[1].mango, text:'Mango', price:'$12.00', type:'info', buy:false },
        { id:2, img:imgContainer[1].balgar, text:'Bulgarian', price:'$10.00', type:'info', buy:false },
        { id:3, img:imgContainer[1].cherry, text:'Cherry', price:'$10.00', type:'info', buy:false },
        { id:4, img:imgContainer[1].aple, text:'Apple', price:'$10.00', type:'info', buy:false },
        { id:5, img:imgContainer[1].watermelon, text:'Watermelon', price:'$15.00', type:'info', buy:false },
        { id:6, img:imgContainer[1].carrots, text:'Carrots', price:'$8.00', type:'info', buy:false }]
// {/* ----------------------------------------------------------------------------- */}
    const new_arivals_info=[
        { id:1, img:imgContainer[1].balgar, text:'Bulgarian', price:'$10.00',type:'new_arivals_info', buy:false },
        { id:2, img:imgContainer[1].grapes, text:'Grapes', price:'$18.00',type:'new_arivals_info', buy:false },
        { id:3, img:imgContainer[1].pomegranate, text:'Pomegranate', price:'$15.00',type:'new_arivals_info', buy:false }]
// {/* ----------------------------------------------------------------------------- */}
    const featured_product_info=[
        { id:1, img:imgContainer[1].cherry, text:'Cherry', price:'$10.00', type:'featured_product_info', buy:false },
        { id:2, img:imgContainer[1].watermelon, text:'Watermelon', price:'$15.00', type:'featured_product_info', buy:false },
        { id:3, img:imgContainer[1].apilsin, text:'Apilsin', price:'$13.00', type:'featured_product_info', buy:false },
        { id:4, img:imgContainer[1].cauliflower, text:'Cauliflower', price:'$7.00', type:'featured_product_info', buy:false },
        { id:5, img:imgContainer[1].kiwi, text:'Kivi', price:'$11.00', type:'featured_product_info', buy:false }]