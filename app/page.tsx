import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white p-8">
      <Header />
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Animal Portfolio</h2>
        <p className="text-xl mb-8">Explore my collection of unique animal artworks.</p>
        <Button variant="primary" onClick={() => alert('Explore Animals')}>Explore Animals</Button>
      </section>
    </main>
  );
}