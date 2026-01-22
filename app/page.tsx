import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to My Animal Portfolio</h1>
      <a href="/about" className="text-blue-500 underline">About</a>
      <Button>Explore Animals</Button>
    </div>
  )
}