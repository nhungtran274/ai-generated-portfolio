import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Animals</h2>
        <ul className="grid gap-4">
          <li className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dog</h3>
            <p>Dogs are loyal companions known for their intelligence and playfulness.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cat</h3>
            <p>Cats are independent and often seen as mysterious creatures.</p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Bird</h3>
            <p>Birds are known for their beautiful feathers and singing abilities.</p>
          </li>
        </ul>
      </section>
      <Button>Learn More</Button>
    </main>
  )
}