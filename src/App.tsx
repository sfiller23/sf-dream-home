import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app.styles";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { THEME } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
