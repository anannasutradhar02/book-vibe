import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const Navbar = () => {
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Book Vibe Logo"
                            width={45}
                            height={45}
                        />

                        <Link href="/" className="text-2xl font-bold">
                            Book <span className="text-green-600">Vibe</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-8 font-medium">
                            <li>
                                <Link href="/" className="hover:text-green-600 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/books" className="hover:text-green-600 transition">
                                    Books
                                </Link>
                            </li>

                             <li>
                                <Link href="\listed-books" className="hover:text-green-600 transition">
                                    Listed Books
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-green-600 transition">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/read-books" className="hover:text-green-600 transition">
                                    Read Books
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="btn btn-outline btn-success rounded-full">
                            Sign In
                        </button>

                        <button className="btn btn-success rounded-full">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;