import { useEffect, useState } from "react";
import { getWord } from "../../services/apiService";
import { Word } from "../../types";
import SearchBar from "../SearchBar";
import UpperBar from "./UpperBar";
import NoWord from "./Word/NoWord";
import WordContent from "./Word/WordContent";

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [word, setWord] = useState<Word[] | null>(null);

  const fetchWord = async () => {
    const result = await getWord(searchQuery);
    if (result?.response?.status > 400) {
      return setWord(null);
    }
    setWord(result);
  };

  return (
    <div className="container mx-auto px-4">
      <UpperBar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submit={() => fetchWord()}
      />
      {!word && <NoWord />}
      {word && <WordContent word={word[0]} />}
    </div>
  );
};
