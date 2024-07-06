import isPropValid from "@emotion/is-prop-valid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app.styles";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { cssSizeToNumber } from "./helpers/cssSizeToNumber";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import { theme } from "./utils/theme";

const Spacer = styled.div`
  height: ${(props) => {
    return `${cssSizeToNumber(props.theme.cssConstants.headerHeight)}px`;
  }};
`;

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Spacer />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
