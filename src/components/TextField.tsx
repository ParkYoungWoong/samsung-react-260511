interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function TextField({ label, ...restProps }: Props) {
  return (
    <>
      <label>
        {label && <span>{label}</span>}
        <input
          {...restProps}
          className={[
            'h-[36px] min-w-[200px]',
            'px-[10px]',
            'rounded-lg border border-gray-500'
          ].join(' ')}
        />
      </label>
    </>
  )
}
