import React from "react";
import { Command } from "cmdk";
import { EditorProvider, useEditorContext } from "./EditorContext";
import {
  ListBulletIcon,
  HeadingIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
} from "@radix-ui/react-icons";

import {
  handleBulletList,
  handleTextCenter,
  handleTextLeft,
  handleTitle,
} from "../componentes/editorUtils";

import ButtonSidebar from "./ButtonSidebar";


function Sidebar() {
  const { editorInstance } = useEditorContext();

  return (
    <aside className="w-[220px]">
      <EditorProvider>
        <Command label="Command Menu">
          <Command.Input
            className="bg-transparent border border-slate-500 rounded-md py-1 px-2 text-sm w-full"
            placeholder="Pesquisar"
          />
          <Command.List>
            <Command.Empty className="text-zinc-400 text-sm py-1">
              Resultados não encontrados.
            </Command.Empty>
            <Command.Group
              heading="Ações:"
              className="border-zinc-500 text-sm pt-4"
            >
              <ButtonSidebar 
                onClick={()=> {
                  if (!editorInstance) return;
                  handleTitle(editorInstance);
                }}
                icon={<HeadingIcon className="w-5 h-5" />}
                label="Títulos H1"
              />
              <ButtonSidebar 
                onClick={()=> {
                  if (!editorInstance) return;
                  handleBulletList(editorInstance);
                }}
                icon={<ListBulletIcon className="w-5 h-5" />}
                label="Lista"
              />
              <ButtonSidebar 
                onClick={()=> {
                  if (!editorInstance) return;
                  handleTextCenter(editorInstance);
                }}
                icon={<TextAlignCenterIcon className="w-5 h-5" />}
                label="Texto Centralizado"
              />
              <ButtonSidebar 
                onClick={()=> {
                  if (!editorInstance) return;
                  handleTextLeft(editorInstance);
                }}
                icon={<TextAlignLeftIcon className="w-5 h-5" />}
                label="Texto à esquerda"
              />
            </Command.Group>
          </Command.List>
        </Command>
      </EditorProvider>
    </aside>
  );
}

export default Sidebar;
