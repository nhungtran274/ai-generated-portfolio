interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "default", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"}`}
    >
      {children}
    </button>
  );
}