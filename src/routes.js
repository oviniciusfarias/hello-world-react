import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageAbout from "./pages/About";
import PageHome from "./pages/Home";
import Page404 from "./pages/404";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import ScrollToTop from "components/ScrollToTop";



function AppRoutes() {
  return (
    <BrowserRouter>

    <ScrollToTop />

      <Menu />
      
      <Routes>
        <Route path="/" element={ <DefaultPage /> }>
          <Route index element={ <PageHome /> } />
          <Route path="sobre-mim" element={ <PageAbout /> } />
        </Route>
        
        <Route path="posts/:id/*" element={ <Post /> } />
        
        <Route path="*" element={ <Page404 /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
