import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import Profile from "./Components/Profile";
import Details from "./Components/Details";
import TechStack from "./Components/TechStack";
import { Certifications } from "./Components/Certifications";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Theme from "./Components/Theme";

function App() {
  const { theme, setTheme, getThemes } = useTheme();

  const themes = getThemes();
  const changeTheme = (val) => {
    setTheme(themes[val]);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="p-4 lg:p-10 min-h-full bg-base-300">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="col">
              <div className="grid gap-4">
                <div className="col">
                  <Theme
                    changeTheme={changeTheme}
                    themeNames={Object.keys(themes)}
                    name={theme.name}
                  />
                </div>
                <div className="col">
                  <Profile />
                </div>
                <div className="col">
                  <Details />
                </div>
                <div className="col">
                  <TechStack />
                </div>
                <div className="col">
                  <Education />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid gap-4">
                <div className="col">
                  <Certifications />
                </div>
                <div className="col">
                  <Projects />
                </div>
                <div className="col">
                  <Experience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
