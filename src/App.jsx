import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableOnePage } from "./pages/TableOnePage.jsx";
import { TableTwoPage } from "./pages/TableTwoPage.jsx";
import Home from "./pages/Home.jsx";
import MySidebar from "./components/MySidebar.jsx";

export const App = () => {
  return (
    <>
      <Router>
        <MySidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/table-data-one' element={<TableOnePage />} />
          <Route path='/table-data-two' element={<TableTwoPage />} />
        </Routes>
      </Router>
    </>
  );
};
