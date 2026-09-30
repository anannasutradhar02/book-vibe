"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext, useState } from "react";
import { Ibook } from "@/types/books.type";
import Image from "next/image";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const ListedBooks = () => {
  const context = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // ১. Prothome context check kore nite hobe
  if (!context) {
    return (
      <div className="p-10 text-center">
        Loading or BooksProvider missing...
      </div>
    );
  }

  // ২. Context theke readBooks ebong wishList sobar age destructure kore nite hobe
  const { readBooks = [], wishList = [] } = context;

  // ৩. Sort function-ti ekhon safe-vabe kaj korbe
  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    
    return sortedBooks; // Return kora khubi dorkar chilo
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishList);

  console.log(sortedReadBooks, "sorted list books");
  console.log(sortedWishlist, "sorted wish list");

  return (
    <div className="container mx-auto px-3 md:px-6 py-6">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl py-10 px-5 mb-8 text-center border border-amber-100">
        <p className="text-sm uppercase tracking-[4px] text-primary font-semibold mb-2">
          My Collection
        </p>

        <h1 className="font-bold text-3xl md:text-4xl text-gray-800">
          Listed Books
        </h1>
        
        <p className="text-gray-500 mt-2">
          Keep track of the books you love and want to read.
        </p>
      </div>

      <div className="text-center mb-6">
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
          className="select select-success"
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Published year</option>
        </select>
      </div>
      
      {/* Tabs */}
      <div className="tabs tabs-lift">

        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${sortedReadBooks.length})`}
          defaultChecked
        />

        <div className="tab-content bg-gray-50 border-base-300 p-4 md:p-8">
          {sortedReadBooks.length > 0 ? (
            <div className="space-y-6">
              {sortedReadBooks.map((book: Ibook) => (
                <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold text-gray-600">
                No read books found
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Books you finish reading will appear here.
              </p>
            </div>
          )}
        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist (${sortedWishlist.length})`}
        />

        <div className="tab-content bg-gray-50 border-base-300 p-4 md:p-8">
          {sortedWishlist.length > 0 ? (
            <div className="space-y-6">
              {sortedWishlist.map((book: Ibook) => (
                <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard> 
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold text-gray-600">
                No wishlist books found
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Books you want to read will appear here.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ListedBooks;