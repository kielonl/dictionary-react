import { Word } from "../../../types";
import Typography from "../../Typography";
import ListMeanings from "./ListMeanings";
import NoWord from "./NoWord";
import PlayButton from "./PlayButton";

interface WordContentProps {
  word: Word;
}
const WordContent: React.FC<WordContentProps> = ({ word }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-10">
        <Typography variant="headingL">{word.word}</Typography>
        <PlayButton />
      </div>
      <Typography variant="headingM" className="text-purple mb-10">
        {word.phonetic}
      </Typography>
      <ListMeanings meanings={word.meanings} />
    </div>
  );
};

export default WordContent;
