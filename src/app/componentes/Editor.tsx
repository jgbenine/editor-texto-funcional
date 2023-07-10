'use client'
import React from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import StarterKit from '@tiptap/starter-kit'
import { content } from './initialContent'
import { lowlight } from 'lowlight/lib/core'
import 'highlight.js/styles/stackoverflow-dark.css'

lowlight.registerLanguage('js', js)

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    content: content,
  })



  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
        editor={editor} />
        {editor && (
          <BubbleMenu className="bg-zinc-200 shadow-lg border border-zinc-300 shadow-black/20 rounded-md overflow-hidden flex divide-zinc-300 divide-x-2"  editor={editor}>
             <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none ">bold</button>  
             <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none ">bold</button>  
             <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none ">bold</button>  
          </BubbleMenu>
        )}

    </>

  )
}

export default Editor
