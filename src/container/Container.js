import React, {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderAuto from "./sliderAuto/SliderAuto";
import rasm from "../eats/img/container/rasm.png";
import rasm1 from "../eats/img/container/rasm1.png";
import rasm2 from "../eats/img/container/rasm2.png";
import Slider1 from "./slider1/Slider1";
import Slider2 from "./slider2/Slider2";
import Slider3 from "./slider3/Slider3";
import Slider4 from "./slider4/Slider4";
import visa from "../eats/img/container/Visa.png";
import masterCard from "../eats/img/container/MasterCard.png";
import maestro from "../eats/img/container/Maestro.png";
import cirrus from "../eats/img/container/Cirrus.png";
import express from "../eats/img/container/Express.png";
import "./container.css";

export function Container(){
    useEffect(() => {
        AOS.init();
    },[])
    return(
        <>
            <div className="container" data-aos="fade-up">
                <div className="sliderAuto">
                    <SliderAuto />    
                </div>
                <div className="cont_container">
                    <Slider1 / >
                    <div data-aos="fade-up">
                        <Slider2 />
                    </div>
                    <div className="bestValue">
                        <p>Offers</p>
                        <h2>Best Values</h2>
                        <div className="value_boxer">
                            <div className="value_box" data-aos="flip-right">
                                <img src={rasm} />
                                <div className="value_text">
                                    <h1>Daily <br /> Essentials</h1>
                                    <p>20% off <br /> Everyday</p>
                                    <button type="button">SHOP NOW</button>
                                </div>
                            </div>
                            <div className="value_box" data-aos="flip-right">
                                <img className="orta" src={rasm1} />
                                <div className="value_text bir">
                                    <h1>GET UP TO</h1>
                                    <p>30% OFF</p>
                                    <button type="button">SHOP NOW</button>
                                </div>
                            </div>
                            <div className="value_box" data-aos="flip-right">
                                <img src={rasm2} />
                                <div className="value_text ikki">
                                    <h1>Special <br /> Discount</h1>
                                    <p>For All Items</p>
                                    <button type="button">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cashback" data-aos="fade-up">
                        <div className="opacity">
                            <h1>Get $5 Cashback! Min Order of $50</h1>
                            <p>USE CODE :  COMBOSUPERR2a</p>
                        </div>
                    </div>
                   <div data-aos="fade-down">
                       <Slider3 />
                   </div>
                    <div data-aos="fade-up">  
                        <Slider4 />
                    </div>
                </div>  
                <div className="footer">
                    <div className="footer_qism">
                        <div className="footer_logo">
                            <h1>LOGO 🍎🥝</h1>
                            <p>Address: 60-49 Road 11378 New York</p>
                            <p>Phone: +998 99 798-78-40 Email:</p>
                            <p>hello@colorlib.com</p>
                        </div>
                        <div className="full_link">
                            <ul>
                                <h1>Useful link</h1>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Delivery infomation</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </ul>
                        </div>
                        <div className="footer_link">
                            <ul>
                                <li>home</li>
                                <li>product</li>
                                <li>contact</li>
                                <li>stores</li>
                            </ul>
                        </div>
                        <div className="download_app">
                            <h1>Download App</h1>
                            <div className="yuklash">
                                <a href="#">
                                    <i className="fab fa-apple"></i>
                                    <div className="app_store">
                                        <p>Available on the</p>
                                        <h1>App Store</h1>
                                    </div>
                                    <span></span>
                                </a>
                                <a href="#">
                                    <i className="fab fa-google-play"></i>
                                    <div className="play_market">
                                        <p>GET IN ON</p>
                                        <h1>google play</h1>
                                    </div>
                                </a>
                            </div>
                            <h1>Sign Up for Our Newsletter</h1>
                            <form action="#">
                                <input type="email" placeholder="enter email address" />
                                <button type="button">SUBSCRIBE</button>
                            </form>
                            <h1>Payment Method</h1>
                            <div className="company">
                                <img src={visa} alt="" />
                                <img src={masterCard} alt="" />
                                <img src={maestro} alt="" />
                                <img src={cirrus} alt="" />
                                <img src={express} alt="" />
                            </div>
                        </div>
                    </div>
                    <p>Copyright ©2021 All rights reserved | This template is made with 💚 by LOGO</p>
                </div>
            </div>
        </>
    )
}