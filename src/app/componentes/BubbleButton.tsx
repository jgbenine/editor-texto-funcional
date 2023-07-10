import { ComponentProps, ReactNode } from 'react'

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover:bg-zinc-300 focus:text-green-600 data-[active=true]:text-green-600" {...props}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}
