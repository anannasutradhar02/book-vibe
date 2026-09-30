import BookCard from "../components/shared/BookCard";
try{
  const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASED_URL}/booksData.json`);

  const data = await res.json();

  return data;
 }catch(error){
  console.error("Error fetching books data:",error)
  return [];
 }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-10 px-4">

      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our All Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {booksData.slice(0,6).map((book, ind) => {
  return <BookCard key={ind} book={book} />;
           })}

      </div>

    </section>
  );
};

export default Books;