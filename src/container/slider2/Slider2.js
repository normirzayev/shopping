import React, { useState } from "react";
import "./slider2.css";
import nok from "../../eats/img/slider2/nok.png";
import behi from "../../eats/img/slider2/behi.png";
import bodring from "../../eats/img/slider2/bodring.png";
import olmahon from "../../eats/img/slider2/olmahon.png";
import kokat from "../../eats/img/slider2/kokat.png";
import karzinka from "../../eats/img/slider2/karzinka.png";


export default function Slider2() {
    const [data, setData] = useState([
        {
            id: 1,
            chegirma: 15,
            img: behi,
            text: "Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
        {
            id: 2,
            chegirma: 15,
            img: bodring,
            text: "Available(in stock",
            nom: "Cucumber",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
        {
            id: 3,
            chegirma: 15,
            img: olmahon,
            text: "Available(in stock",
            nom: " Hazelnuts filbert nut",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
        {
            id: 4,
            chegirma: 15,
            img: kokat,
            text: "Available(in stock",
            nom: "Raw broccoli",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
        {
            id: 5,
            chegirma: 15,
            img: nok,
            text: "Available(in stock",
            nom: "Organic quince",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
        {
            id: 6,
            chegirma: 15,
            img: behi,
            text: "Available(in stock",
            nom: "Fresh organic apricot",
            narx: 15,
            karzinka: karzinka,
            count: 0
        },
    ]);
    function minus(item) {
        setData(data =>
            data.map((qiymat) => (
                qiymat.id == item.id && qiymat.count > 0 ? { ...qiymat, count: qiymat.count - 1 } : qiymat
            ))
        )
    };
    function plus(item) {
        setData(data =>
            data.map((qiymat) => (
                qiymat.id === item.id ? { ...qiymat, count: qiymat.count + 1 } : qiymat
            ))
        )
    }
    const [modal, setModal] = useState(true);

    const [modalData, setModalData] = useState({});
    const modal_toggle = (post) => {
        setModalData(post);
        setModal(!modal);
    }
    return (
        <>
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
                                            <button onClick={(e) => minus(item)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={(e) => plus(item)}>+</button>
                                        </div>
                                        <p>${(parseInt(item.narx - item.narx / 100 * item.chegirma) * item.count)}</p>
                                        <img src={item.karzinka} onClick={(e)=>modal_toggle(item)} />
                                    </div>
                                </div>

                            </div>
                        ))
                    }


                </div>
            </div>
            <div className={modal ? "modals" : "modals active"}>
                <div className="modal_oyna">
                <p>${(parseInt(modalData.narx - modalData.narx / 100 * modalData.chegirma) * modalData.count)}</p>
                    <button onClick={(e)=>setModal(!modal)}>chiqish</button>
                </div>
            </div>
        </>
    )
}