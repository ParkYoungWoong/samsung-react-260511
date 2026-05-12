interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...restProps }: Props) {
  return (
    <button
      className={[
        'h-[36px] min-w-[100px]',
        'cursor-pointer rounded-lg',
        'bg-blue-500 text-white hover:bg-blue-400',
        'duration-200'
      ].join(' ')}
      {...restProps}>
      {children}
    </button>
  )
}
