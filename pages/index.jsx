import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";

const Home = () => {
  const [coin, setCoin] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get(url).then((response) => {
  //       setCoin(response.data);
  //       console.log(response.data[0]);
  //     });
  //   }, 110);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data[0]);
    });
  }, []);

  return (
    <div className="">
      <Head>
        <title>Coin Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Coin coin={coin} />

      <footer className="flex h-24  text-white items-center justify-center border-t bg-[#1a1645] font-Sora">
        <a
          className="flex items-center justify-center gap-2"
          href="https://plastikminds.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with ❤️ by{" "}
          <span className="text-xl font-semibold bg-gradient-to-r text-transparent bg-clip-text  from-blue-100 to-emerald-100">
            plastik
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
