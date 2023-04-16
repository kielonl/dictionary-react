import { Word } from "../../../types";
import Typography from "../../Typography";
import ListMeanings from "./ListMeanings";
import PlayButton from "./PlayButton";
import Source from "./Source";

interface WordContentProps {
  word: Word;
}
const WordContent: React.FC<WordContentProps> = ({ word }) => {
  //find phonetic in word where text and audio are not empty
  const phonetic = word.phonetics.find(
    (phonetic) => phonetic.text && phonetic.audio
  );

  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-10">
        <Typography variant="headingL">{word.word}</Typography>
        <PlayButton audio={phonetic?.audio} />
      </div>
      <Typography variant="headingM" className="text-purple mb-10">
        {phonetic?.text || word.phonetic}
      </Typography>
      <ListMeanings meanings={word.meanings} />
      <Source sourceUrls={word?.sourceUrls} />
    </div>
  );
};

export default WordContent;
