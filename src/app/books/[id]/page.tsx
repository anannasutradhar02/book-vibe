import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";
import { Ibook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<Ibook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASED_URL || "http://localhost:3000"}/booksData.json`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (b: Ibook) => String(b.bookId) === String(id)
  );

  if (!book) {
    return (
      <div className="p-10 text-center">
        Book not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden">

        {/* Book Image */}
        <figure className="bg-gradient-to-br from-purple-100 via-base-200 to-indigo-100 p-8 lg:w-2/5 flex items-center justify-center">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={300}
            priority
            className="w-full max-w-[280px] h-[380px] object-contain rounded-xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5 p-6 md:p-10 lg:p-12">

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary badge-outline px-4 py-3 font-semibold">
              {book.category}
            </span>

            <div className="flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-full">
              <span className="text-lg">★</span>
              <span className="font-bold">
                {book.rating}
              </span>
              <span className="text-xs text-base-content/60">
                / 5
              </span>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-content leading-tight">
              {book.bookName}
            </h1>

            <p className="text-base-content/60 text-lg mt-3">
              Written by{" "}
              <span className="font-semibold text-primary">
                {book.author}
              </span>
            </p>
          </div>

          <div className="divider my-2"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            <div className="bg-base-200/70 rounded-2xl p-4">
              <p className="text-xs text-base-content/50 font-medium">
                Total Pages
              </p>

              <p className="text-xl font-bold mt-2">
                {book.totalPages}
              </p>
            </div>

            <div className="bg-base-200/70 rounded-2xl p-4">
              <p className="text-xs text-base-content/50 font-medium">
                Published
              </p>

              <p className="text-xl font-bold mt-2">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="bg-base-200/70 rounded-2xl p-4 col-span-2 sm:col-span-1">
              <p className="text-xs text-base-content/50 font-medium">
                Publisher
              </p>

              <p className="text-base font-bold mt-2 line-clamp-2">
                {book.publisher}
              </p>
            </div>

          </div>

          <div className="mt-4">
            <h3 className="text-sm font-bold text-base-content/70 mb-3">
              Book Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary px-4 py-3"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold mb-3">
              About This Book
            </h3>

            <p className="text-base-content/70 leading-7 text-justify">
              {book.review}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="card-actions mt-6 flex flex-col sm:flex-row gap-3">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;