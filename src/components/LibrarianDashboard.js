import React from "react";
import { Link } from "react-router-dom";

const LibrarianDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Librarian Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/manage-users" className="text-blue-500 underline">Manage Users</Link>
        <Link to="/manage-books" className="text-blue-500 underline">Manage Books</Link>
      </div>
    </div>
  );
};

export default LibrarianDashboard;