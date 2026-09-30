import { BooksProvider } from "@/context/BooksContext";
import Navbar from "@/app/components/shared/Navbar";// আপনার নেভবারের সঠিক পাথ দিন
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BooksProvider>
          {/* নেভবারটি প্রোভাইডারের ভেতরে বা বাইরে বডির শুরুতে দিতে হবে যাতে সব পেজে দেখায় */}
          <Navbar /> 
          {children}
        </BooksProvider>
      </body>
    </html>
  );
}