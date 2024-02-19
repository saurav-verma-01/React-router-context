import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <main className="h-screen overflow-hidden">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<h2>CITIES LAYOUT</h2>} />
            <Route path="cities" element={<h2>CITIES LAYOUT</h2>} />
            <Route path="countries" element={<h2>COUNTRIES LAYOUT</h2>} />
            <Route path="form" element={<h2>Form LAYOUT</h2>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
