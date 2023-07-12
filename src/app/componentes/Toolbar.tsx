import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChatBubble,
  RxChevronDown,
  RxText,
} from "react-icons/rx";
import { FloatButton } from "./FloatButton";
import { Menubar } from "@radix-ui/react-menubar";
// import './styles.css';

function ToolBarMenu(){
  return (
    <>
      <Toolbar.Root>
        <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
          <Toolbar.ToggleItem
            className="ToolbarToggleItem"
            value="bold"
            aria-label="Bold"
          >
            <FloatButton>
              <RxFontBold className="w-4 h-4" />
            </FloatButton>
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className="ToolbarToggleItem"
            value="italic"
            aria-label="italic"
          >
            <FloatButton>
              <RxFontItalic className="w-4 h-4" />
            </FloatButton>
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className="ToolbarToggleItem"
            value="strikethrough"
            aria-label="strike through"
          >
            <FloatButton>
              <RxStrikethrough className="w-4 h-4" />
            </FloatButton>
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar.Root>
    </>
  );
};

export default ToolBarMenu