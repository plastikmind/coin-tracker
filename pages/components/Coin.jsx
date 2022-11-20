import CoinSetup from "./CoinSetup";

export const Coin = (props) => {
  return (
    <div className="flex bg-[#1a1645] items-center justify-center">
      <div className="relative overflow-x-auto ">
        <table className="w-full md:min-w-[550px] lg:min-w-[800px] text-sm  lg:text-lg text-left text-white ">
          <thead className="text-xs sm:text-[14px] lg:text-xl  text-white uppercase">
            <tr>
              <th
                scope="col"
                className="px-2 py-1 sticky left-0 bg-[#1a1645] font-medium"
              >
                Name
              </th>
              <th scope="col" className="px-2 py-1 font-medium">
                Price
              </th>
              <th scope="col" className="px-2 py-1 font-medium">
                24h
              </th>
              <th scope="col" className="px-2 py-1 font-medium">
                Volume
              </th>
              <th scope="col" className="px-2 py-1 font-medium">
                Market Cap
              </th>
            </tr>
          </thead>
          {props.coin.map((coin, z) => {
            return <CoinSetup coin={coin} key={z} />;
          })}
        </table>
      </div>
    </div>
  );
};
