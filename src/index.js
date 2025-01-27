import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import LibrarianDashboard from "./components/LibrarianDashboard";
import BookSearch from "./components/BookSearch";
import BorrowedBooks from "./components/BorrowedBooks";
import ManageUsers from "./components/ManageUsers";
import ManageBooks from "./components/ManageBooks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/librarian" element={<LibrarianDashboard />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-books" element={<ManageBooks />} />
      </Routes>
    </Router>
  );
};

export default App;