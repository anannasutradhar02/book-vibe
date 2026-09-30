"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import React, { useContext } from "react";

const WishListButton = ({ book }: { book: Ibook }) => {
  const context = useContext(BooksContext);

  const handleWishList = () => {
    if (!context) {
      console.error("BooksContext not found!");
      return;
    }

    if (!book) {
      console.error("Book data is undefined in WishListButton!");
      alert("Error: Book data not found!");
      return;
    }

    const { wishList = [], setWishList } = context;

    if (!setWishList) {
      console.error("setWishList function is missing!");
      return;
    }

    // ডুপ্লিকেট চেক (আগে থেকেই লিস্টে আছে কি না)
    const isExist = wishList.some((b: Ibook) => b?.bookId === book.bookId);
    if (isExist) {
      alert(`"${book.bookName}" is already in your wishlist!`);
      return;
    }

    const updatedWishList = [...wishList, book];
    setWishList(updatedWishList);

    console.log("Successfully added to Wishlist:", updatedWishList);
    alert(`"${book.bookName}" added to your wishlist!`);
  };

  return (
    <button
      className="btn btn-outline btn-primary flex-1 rounded-xl"
      onClick={handleWishList}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;