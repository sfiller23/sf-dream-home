import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app.styles";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { cssSizeToNumber } from "./helpers/cssSizeToNumber";
import Home from "./pages/home/Home";
import { THEME } from "./utils/theme";

const Spacer = styled.div`
  height: ${(props) => {
    return `${cssSizeToNumber(props.theme.cssConstants.headerHeight)}px`;
  }};
`;

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Header />
      <Spacer />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
