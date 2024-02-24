import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

function Card(props) {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="border rounded-lg p-2">
        <div className="flex gap-3 justify-between items-center">
          <div className="text-xs">
            <p>{props.name}</p>
            <p className="text-gray-400">{props.cost}</p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <button
              className="  bg-white rounded-lg border p-1 px-3"
              onClick={decre}
            >
              -
            </button>
            <button className=" bg-white rounded-lg border p-1 px-3">
              {count}
            </button>
            <button
              className=" bg-white rounded-lg border p-1 px-3"
              onClick={incre}
            >
              +
            </button>
          </div>
        </div>
        <div className="pt-2 flex gap-3">
          <input
            className="grow text-xs p-2 rounded bg-gray-100"
            type="text"
            placeholder="Insert any notes..."
          />

          <button className=" border rounded-lg p-0 px-2 text-[#E56E92] border-[#E56E92] bg-[#FFC3DA] ">
            <MdDeleteOutline size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
