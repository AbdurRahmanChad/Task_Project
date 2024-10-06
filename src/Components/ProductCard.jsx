import { useState } from "react";
import { product } from "../common/Data";

const ProductCard = () => {
  const [item, setItem] = useState(product);

  const filterItems = (catItem) => {
    const updateItems = product.filter((curItem) => {
      return curItem.category === catItem;
    });
    setItem(updateItems);
  };

  return (
    <div className="py-20 lg:px-14 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-semibold lg:mb-10">
            Fillter Products Page
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => setItem(product)}
          >
            All-Product
          </button>
          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => filterItems("chad")}
          >
            Frist
          </button>
          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => filterItems("frist")}
          >
            Chad
          </button>
          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => filterItems("abdur")}
          >
            Abdur
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 py-10">
        {item.map((val, index) => (
          <div key={index} className="bg-red-400 p-6 rounded">
            <div>
              <img src={val.img} alt="images" className="w-full" />
            </div>
            <div className="py-4">
              <h1 className="text-lg font-bold mb-4">{val.title}</h1>
              <button className="text-md font-bold px-4 py-1 bg-lime-500 text-black rounded-md">
                {val.price}
              </button>
              <p className="text-start mt-4">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
