
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ibook } from "@/types/books.type";

interface ListedBooksCardsProps {
  book: Ibook;
}

const ListedBooksCards = ({ book }: ListedBooksCardsProps) => {
  return (
    <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex flex-col md:flex-row">

        {/* Book Image */}
        <div className="md:w-56 lg:w-64 bg-slate-100 p-5 flex items-center justify-center">

          <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-2xl shadow-md">

            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

          </div>

        </div>


        {/* Book Information */}
        <div className="flex-1 p-6 md:p-8">

          {/* Category + Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">

            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {book.category}
            </span>

            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-sm">
              <span className="text-amber-500">★</span>

              <span className="font-semibold">
                {book.rating}
              </span>
            </span>

          </div>


          {/* Book Name */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
            {book.bookName}
          </h2>


          {/* Author */}
          <p className="text-gray-500 mt-2">
            By{" "}
            <span className="font-semibold text-gray-700">
              {book.author}
            </span>
          </p>


          {/* Review */}
          <p className="text-gray-500 leading-7 mt-5 line-clamp-2">
            {book.review}
          </p>


          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 pt-5 border-t border-gray-100">

            {/* Status */}
            <p className="text-sm text-gray-400">
              ✓ Added to your book list
            </p>


            {/* View Details */}
            <Link
              href={`/books/${book.bookId}`}
              className="btn btn-primary rounded-full px-6"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ListedBooksCards;

