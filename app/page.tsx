import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Welcome to
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Anand Finance
          </h1>

          <p className="text-gray-300 mt-6 text-xl">
            GST • Income Tax • Accounting • Audit • Business Registration
          </p>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </main>
    </>
  );
}