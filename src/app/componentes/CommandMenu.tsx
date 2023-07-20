import React from "react";
import { Command } from "cmdk";

function CommandMenu() {
  return (
    <>
      <Command label="Command Menu">
        <Command.Input />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>Item A</Command.Item>
            <Command.Item>Item B</Command.Item>
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
