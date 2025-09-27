import './main.css';
//Images
import Tag from './images/Nametags.svg';
import Big from './images/big-burg.jpg';
import Juice from './images/1st-juice.jpg';
import Burg from './images/some-burg.jpg';
import Frie from './images/des-fries.jpg';
import Cookie from './images/cookie-coffee.png';
import Fam from './images/Father-daughter.jpg';
import Mob from './images/phone-cips.png';
import Gif from './images/gifcard.png';
import Cow from './images/cow-squad.jpg';
import Play from './images/CFA Play Footer Icon.png';
import Ip from './images/ip2.png';
import Gp from './images/google.png';

function Main() {
    return (
        <div className='str'>
            <div className="adj1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4><img className="img-fluid" src={Tag} alt="tag" /> Welcome</h4>
                        <h1 className="bg">An original then, an<br/>original now</h1>
                        <button className='btn1'><img className="img-fluid" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/carryout-icon.svg?la=en&h=24&w=24" alt="cart" /> Order pickup</button>
                        <button className='btn2'><img className="img-fluid" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/delivery-car-icon.svg?la=en&amp;h=22&amp;w=34" loading="lazy" alt="Delivery Car Icon" /> Order delivery</button>
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src={Big} alt="burger" />
                    </div>
                </div>
            </div>
            </div>

            <div className="sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="first">
                                <img src={Juice} alt="juice img" className='img-fluid' />
                                <div className="first1">
                                    <p>Limited time</p>
                                    <h2>Cherry Berry &<br /> Sprite<sup>®</sup></h2>
                                    <p className="para1">Cheers to a new Cherry Berry. It’s a berry<br /> refreshing beverage you’ll want to sip all<br /> season long. Try our limited-time Cherry<br /> Berry & Sprite today, made with natural<br /> cherry and berry flavors.</p>
                                    <button className="btn">View products</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="second">
                                <img src={Burg} alt="burger img" className='img-fluid' />
                                <div className="first1">
                                    <p>Limited time</p>
                                    <h2>Pretzel Cheddar Club</h2>
                                    <p className="para1">Your choice of original, grilled or spicy filet on<br /> a toasted pretzel bun, stacked with cheddar<br /> cheese and applewood smoked bacon.<br /> Served with a side of Creamy Dijon Mustard<br /> Sauce.</p>
                                    <button className="btn">View products</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="third">
                                <img src={Frie} alt="fries img" className='img-fluid' />
                                <div className="first1">
                                    <p>Customer favorite</p>
                                    <h2>Waffle Potato Fries</h2>
                                    <p className="para1">Waffle-cut potatoes cooked in canola oil<br /> until crispy on the outside and tender on the<br /> inside. Then sprinkled with just the right<br /> amount of sea salt.</p>
                                    <button className="btn">View products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Explore the full menu</h2>
                            <p>Whether you're hungry for a Chick-fil-A<sup>®</sup> Chicken Sandwich or salads<br/> prepared fresh daily, we're here to serve you delicious food made with<br/> quality ingredients every day (except Sunday).</p>
                            <button className="btn">View the menu</button>
                        </div>

                        <div className="col-md-6">
                            <img src={Cookie} alt="coffe img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec4">
              <div className="container-fluid">  
                <div className="row">
                   <div className="img-fluid"> 
                    <div className="col-md-12">
                       <div className="bg1"> 
                        <div className="col-md-5">
                            <p>Chick-fil-A Catering</p>
                            <h2>Catering for every occasion</h2>
                            <p className='para1'>From breakfast items and party trays to packaged meals, Chick-<br/>fil-A<sup>®</sup> Catering has something for every gathering.</p>
                            <button className="btn">View catering menu</button>
                        </div>
                        <div className="col-md-7"></div>
                       </div> 
                    </div>
                   </div> 
                </div>
              </div>
            </div>

            <div className="sec5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Fam} alt="father with daughter" className='img-fluid'/>
                        </div>

                        <div className="col-md-6 sid">
                            <p>Rewards</p>
                            <h2>Life is sweeter with rewards</h2>
                            <p className='para1'>When you join the Chick-fil-A One<sup>®</sup> rewards program you can start earning points to redeem for the food you love.</p>
                            <button className="btn">Learn how our loyalty program works</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 dol">
                            <p><img src={Gif} alt="gift-card" className='img-fluid'/> Chick-fil-A eGift Cards</p>
                            <h2>Add a little “yay” to their day</h2>
                            <p className='para1'>Chick-fil-A eGift cards are just as easy to give as they are to receive.<br/> Order online or in the app and choose an amount from $5-$100 to<br/> deliver some deliciousness right to their inbox.</p>
                            <button className="btn" Style="background-color: white; color: #dd0031;">Send an eGift card</button>
                            <button className="btn" Style="margin-left:10px;">Learn about gift cards</button>
                        </div>

                        <div className="col-md-6 sid">
                            <img src={Mob} alt="Mobile cips" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sec7">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Cow} alt="Squid-Sq-Cow" className='img-fluid'/>
                    </div>

                    <div className="col-md-6 bg">
                        <center>
                            <img src={Play} alt="some-icon" className='img-fluid' Style="margin-top:160px;"/>
                            <h2>Family time at<br/> your fingertips</h2>
                            <p>The Chick-fil-A Play<sup>TM</sup>  App is your home for free, family-friendly shows, games and activities designed to create more time with your favorite people.</p>

                            <button className="btn"><img src={Ip} alt="iphone-logo" className='img-fluid'/>Download on the<br/><a>App Store</a></button>
                            <button className="btn"><img src={Gp} alt="google-play" className='img-fluid'/>GET IT ON<br/><a>Google Play</a></button>
                        </center>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Main;