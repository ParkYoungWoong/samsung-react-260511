import Loader from '@/components/Loader'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
}

export default function Button({
  children,
  loading = false,
  ...restProps
}: Props) {
  return (
    <button
      className={[
        'h-[36px] min-w-[100px]',
        'cursor-pointer rounded-lg',
        'bg-blue-500 text-white hover:bg-blue-400',
        'duration-200',
        'relative'
      ].join(' ')}
      {...restProps}>
      {loading ? <Loader color="#fff" /> : children}
    </button>
  )
}
