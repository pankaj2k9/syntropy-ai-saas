import Link from "next/link";


export default function Home() {

  return (
    <main className="container mx-auto p-6">
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to Syntropy</h2>
        <p className="text-xl mb-8">Empowering businesses with AI-driven solutions.</p>
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">Get Started</Link>
      </section>
    </main>)
}
