import BookCard from "../components/shared/BookCard";
import { Ibook } from "@/types/books.type";

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

const Books = async () => {
  const booksData: Ibook[] = await getBooks();

  return (
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our All Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book: Ibook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;