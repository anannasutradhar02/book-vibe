import BookCard from "../components/shared/BookCard";
import { Ibook } from "@/types/books.type";
import booksData from "@/../public/booksData.json";

const Books = () => {
  const books: Ibook[] = booksData;

  return (
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our All Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Ibook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;