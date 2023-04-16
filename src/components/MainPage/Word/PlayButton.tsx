interface PlayButtonProps {
  audio?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ audio }) => {
  const playAudio = () => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  };

  return (
    <button
      onClick={playAudio}
      className="group sm:w-20 sm:h-20 w-12 h-12 bg-purple/25 hover:bg-purple rounded-full relative mr-2"
    >
      <div
        className="w-0 h-0
        ml-5 sm:ml-8
        border-t-[7px] sm:border-t-[10px] border-t-transparent group-hover:border-t-transparent
        border-l-[12px] sm:border-l-[20px] border-purple group-hover:border-white
        border-b-[7px] sm:border-b-[10px] border-b-transparent group-hover:border-b-transparent
    "
      ></div>
    </button>
  );
};

export default PlayButton;
