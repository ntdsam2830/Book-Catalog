import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import BookInfo from "./pages/bookInfo/BookInfo";
import AllBooks from "./pages/allBooks/AllBooks";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";

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
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
