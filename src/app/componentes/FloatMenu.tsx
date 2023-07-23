import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { EditorContent, Editor, FloatingMenu } from "@tiptap/react";
import {
  ListBulletIcon,
} from "@radix-ui/react-icons";
import {
  handleBulletList,
} from "../componentes/editorUtils";

interface floatMenuProps {
  editor: Editor | null;
}

function FloatMenu({ editor }: floatMenuProps) {
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
                  onClick={() => handleBulletList(editor)}
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
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </FloatingMenu>
      )}
    </>
  );
}

export default FloatMenu;
