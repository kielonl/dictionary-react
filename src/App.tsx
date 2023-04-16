import { MainPage } from "./components/MainPage/MainPage";
import FontContextProvider from "./contexts/FontContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <FontContextProvider>
        <div className="bg-white dark:bg-black dark:text-white min-h-screen">
          <MainPage />
        </div>
      </FontContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
