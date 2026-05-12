interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...restProps }: Props) {
  return (
    <button
      className="h-[36px] min-w-[100px] bg-blue-500 text-white"
      {...restProps}>
      {children}``
    </button>
  )
}
