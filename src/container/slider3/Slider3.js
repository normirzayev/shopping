import React, { Component, useState } from "react";
import Slider from "react-slick";
import olma from "../../eats/img/slider3/olma.png";
import balgar from "../../eats/img/slider3/balgar.png";
import nok from "../../eats/img/slider3/nok.png";
import maymunjon from "../../eats/img/slider3/maymunjon.png";
import qulupnay from "../../eats/img/slider3/qulupnay.png";
import karzinka from "../../eats/img/slider3/karzinka.png";


export default function Slider3() {
    const [data, setData] = useState([
        {
            id:1,
            chegirma: 15,
            img: olma,
            text:"Available(in stock",
            nom: "Red Apple",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:2,
            chegirma: 15,
            img: balgar,
            text:"Available(in stock",
            nom: "capsicum-green",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:3,
            chegirma: 15,
            img: nok,
            text:"Available(in stock",
            nom: "Pear fruit",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:4,
            chegirma: 15,
            img: maymunjon,
            text:"Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:5,
            chegirma: 15,
            img: qulupnay,
            text:"Available(in stock",
            nom: "Organic quince",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:6,
            chegirma: 15,
            img: olma,
            text:"Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
    ]);
    function minus(item){
        setData(data=> data.map((qiymat)=>(
                qiymat.id == item.id && qiymat.count > 0 ? {...qiymat, count: qiymat.count - 1} : qiymat              
            ))
        )
    };
    function plus(item){
        setData(data=> data.map(qiymat => (
                qiymat.id == item.id ? {...qiymat, count: qiymat.count + 1} : qiymat
            ))
        )
    }
    return (
      <div className="slider2">
        <p>For You</p>
        <h2> Top Vegetables & Fruits Products</h2>
          <div className="slider_boxer">
            {
                data.map(item => (
                    <div key={item.id}>
                        <div className="slider2_box">
                            <div className="skidka">
                                <p>{item.chegirma}% OFF</p>
                                <i className="far fa-heart"></i>
                            </div>
                            <img src={item.img} />
                            <span>{item.text}</span>
                            <h2>{item.nom}</h2>
                            <p>${parseInt(item.narx - item.narx / 100 * item.chegirma)}<span><del>${item.narx}</del></span></p>
                            <div className="soBuy">
                                <div className="hisob">
                                    <button onClick={(e) => minus(item)}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={(e)=> plus(item)}>+</button>
                                </div>
                                <p>${(parseInt(item.narx - item.narx / 100 * item.chegirma) * item.count)}</p>
                                <img src={item.karzinka} />
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
      </div>
    );
}