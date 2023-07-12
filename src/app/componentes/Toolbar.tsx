import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChatBubble,
  RxChevronDown,
} from "react-icons/rx";

interface toggleMenuProps {
  editor: Editor;
}

function ToolbarMenu({ editor }: toggleMenuProps) {
  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
        editor={editor}
      />
      {editor && (
        <BubbleMenu editor={editor}>
          <Toolbar.Root
            className="flex gap-10 w-full min-w-max rounded-md bg-zinc-100 border shadow-[0_1px_5px] shadow-zinc-400"
            aria-label="Formatting options"
          >
            <Toolbar.ToggleGroup
              type="multiple"
              aria-label="Text formatting"
              className="flex gap-1.5 p-2"
            >
              <Toolbar.ToggleItem
                className="h-[100%] border bortder-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
                value="bold"
                aria-label="Bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <RxFontBold className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
                value="italic"
                aria-label="Italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <RxFontItalic className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                value="strike"
                aria-label="strike"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
              >
                <RxStrikethrough className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                value="code"
                aria-label="code"
                onClick={() => editor.chain().focus().toggleCode().run()}
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
              >
                <RxCode className="w-5 h-5" />
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>
          </Toolbar.Root>
        </BubbleMenu>
      )}
    </>
  );
}

export default ToolbarMenu;
