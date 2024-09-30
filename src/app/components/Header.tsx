const Header = () => {
  return (
    <div className="bg-transparent fixed w-full h-24 z-99 flex justify-between items-center px-8">
      <div className="flex justify-between items-center w-2/5 h-full">
        <button className="text-primary-100 flex flex-col justify-center items-center bg-white h-1/2 w-2/5 text-lg">
          molruco
        </button>
        <div className="bg-background-dark text-primary-100 flex flex-col justify-center items-center h-full w-3/5 text-xs">
          몰루코 헤더
        </div>
      </div>
      <div className="flex justify-around items-center w-2/5 h-full">
        <button className="text-base cursor-pointer text-primary-100">
          Intro
        </button>
        <button className="text-base cursor-pointer text-primary-100">
          Career
        </button>
        <button className="text-base cursor-pointer text-primary-100">
          Project
        </button>
        <button className="text-base cursor-pointer text-primary-100">
          Education
        </button>
      </div>
    </div>
  );
};

export default Header;
