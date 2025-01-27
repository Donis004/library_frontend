// ManageBooks.js
import React, { useState, useEffect } from "react";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };

    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        const addedBook = await response.json();
        setBooks([...books, addedBook]);
        setNewBook({ title: "", author: "", year: "", genre: "" });
      } else {
        alert("Failed to add book");
      }
    } catch (error) {
      console.error("Error adding book", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Books</h1>
      <form onSubmit={handleAddBook} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Author:</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Year:</label>
            <input
              type="number"
              name="year"
              value={newBook.year}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Genre:</label>
            <input
              type="text"
              name="genre"
              value={newBook.genre}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Book
        </button>
      </form>
      <h2 className="text-xl font-bold mb-4">Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b py-2">
            {book.title} by {book.author} ({book.year}) - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBooks;
