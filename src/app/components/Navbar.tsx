import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between bg-slate-800 px-8 py-2 text-gray-300">
        <Link
          href="/"
          className="text-md font-bold uppercase h-12 flex items-center"
        >
          Next Store
        </Link>

        <Link
          href="https://www.youtube.com/watch?v=QFtXT1KMQ1U"
          target="_blank"
          className="text-md font-bold uppercase h-12 flex items-center"
        >
          video: 01:05:00 min
        </Link>
      </nav>
    )
}