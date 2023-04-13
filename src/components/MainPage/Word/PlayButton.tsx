const PlayButton = () => {
  return (
    <button className="group w-20 h-20 bg-purple/25 hover:bg-purple rounded-full relative">
      <div
        className="w-0 h-0
        ml-8
    border-t-[10px] border-t-transparent group-hover:border-t-transparent
    border-l-[20px] border-purple group-hover:border-white
    border-b-[10px] border-b-transparent group-hover:border-b-transparent
    "
      ></div>
    </button>
  );
};

export default PlayButton;
