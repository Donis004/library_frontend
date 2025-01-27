import React, { useEffect, useState } from "react";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/borrowed-books");
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error("Error fetching borrowed books", error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Borrowed Books</h1>
      <ul>
        {borrowedBooks.map((book) => (
          <li key={book.id} className="border-b py-2">{book.title} - Due Date: {book.dueDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;