import React, { Component} from "react";
import "./Slider1.css";
import Slider from "react-slick";
import apple from "../../eats/img/slider1/apple.png";
import shopping from "../../eats/img/slider1/shopping.png";
import milk from "../../eats/img/slider1/milk.png";
import ichimlik from "../../eats/img/slider1/ichimlik.png";
import hamburger from "../../eats/img/slider1/hamburger.png";
import house from "../../eats/img/slider1/house.png";
const malumot = [
    {

        id:1,
        rasm: apple,
        text: "Vegetables & Fruits",
    },
    {
        id:2,
        rasm: shopping,
        text: "Grocery & Staples",
    },
    {
        id:3,
        rasm: milk,
        text: "Dairy & Eggs",
    },
    {
        id:4,
        rasm: ichimlik,
        text: "Beverages",
    },
    {
        id:5,
        rasm: hamburger,
        text: "Snacks",
    },
    {
        id:6,
        rasm: house,
        text: "Home Care",
    },
    {
        id:7,
        rasm: milk,
        text: "Dairy & Eggs",
    },
]


export default class Responsive extends Component {
    render() {
      var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
      return (
        <div className="slider1">
          <h2> Responsive </h2>
          <Slider {...settings}>
                {
                    malumot.map((item) => (
                        <div key={item.id}>
                            <div className="slide1_box">
                                <img src={item.rasm} />
                                <div className="text">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
          </Slider>
        </div>
      );
    }
  }
