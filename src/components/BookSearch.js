import React, { useState } from "react";

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/books?search=${searchTerm}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Books</h1>
      <div className="mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b py-2">{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;