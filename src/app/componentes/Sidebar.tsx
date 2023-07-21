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


function Sidebar() {
  const { editorInstance } = useEditorContext();
  
  return (
    <EditorProvider>
      <Command label="Command Menu">
        <Command.Input
          className="bg-transparent border border-slate-500 rounded-md py-1 px-2 text-sm"
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
            <Command.Item className="text-sm mt-3 cursor-pointer">
              <button
                className="flex gap-3 items-center"
                onClick={() => {if (!editorInstance) return;handleBulletList(editorInstance);}}
              >
                <span className="bg-slate-300 p-1 rounded-2xl">
                  <ListBulletIcon className="w-5 h-5" />
                </span>
                Lista com marcadores
              </button>
            </Command.Item>
            <Command.Item className="text-sm mt-3 cursor-pointer">
              <button
                className="flex gap-3 items-center"
                onClick={() => {if (!editorInstance) return;handleTitle(editorInstance);}}
              >
                <span className="bg-slate-300 p-1 rounded-2xl">
                  <HeadingIcon className="w-5 h-5" />
                </span>
                Títulos e subtítulos
              </button>
            </Command.Item>
            <Command.Item className="text-sm mt-3 cursor-pointer">
              <button
                className="flex gap-3 items-center"
                onClick={() => { if (!editorInstance) return; handleTextCenter(editorInstance);}}
              >
                <span className="bg-slate-300 p-1 rounded-2xl">
                  <TextAlignCenterIcon className="w-5 h-5" />
                </span>
                Centralizar
              </button>
            </Command.Item>

            <Command.Item className="text-sm mt-3 cursor-pointer">
              <button
                className="flex gap-3 items-center"
                onClick={() => {if (!editorInstance) return; handleTextLeft(editorInstance);}}
              >
                <span className="bg-slate-300 p-1 rounded-2xl">
                  <TextAlignLeftIcon className="w-5 h-5" />
                </span>
                Alinhar a esquerda
              </button>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </EditorProvider>
  );
}


export default Sidebar;