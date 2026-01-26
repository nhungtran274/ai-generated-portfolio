import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Animal Portfolio</h1>
      <a href="/about" className="text-blue-500 underline mb-4">Learn More About Animals</a>
      <Button variant="primary">Explore Now</Button>
    </div>
  )
}