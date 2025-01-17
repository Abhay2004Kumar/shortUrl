import Link from "next/link";
import shortenURL from "./serverActions/ShortenUrlAction";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-purple-600">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">URL SHORTER</h1>


        <form method="POST" action={shortenURL} className="space-y-6">
          <input type="text" placeholder="Enter URL" name="originalUrl" className="input input-bordered w-full" />


          <button type="submit" className="btn btn-primary w-full">Short it!</button>

        </form>

          
        </div>

        <div className="mt-6 text-center">
          <Link href="/urls">
          
            <span className="btn btn-secondary w-full"> View All Shorted Urls </span>
          </Link>
        </div>
      </div>
    </>
  );
}