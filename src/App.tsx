import isPropValid from "@emotion/is-prop-valid";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app.styles";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { cssSizeToNumber } from "./helpers/cssSizeToNumber";
import { theme } from "./utils/theme";

const Spacer = styled.div`
  height: ${(props) => {
    return `${cssSizeToNumber(props.theme.cssConstants.headerHeight)}px`;
  }};
`;

const Home = lazy(() => import("./pages/home/Home"));
const Properties = lazy(() => import("./pages/properties/Properties"));

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Spacer />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/properties" element={<Properties />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
