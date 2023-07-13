import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import * as Separator from "@radix-ui/react-separator";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxLink1,
  RxQuote,
  RxCode,
} from "react-icons/rx";

interface toggleMenuProps {
  editor: Editor;
}

function ToolbarMenu({ editor }: toggleMenuProps) {
  function handleLink() {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url !== null) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }

  function handleBlockquote() {
    editor.chain().focus().toggleBlockquote().run();
  }
  function handleStrike() {
    editor.chain().focus().toggleStrike().run();
  }
  function handleItalic() {
    editor.chain().focus().toggleItalic().run();
  }
  function handleBold() {
    editor.chain().focus().toggleBold().run()
  }
  function handleCodeBlock() {
      editor.chain().focus().toggleCodeBlock().run()
  }


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
                onClick={handleBold}
              >
                <RxFontBold className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
                value="italic"
                aria-label="Italic"
                onClick={handleItalic}
              >
                <RxFontItalic className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                value="strike"
                aria-label="strike"
                onClick={handleStrike}
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
              >
                <RxStrikethrough className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                value="Link"
                aria-label="link"
                onClick={handleLink}
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
              >
                <RxLink1 className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Toolbar.ToggleItem
                value="code"
                aria-label="code"
                onClick={handleCodeBlock}
                className="h-[100%] border border-zinc-200 p-0.5 rounded-sm hover:bg-zinc-200"
              >
                <RxCode className="w-5 h-5" />
              </Toolbar.ToggleItem>
              <Separator.Root
                className="bg-zinc-300 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[3px]"
                decorative
                orientation="vertical"
              />
              <Toolbar.ToggleItem
                value="quote"
                aria-label="quote"
                onClick={handleBlockquote}
                className="h-[100%] flex gap-1.5 items-center p-1 px-2 rounded-lg hover:bg-zinc-200"
              >
                <RxQuote className="w-4 h-4" />
                <span className="text-sm">Citação</span>
              </Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>
          </Toolbar.Root>
        </BubbleMenu>
      )}
    </>
  );
}

export default ToolbarMenu;
