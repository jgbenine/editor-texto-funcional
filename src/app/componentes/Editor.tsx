"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import StarterKit from "@tiptap/starter-kit";
import { content } from "./initialContent";
import { lowlight } from "lowlight/lib/core";
import TextAlign from "@tiptap/extension-text-align";
import ToolBarMenu from "./Toolbar";
import FloatMenu from "./FloatMenu";
import Link from "@tiptap/extension-link";
import CommandMenu from "./CommandMenu";

import 'highlight.js/styles/stackoverflow-dark.css'
lowlight.registerLanguage("js", js);

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        protocols: ['ftp', 'mailto'],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    content: content,
  });

  return (
    <>
      {editor && (
        <div>
          <EditorContent
            className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
            editor={editor}
          />
          <ToolBarMenu editor={editor} />
          <FloatMenu editor={editor} />
        </div>
      )}
    </>
  );
}

export default Editor;
