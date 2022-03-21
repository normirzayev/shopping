import React from "react";
import { Container } from "../container/Container";
import karzinka from "../eats/img/karzinka.png";
import location from "../eats/img/location.png";
import "./main.css";
export function Main(){
    return(
        <>
            <div className="main">
                <div className="navbar">
                   <i className="far fa-envelope"></i>
                   <p>Hello@colorlib.com</p>
                   <span></span>
                   <p>Free Shipping for all order of $99</p>
                   <div className="icons">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                   </div>
                </div>
                <div>
                    <h1>hello world</h1>
                </div>
                <div className="logo">
                    <div className="logoItem">
                        <div className="logo_left">
                            <h1>LOGO🍎</h1>
                            <form action="#">
                                <img src={location} />
                                <select name="#" id="#">
                                    <option value="Gurugram">Gurugram</option>
                                    <option value="Namangan">Namangan</option>
                                    <option value="Toshkent">Toshkent</option>
                                    <option value="Fargona">Fargona</option>
                                    <option value="Andijon">Andijon</option>
                                </select>
                                <div className="logo_search">
                                    <i className="fa fa-search"></i>
                                    <input type="search" placeholder="Search for products..."/>
                                </div>
                            </form>
                        </div>
                        <div className="logo_right">
                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <p>+998 99 798-78-40</p>
                            </div>
                            <div className="like">
                                <i className="far fa-heart"></i>
                                <span>3</span>
                            </div>
                            <div className="profile">
                                <i className="far fa-user"></i>
                                <select name="#" id="#">
                                    <option value="John doe">John doe</option>
                                    <option value="Jack Ma">Jack Ma</option>
                                    <option value="Mark Jem">Mark Jem</option>
                                    <option value="Koln Brek">Koln Brek</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navlink">
                    <div className="link">
                        <div className="menu">
                            <div className="span">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p>Select Categories</p>
                        </div>
                        <a href="#">HOME</a>
                        <a href="#">PROJECT</a>
                        <a href="#">STORES</a>
                        <a href="#">CONTACT</a>
                    </div>
                    <button><img src={karzinka} /> CART2</button>
                </div>
                <Container />
            </div>
        </>
    )
}