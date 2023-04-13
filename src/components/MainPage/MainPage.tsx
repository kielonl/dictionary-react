import SearchBar from "../SearchBar";
import UpperBar from "./UpperBar";
import WordContent from "./Word/WordContent";

export const MainPage = () => {
  return (
    <div className="container mx-auto px-4">
      <UpperBar />
      <SearchBar />
      <WordContent />
    </div>
  );
};
