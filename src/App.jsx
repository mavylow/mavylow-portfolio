import "./App.css";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";
import CV from "./CV";
import Portfolio from "./Portfolio";
function App() {
  const { loading } = useContext(ThemeContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CV />
      <Portfolio />
    </>
  );
}

export default App;
