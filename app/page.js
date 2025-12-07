import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="max-w-4xl mx-auto text-center py-28 px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Warriors Photos
        </h1>

        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Upload warrior images, search through the database, and manage your
          powerful photo collection. Built with AI, Next.js, and Vercel.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <Link
            href="/upload"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition shadow-lg"
          >
            Upload Photo
          </Link>

          <Link
            href="/search"
            className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-medium transition shadow-lg"
          >
            Search Gallery
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold mb-3">AI Embedding Search</h3>
          <p className="text-gray-400 text-sm">
            Find similar warriors instantly using vector embeddings and semantic
            search.
          </p>
        </div>

        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold mb-3">Fast Upload</h3>
          <p className="text-gray-400 text-sm">
            Upload photos and store metadata with lightning-fast database access.
          </p>
        </div>

        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
          <p className="text-gray-400 text-sm">
            Built on Vercel and Postgres with safe, optimized serverless APIs.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Warriors Photos. All rights reserved.
      </footer>
    </main>
  );
}
