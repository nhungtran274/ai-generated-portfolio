import { FC } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const base = 'px-4 py-2 rounded'
const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-gray-900 hover:bg-gray-400'
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary' }) => {
  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default Button