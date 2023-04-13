import Icon from "./Icon";
import TextField from "./TextField";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  submit?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  submit,
}) => {
  return (
    <TextField
      className="mt-16"
      icon={<Icon.Search />}
      placeholder="Search for any word..."
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          submit && submit();
        }
      }}
      value={searchQuery}
    />
  );
};

export default SearchBar;
