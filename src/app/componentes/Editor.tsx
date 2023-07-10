'use client'
import React from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import StarterKit from '@tiptap/starter-kit'
import { content } from './initialContent'
import { lowlight } from 'lowlight/lib/core'
import 'highlight.js/styles/stackoverflow-dark.css'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChatBubble, RxChevronDown } from 'react-icons/rx'
import { BubbleButton } from './BubbleButton'


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
        <BubbleMenu className="bg-zinc-200 shadow-lg border border-zinc-300 shadow-black/20 rounded-md overflow-hidden flex divide-zinc-300 divide-x-2" editor={editor}>
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="w-4 h-4" />
            Comment
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                data-active={editor.isActive('bold')}
              >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton> 
            <BubbleButton 
                onClick={() => editor.chain().focus().toggleItalic().run()}
                data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                data-active={editor.isActive('stricke')}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton 
                onClick={() => editor.chain().focus().toggleCode().run()}
                data-active={editor.isActive('code')}
            >
              <RxCode className="w-4 h-" />
            </BubbleButton>
          </div>
        </BubbleMenu>

      )}

    </>

  )
}

export default Editor
