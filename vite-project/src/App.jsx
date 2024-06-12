import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import BookInfo from "./pages/bookInfo/BookInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/bookinfo" element={<BookInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
