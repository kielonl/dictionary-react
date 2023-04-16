import { useState } from "react";
import { getWord } from "../../services/apiService";
import { Word } from "../../types";
import SearchBar from "../SearchBar";
import UpperBar from "./UpperBar";
import NoWord from "./Word/NoWord";
import Source from "./Word/Source";
import WordContent from "./Word/WordContent";

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [word, setWord] = useState<Word | null>(null);

  console.log(word);
  // const audo = new Audio(audioUrl);

  const fetchWord = async () => {
    const result = await getWord(searchQuery);
    if (result?.response?.status > 400) {
      return setWord(null);
    }
    setWord(result[0]);
  };

  //get audio from word

  // const playAudio = () => {
  //   audo.play();
  // };

  return (
    <div className="container mx-auto px-4">
      {/* <button onClick={playAudio}>test audio</button> */}
      <UpperBar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submit={() => fetchWord()}
      />
      {!word && <NoWord />}
      {word && <WordContent word={word} />}
    </div>
  );
};
