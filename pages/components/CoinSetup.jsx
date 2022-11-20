import React from "react";

const CoinSetup = (props) => {
  return (
    <tbody className="">
      <tr className="bg-[#1a1645] border-b dark:border-gray-700 text-white overflow-x-scroll font-light">
        {/* <th scope="row" className="py-4 font-medium text-white whitespace-nowrap">
                            {props.coin.market_cap_rank}
                        </th> */}
        <td className="px-2 py-4  bg-[#1a1645] sticky left-0">
          <img src={props.coin.image} alt="" className="h-7 flex lg:h-9 " />
          <p className="my-2">{props.coin.symbol.toUpperCase()}</p>
        </td>
        <td className="px-2 py-4">
          ${props.coin.current_price.toLocaleString()}
        </td>
        <td className="px-2 py-4">
          {props.coin.price_change_percentage_24h > 0 ? (
            <p className="my-2 text-green-400">
              {props.coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="my-2 text-red-400">
              {props.coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="px-2 py-4">
          ${props.coin.total_volume.toLocaleString()}
        </td>
        <td className="px-2 py-4">
          ${(props.coin.market_cap / 1000000000).toFixed(2)}B
        </td>
      </tr>
    </tbody>
  );
};

export default CoinSetup;
