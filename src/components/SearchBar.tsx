import Icon from "./Icon";
import TextField from "./TextField";

const SearchBar = () => {
  return (
    <TextField
      className="mt-16"
      icon={<Icon.Search />}
      placeholder="Search for any word..."
    />
  );
};

export default SearchBar;
