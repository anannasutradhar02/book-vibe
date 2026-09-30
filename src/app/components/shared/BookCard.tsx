import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book : Ibook;
}

const BookCard = ({book} :IBookCardProps) => {
    return (
       <div
          
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >

            <div className="bg-gray-100 p-6">
              <Image
                src={book.image}
                alt={book.bookName}
                width= {800}
                height={600}
                className="w-full h-64 object-contain"
              />
            </div>

            <div className="p-5">

              <div className="flex justify-between items-center">
                <span className="badge badge-primary">
                  {book.category}
                </span>

                <span>
                  ⭐ {book.rating}
                </span>
              </div>

              <h3 className="text-xl font-bold mt-3">
                {book.bookName}
              </h3>

              <p className="text-gray-500 mt-1">
                by {book.author}
              </p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>{book.totalPages} pages</span>
                <span>{book.yearOfPublishing}</span>
              </div>

              <div className="flex gap-2 mt-4">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs border px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href = {`/books/${book.bookId}`}>
              <button className="btn btn-primary w-full mt-5">
                View Details
              </button>
              </Link>
              

            </div>
          </div>
    );
};

export default BookCard;