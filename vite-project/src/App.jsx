import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import BookInfo from "./pages/bookInfo/BookInfo";
import AllBooks from "./pages/allBooks/AllBooks";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AddBookPage from "./pages/user/AddBookPage";
import UpdateBookPage from "./pages/user/UpdateBookPage";
import MyState from "./context/myState";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import ScrollTop from "./components/scrollTop/ScrollTop";

const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/bookinfo" element={<BookInfo />} />
            <Route path="/allbooks" element={<AllBooks />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/addbook"
              element={
                <ProtectedRouteForUser>
                  <AddBookPage />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/updatebook/:id"
              element={
                <ProtectedRouteForUser>
                  <UpdateBookPage />
                </ProtectedRouteForUser>
              }
            />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  );
};

export default App;
