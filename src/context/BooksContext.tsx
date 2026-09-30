"use client";

import React, { createContext, ReactNode, useState } from "react";

// Context তৈরি এবং এক্সপোর্ট করা
export const BooksContext = createContext<any>(null);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<any[]>([]);
  const [wishList, setWishList] = useState<any[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};