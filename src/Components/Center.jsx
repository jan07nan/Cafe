import React from "react";
import "./Center.css";
import { CiSearch } from "react-icons/ci";
import noodle from "../Images/noodles.png";
import milkshake from "../Images/milkshake.png";
import fruit from "../Images/fruit.png";
import donut from "../Images/donut.png";
import ListCard from "./ListCard";

function Center() {
  const foodname = [
    { image: noodle, name: "Indomie noddles extra spicy", cost: "Rs. 120.00" },
    { image: milkshake, name: "Milkshake choco with oreo", cost: "Rs. 80.00" },
    {
      image: fruit,
      name: "Creamy donouts with sugar topping",
      cost: "Rs. 130.00",
    },
    { image: donut, name: "Mix fruites 3 variant", cost: "Rs. 50.00" },
    { image: noodle, name: "Indomie noddles extra spicy", cost: "Rs. 120.00" },
    { image: noodle, name: "Indomie noddles extra spicy", cost: "Rs. 120.00" },
    { image: noodle, name: "Indomie noddles extra spicy", cost: "Rs. 120.00" },
    { image: noodle, name: "Indomie noddles extra spicy", cost: "Rs. 120.00" },
  ];

  return (
    <div className="grow p-2 px-3">
      <div className="namebar">
        <div className="center-name">
          <p className="shop-title">Jan vi</p>
          <p className="date">Friday, Feb 23 2024</p>
        </div>
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search category or menu"
          />
          <button className="search-img-btn">
            <CiSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="list-items">
        <a href="#">All</a>
        <a href="#">Tea</a>
        <a href="#">Coffee</a>
        <a href="#">Juice</a>
        <a href="#">Meal</a>
        <a href="#">Snacks</a>
        <a href="#">Dessort</a>
      </div>
      <p className="head-title">Choose dishes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foodname.map((val) => (
          <ListCard image={val.image} name={val.name} cost={val.cost} />
        ))}
      </div>
    </div>
  );
}

export default Center;
