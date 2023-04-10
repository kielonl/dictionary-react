import Icon from "./components/Icon";
import TextField from "./components/TextField";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <TextField icon={<Icon.Search />} placeholder="Search for any word..." />
    </ThemeContextProvider>
  );
};

export default App;
