const Navbar = () => {
  return (
    <div className="bg-[#1a1645] font-Sora flex flex-col justify-center items-center py-16">
      <div>
        <p className="text-4xl md:text-5xl text-white">coin tracker</p>
      </div>
      <div className="flex flex-col items-center px-8 text-center py-2 md:py-6">
        <p className="text-sm md:text-xl text-green-400 text-clip">
          Top 20 Cryptocurrency Prices by Market Cap
        </p>
      </div>
    </div>
  );
};

export default Navbar;
