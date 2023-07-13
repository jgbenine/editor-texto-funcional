import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { EditorContent, Editor, FloatingMenu } from "@tiptap/react";

import {
  ListBulletIcon,
  CodeIcon,
  HeadingIcon,
  Link2Icon,
  TextAlignCenterIcon,
  AllSidesIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

interface floatMenuProps {
  editor: Editor;
}

function FloatMenu({ editor }: floatMenuProps) {
  return (
    <>
      <EditorContent
        className="max-w-[250px] mx-auto pt-16 flex flex-col prose"
        editor={editor}
      />
      <FloatingMenu
        editor={editor}
        shouldShow={({ state }) => {
          const { $from } = state.selection;
          const currentLineText = $from.nodeBefore?.textContent;
          return currentLineText === "/";
        }}
      >
        <Menubar.Root className="flex w-[250px] flex-col p-[3px] bg-zinc-100 border shadow-[0_1px_5px] shadow-zinc-400">
          <Menubar.Menu>
            <Menubar.Trigger className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity">
              <HeadingIcon className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Títulos
                </p>
                <span className="text-[0.7rem]">Titulos Hs</span>
              </div>
            </Menubar.Trigger>
            <Menubar.Trigger className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity">
              <ListBulletIcon className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Listas
                </p>
                <span className="text-[0.7rem]">Listas</span>
              </div>
            </Menubar.Trigger>
            <Menubar.Trigger className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity">
              <TextAlignCenterIcon className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Text Center
                </p>
                <span className="text-[0.7rem]">Alinhamento de texto</span>
              </div>
            </Menubar.Trigger>
            <Menubar.Trigger className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity">
              <Link2Icon className="w-9 h-9" />
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.7rem] uppercase font-bold text-left">
                  Link
                </p>
                <span className="text-[0.7rem]">Links externos</span>
              </div>
            </Menubar.Trigger>
          </Menubar.Menu>
        </Menubar.Root>
      </FloatingMenu>
    </>
  );
}

export default FloatMenu;
