'use client'
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import StarterKit from '@tiptap/starter-kit'
import { content } from './initialContent'
import { lowlight } from 'lowlight/lib/core'
import 'highlight.js/styles/atom-one-dark.css'

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
      attributes:{
        class: 'outline-none',
      },
    },
    content: content,
  })



  return (
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
      editor={editor} />
  )
}

export default Editor
