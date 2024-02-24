import "../Components/Corner.css";
import { FaBell } from "react-icons/fa";
import Card from "./Card";
import Checkout from "./Checkout";

function Corner() {
  const name = [
    { name: "Milkshake choco with oreo", cost: "Rs. 70.000" },
    { name: "Indomie noddles extra spicy", cost: "Rs. 70.000" },
    { name: "Indomie noddles extra spicy", cost: "Rs. 70.000" },
  ];
  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <div className="flex justify-between items-center">
        <h6 className="font-bold text-md ">Order List</h6>
        <FaBell className="text-[#E1045F]" />
      </div>
      <p className="text-gray-400 text-sm pt-1">#08400559917</p>

      <p>Items</p>

      <div className="flex flex-col gap-4">
      {name.map((val) => (
        <Card key={val.name} name={val.name} cost={val.cost}></Card>
      ))}
      </div>

      {/* <Checkout  subtotal={167}/> */}
    </div>
  );
}

export default Corner;
