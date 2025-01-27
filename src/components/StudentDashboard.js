import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/search" className="text-blue-500 underline">Search Books</Link>
        <Link to="/borrowed" className="text-blue-500 underline">View Borrowed Books</Link>
      </div>
    </div>
  );
};
export default StudentDashboard;
