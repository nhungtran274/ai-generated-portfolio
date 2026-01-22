export default function ContactSection() {
  return (
    <section className="container mx-auto my-8 p-4 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea rows={4} placeholder="Message" className="border p-2"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  )
}