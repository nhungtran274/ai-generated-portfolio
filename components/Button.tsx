export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const base = 'px-4 py-2 rounded hover:bg-opacity-90 transition duration-300'
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}