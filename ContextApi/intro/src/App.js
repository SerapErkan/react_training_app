import "./App.css";
// import ThemeContext from './context/ThemeContext';
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <h1>App components </h1>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
