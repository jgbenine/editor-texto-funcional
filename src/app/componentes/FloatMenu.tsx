import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { EditorContent, Editor, FloatingMenu } from "@tiptap/react";

import {
  ListBulletIcon,
  HeadingIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon
} from "@radix-ui/react-icons";

interface floatMenuProps {
  editor: Editor;
}

function FloatMenu({ editor }: floatMenuProps) {
  function handleTitle() {
    editor.chain().focus().toggleHeading({ level: 1 }).run();
  }

  function handleBulletList() {
    editor.chain().focus().toggleBulletList().run();
  }

  function handleTextCenter() {
    editor.chain().focus().setTextAlign("center").run();
  }
  function handleTextLeft() {
    editor.chain().focus().setTextAlign("left").run();
  }

  return (
    <>
      <EditorContent
        className="max-w-[250px] mx-auto pt-16 flex flex-col prose"
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
        <NavigationMenu.Root
          orientation="vertical"
          className="flex w-[250px] flex-col p-5 bg-zinc-50 border shadow-[0_1px_5px] shadow-zinc-400"
        >
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                onClick={handleBulletList}
                className="flex w-[100%] gap-4 text-zinc-800 hover:bg-zinc-200 p-2 transition-opacity "
              >
                <ListBulletIcon className="w-6 h-6" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.8rem] uppercase font-bold text-left">
                    Lista
                  </p>
                  <span className="text-[0.7rem]">Lista Bullet</span>
                </div>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                onClick={handleTextCenter}
                className="flex w-[100%] gap-4 text-zinc-800  hover:bg-zinc-200 p-2 transition-opacity "
              >
                <TextAlignCenterIcon className="w-6 h-6" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.8rem] uppercase font-bold text-left">
                    Text Center
                  </p>
                  <span className="text-[0.7rem]">Centralizar Conteúdo</span>
                </div>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                onClick={handleTextLeft}
                className="flex w-[100%] gap-4 text-zinc-800 hover:bg-zinc-200 p-2 transition-opacity "
              >
                <TextAlignLeftIcon className="w-6 h-6" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.8rem] uppercase font-bold text-left">
                    Text Left
                  </p>
                  <span className="text-[0.7rem]">Text Left</span>
                </div>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                onClick={handleTitle}
                className="flex w-[100%] gap-4 text-zinc-800 hover:bg-zinc-200 p-2 transition-opacity "
              >
                <HeadingIcon className="w-6 h-6" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.8rem] uppercase font-bold text-left">
                    Titulo H¹
                  </p>
                  <span className="text-[0.7rem]">Title Heading</span>
                </div>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        </FloatingMenu>
      )}

      {/* {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <Menubar.Root aria-orientation="vertical"  className="flex w-[250px] flex-col p-[3px] bg-zinc-100 border shadow-[0_1px_5px] shadow-zinc-400">
            <Menubar.Menu>
              <Menubar.Trigger
                onClick={handleTitle}
                className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity"
              >
                <HeadingIcon className="w-9 h-9" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.7rem] uppercase font-bold text-left">
                    Títulos
                  </p>
                  <span className="text-[0.7rem]">Titulos Hs</span>
                </div>
              </Menubar.Trigger>
              <Menubar.Trigger
                onClick={handleBulletList}
                className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity"
              >
                <ListBulletIcon className="w-9 h-9" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.7rem] uppercase font-bold text-left">
                    Listas
                  </p>
                  <span className="text-[0.7rem]">Listas</span>
                </div>
              </Menubar.Trigger>
              <Menubar.Trigger
                onClick={handleTextCenter}
                className="flex w-[100%] gap-4 text-zinc-800 w-100 hover:border-none p-2 transition-opacity"
              >
                <TextAlignCenterIcon className="w-9 h-9" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.7rem] uppercase font-bold text-left">
                    Text Center
                  </p>
                  <span className="text-[0.7rem]">Alinhamento de texto</span>
                </div>
              </Menubar.Trigger>
            </Menubar.Menu>
          </Menubar.Root>
        </FloatingMenu>
        
      )} */}
    </>
  );
}

export default FloatMenu;
