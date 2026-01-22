import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Animal Portfolio</h1>
      <p className="text-lg mb-8">Explore my passion for animals through various projects and resources.</p>
      <Button>Learn More</Button>
    </div>
  )
}