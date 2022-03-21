import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import Rectangle from "../../eats/img/sliderAouto/Rectangle 7.png";
import Rectangle1 from "../../eats/img/sliderAouto/Rectangle 7 (1).png";
import Rectangle2 from "../../eats/img/sliderAouto/Rectangle 7 (2).png";
import Rectangle3 from "../../eats/img/sliderAouto/Rectangle 7 (3).png";
import Rectangle4 from "../../eats/img/sliderAouto/Rectangle 7 (4).png";

const malumot = [
    {
        id:1,
        img:Rectangle,
        chegirma:6,
        text:"Buy More & Save More",
        nom:"Beverage",
    },
    {
        id:2,
        img:Rectangle1,
        chegirma:10,
        text:"Buy More & Save More",
        nom:"Nuts & Snacks",
    },
    {
        id:3,
        img:Rectangle2,
        chegirma:6,
        text:"Buy More & Save More",
        nom:"Fresh Vegetables",
    },
    {
        id:4,
        img:Rectangle3,
        chegirma:25,
        text:"Buy More & Save More",
        nom:"Fresh Fruits",
    },
    {
        id:5,
        img:Rectangle4,
        chegirma:15,
        text:"Buy More & Save More",
        nom:"Eggs & Dairy",
    },
    {
        id:6,
        img:Rectangle1,
        chegirma:6,
        text:"Buy More & Save More",
        nom:"Beverage",
    },
    
]

export default class AutoPlay extends Component {
    render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    };
    return (
      <div>
        <Slider {...settings}>
            {
                malumot.map(item =>(
                    <div key={item.id}>
                        <div className="slider_box">
                            <div className="box_about">
                                <p>{item.chegirma}% OFF</p>
                                <p>{item.text}</p>
                                <p>{item.nom}</p>
                            </div>
                            <img src={item.img} />
                            <button type="button">SHOP NOW</button>
                        </div>
                    </div>
                ))
            }
            
        </Slider>
      </div>
    );
  }
}