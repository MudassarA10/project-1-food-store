import React from "react";
import Table from "./Piechild";
import pic1 from "../../assets/images/img1.jpg";
import pic2 from "../../assets/images/img2.jpg";
import pic3 from "../../assets/images/img3.jpg";
import pic4 from "../../assets/images/img4.jpg";
import pic5 from "../../assets/images/img5.jpg";
import pic6 from "../../assets/images/img6.jpg";
import pic7 from "../../assets/images/img7.jpg";
import pic8 from "../../assets/images/img8.jpg";
import pic9 from "../../assets/images/img9.jpg";
import pic10 from "../../assets/images/img10.jpg";
import pic11 from "../../assets/images/img11.jpg";
import pic12 from "../../assets/images/img12.jpg";
import pic13 from "../../assets/images/img13.jpg";
import pic14 from "../../assets/images/img14.jpg";
import pic15 from "../../assets/images/img15.jpg";
import pic16 from "../../assets/images/img16.jpg";

const Alpie = () => {
  const pieData = [
    {
      image: pic1,
      name: "Cranberry pie",
      description: "A Christmas favorite",
      price: 12.99,
    },
    {
      image: pic2,
      name: "Caramel Popcorn Cheese Cake",
      description: "We thought its possible but it worked! ",
      price: 12.99,
    },
    {
      image: pic3,
      name: "Cheeze Cake",
      description: "Delicious apple pie with a flaky crust.",
      price: 12.99,
    },
    {
      image: pic4,
      name: "Cherry pie",
      description: "A summer classic! ",
      price: 12.99,
    },
    {
      image: pic5,
      name: "Pistache Cheese Cake",
      description: "Pistache Cheese Cake pies ",
      price: 12.99,
    },
    {
      image: pic6,
      name: "Pumpkin Pie",
      description: "Classic pumpkin pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic7,
      name: "Christmas apple pie",
      description: "Happy holidays with this pie! .",
      price: 15.99,
    },
    {
      image: pic8,
      name: "Rhubarb Pie",
      description: "My God, so sweet!.",
      price: 15.99,
    },
    {
      image: pic9,
      name: "Chocolate Cheese Cake",
      description: "With extra Belgian chocolate!.",
      price: 15.99,
    },
    {
      image: pic10,
      name: "Strawberry Pie ",
      description: "My God, so sweet!.",
      price: 15.99,
    },
    {
      image: pic11,
      name: "Pumpkin Pie",
      description: "Classic pumpkin pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic12,
      name: "Strawbery pie",
      description: "Strabery pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic13,
      name: "Birthday Pie",
      description: "Birthday pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic14,
      name: "Apple pie",
      description: "Apple pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic15,
      name: "Cherry pie",
      description: "Classic Cherry pie with a hint of spice.",
      price: 15.99,
    },
    {
      image: pic16,
      name: "Pumpkin Pie",
      description: "Classic pumpkin pie with a hint of spice.",
      price: 15.99,
    },
  ];
  return (
    <div>
      <h1>Our Selection Pies</h1>
      <p>Current selesction of pies</p>
      <Table data={pieData} />
    </div>
  );
};

export default Alpie;
