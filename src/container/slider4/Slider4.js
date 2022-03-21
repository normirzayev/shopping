import React, { useState} from "react";
import "./modal.css";
import kartoshka from "../../eats/img/slider4/kartoshka.png";
import anjir from "../../eats/img/slider4/anjir.png";
import qulupnay from "../../eats/img/slider4/qulupnay.png";
import baqlajon from "../../eats/img/slider4/baqlajon.png";
import tuxum from "../../eats/img/slider4/tuxum.png";
import karzinka from "../../eats/img/slider4/karzinka.png";

export default function Slider4() {
    const [data, setdata] = useState([
        {
            id:1,
            chegirma: 15,
            img: kartoshka,
            text:"Available(in stock",
            nom: "Red Apple",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:2,
            chegirma: 15,
            img: anjir,
            text:"Available(in stock",
            nom: "capsicum-green",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:3,
            chegirma: 15,
            img: qulupnay,
            text:"Available(in stock",
            nom: "Pear fruit",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:4,
            chegirma: 15,
            img: baqlajon,
            text:"Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:5,
            chegirma: 15,
            img: tuxum,
            text:"Available(in stock",
            nom: "Organic quince",
            narx: 15,
            karzinka: karzinka,
            count:0
        },
        {
            id:6,
            chegirma: 15,
            img: kartoshka,
            text:"Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count:0,
            price:1
        },
    ])
    function minus(item){
        setdata(data=> data.map((qiymat) => (
                qiymat.id == item.id && qiymat.count > 0 ? {...qiymat, count:qiymat.count - 1} : qiymat
            ))
        )
    }
    function plus(item){
        setdata(data => data.map((qiymat) => (
                qiymat.id == item.id ? {...qiymat, count: qiymat.count+ 1} : qiymat
            ))
        )
    }
    function modal(item){
        console.log(item);
    }
    return (
        <div className="slider2">
        <p>For You</p>
        <h2> Top Featured Products </h2>
        <div className="slider_boxer">
            {
                data.map((item) => (
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
                                    <button onClick={(e)=> minus(item)}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={(e)=> plus(item)}>+</button>
                                </div>
                                <p>{((parseInt(item.narx - item.narx / 100 * item.chegirma)) * item.count)}$</p>
                                <img src={item.karzinka} onClick={(e)=> modal(item)} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
}