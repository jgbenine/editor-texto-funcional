'use client'
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { content } from './initialContent'

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: content,
  })



  return (
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
      editor={editor} />
  )
}

export default Editor
