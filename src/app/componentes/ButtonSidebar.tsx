import React from 'react'
import {CommandItem} from 'cmdk'

interface ButtonSidebarProps{
  onClick: () => void;
  icon: React.ReactNode;
  label: String;
}

function ButtonSidebar(props: ButtonSidebarProps) {
  const { onClick, icon, label } = props;
  return (
    <CommandItem className="text-sm mt-3 cursor-pointer px-1 py-1.5 rounded-sm hover:bg-slate-200">
    <button
      className="flex gap-3 items-center" 
      onClick={onClick}
    >
      <span className="bg-slate-300 p-1 rounded-2xl">
        <span className="w-5 h-5">{icon}</span>
      </span>
      <p className="font-semibold text-slate-700">{label}</p>
    </button>
  </CommandItem>
  )
}

export default ButtonSidebar;
