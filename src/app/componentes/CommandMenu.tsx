import React from "react";
import { Command } from "cmdk";
import {
  ListBulletIcon,
  HeadingIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
} from "@radix-ui/react-icons";

function CommandMenu() {
  return (
    <>
      <Command label="Command Menu">
        <Command.Input
          className="bg-transparent border border-slate-500 rounded-md py-1 px-2 text-sm"
          placeholder="Pesquisar"
        />
        <Command.List>
          <Command.Empty className="text-zinc-400 text-sm py-1">
            Resultados não encontrados.
          </Command.Empty>
          <Command.Group heading="Ações:" className="border-zinc-500 text-sm pt-4">
            <Command.Item className="flex gap-3 items-center text-sm mt-3">
              <span className="bg-slate-300 p-1 rounded-2xl">
                <ListBulletIcon className="w-5 h-5" />
              </span>
              <p>Lista com marcadores</p>
            </Command.Item>
            <Command.Item className="flex gap-3 items-center text-sm mt-3">
              <span className="bg-slate-300 p-1 rounded-2xl">
                <HeadingIcon className="w-5 h-5" />
              </span>
              <p>Títulos e subtítulos</p>
            </Command.Item>
            <Command.Item className="flex gap-3 items-center text-sm mt-3">
              <span className="bg-slate-300 p-1 rounded-2xl">
                <TextAlignCenterIcon className="w-5 h-5" />
              </span>
              <p>Centralizar</p>
            </Command.Item>
            <Command.Item className="flex gap-3 items-center text-sm mt-3">
              <span className="bg-slate-300 p-1 rounded-2xl">
                <TextAlignLeftIcon className="w-5 h-5" />
              </span>
              <p>Alinhar a esquerda</p>
            </Command.Item>
            <Command.Separator />
            <Command.Item>Item C</Command.Item>
          </Command.Group>
          <Command.Item>Apple</Command.Item>
        </Command.List>
      </Command>
    </>
  );
}

export default CommandMenu;
