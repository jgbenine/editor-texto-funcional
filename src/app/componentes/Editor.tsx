"use client";
import React from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import StarterKit from "@tiptap/starter-kit";
import { content } from "./initialContent";
import { lowlight } from "lowlight/lib/core";
import "highlight.js/styles/stackoverflow-dark.css";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChatBubble,
  RxChevronDown,
  RxText,
} from "react-icons/rx";
import {
  LuText,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuList,
  LuListOrdered,
} from "react-icons/lu";
import { BubbleButton } from "./BubbleButton";

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
          <div className="bg-zinc-200 shadow-lg border border-zinc-300 shadow-black/20 rounded-md overflow-hidden flex flex-col gap-4 divide-zinc-300 p-3">
            <button className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity">
              <LuText className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Texto
                </p>
                <span className="text-[0.7rem]">Minus delectus nostrum, via dolores.
                </span>
              </div>
            </button>
            <button className="flex gap-1.5 text-zinc-800 rounded-md hover:bg-zinc-300 p-2 transition-opacity">
              <LuHeading1 className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Título H1
                </p>
                <span className="text-[0.7rem]">
                  Lorem ipsum dolor sit amet con recusandae?
                </span>
              </div>
            </button>
          </div>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-200 shadow-lg border border-zinc-300 shadow-black/20 rounded-md overflow-hidden flex divide-zinc-300 divide-x-2"
          editor={editor}
        >
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
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}

export default Editor;
