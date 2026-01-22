export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Header />
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Animals</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <li className="bg-white shadow-md p-4 rounded-lg">
            <img src="/images/dog.jpg" alt="Dog" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">Dog</h3>
            <p className="text-gray-600">A loyal companion.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg">
            <img src="/images/cat.jpg" alt="Cat" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">Cat</h3>
            <p className="text-gray-600">Independent and curious.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg">
            <img src="/images/bird.jpg" alt="Bird" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">Bird</h3>
            <p className="text-gray-600">Versatile and intelligent.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}