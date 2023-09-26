import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyles from "styles/GlobalStyle";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "app/router";

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>{content}</BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
