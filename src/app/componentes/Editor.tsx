"use client";
import React from "react";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import StarterKit from "@tiptap/starter-kit";
import { content } from "./initialContent";
import { lowlight } from "lowlight/lib/core";
import "highlight.js/styles/stackoverflow-dark.css";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuList,
  LuListOrdered,
} from "react-icons/lu";

import ToolBarMenu from "./Toolbar";

lowlight.registerLanguage("js", js);

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
        class: "outline-none",
      },
    },
    content: content,
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <div className="bg-zinc-200 shadow-lg border border-zinc-300 shadow-black/20 rounded-md flex flex-col gap-4 divide-zinc-300 p-3 overflow-auto h-[250px]">
            <button
              className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <LuHeading1 className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Título H1
                </p>
                <span className="text-[0.7rem]">Título nível H1</span>
              </div>
            </button>
            <button
              className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <LuHeading2 className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Título H2
                </p>
                <span className="text-[0.7rem]">Título nível H2</span>
              </div>
            </button>
            <button
              className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <LuHeading3 className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Título H3
                </p>
                <span className="text-[0.7rem]">Título nível H3</span>
              </div>
            </button>
            <button
              className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <LuList className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Lista Simples
                </p>
                <span className="text-[0.7rem]">• Exemplo de Lista</span>
              </div>
            </button>
            <button
              className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <LuList className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Lista Ordenada
                </p>
                <span className="text-[0.7rem]">1.Lista Ordenada</span>
              </div>
            </button>
          </div>
        </FloatingMenu>
      )}

      {editor && (
        <div>
          <EditorContent
            className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
            editor={editor}
          />
            <ToolBarMenu editor={editor} />
        </div>
      )}
    </>
  );
}

export default Editor;
