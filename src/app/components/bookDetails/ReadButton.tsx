"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: Ibook }) => {
  const context = useContext(BooksContext) || {};
  const { readBooks = [], setReadBooks } = context;

  const handleReadBook = () => {
    if (!setReadBooks || !book) return;

    const isExist = readBooks.some((b: Ibook) => b?.bookId === book.bookId);
    if (isExist) {
      alert(`"${book.bookName}" is already marked as read!`);
      return;
    }

    const updatedReadBooks = [...readBooks, book];
    setReadBooks(updatedReadBooks);

    console.log("Updated Read Books List:", updatedReadBooks);
    alert(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-primary flex-1 rounded-xl"
      onClick={handleReadBook}
    >
      Read Book
    </button>
  );
};

export default ReadButton;