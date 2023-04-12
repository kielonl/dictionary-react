import { MainPage } from "./components/MainPage/MainPage";
import FontContextProvider from "./contexts/FontContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <FontContextProvider>
        <MainPage />
      </FontContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
