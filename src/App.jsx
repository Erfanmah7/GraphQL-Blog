import Layout from "./components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/Theme";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";
import NotFind from "./components/404/NotFind";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              //:variable
              <Route path="/authors/:slug" element={<AuthorPage />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path="/*" element={<NotFind />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
