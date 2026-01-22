import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Animal Portfolio</h1>
      <a href="/about" className="text-blue-500 underline mb-8">Learn More</a>
      <Button>Discover Animals</Button>
    </div>
  )
}