import { ComponentProps, ReactNode } from 'react'

export interface FloatButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function FloatButton(props: FloatButtonProps) {
  return (
    <button
      className="p-1.5 text-zinc-600 text-[0.8rem] flex items-center gap-1.5 font-medium h-[100%] leading-none 
      hover:bg-zinc-300 focus:text-green-600 data-[active=true]:text-green-600"
      {...props}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}