import Layout from "./components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/Theme";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
