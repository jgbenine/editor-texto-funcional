import React from "react";
import { EditorContent } from "@tiptap/react";
import ToolBarMenu from "./Toolbar";
import FloatMenu from "./FloatMenu";
import { EditorProvider, useEditorContext } from "./EditorContext";

function EditorWrapper() {
  const {editorInstance} = useEditorContext()

  return (
    <EditorProvider>
      {editorInstance && (
        <div>
          <EditorContent
            className="max-w-[700px] mx-auto pt-16 flex flex-col prose"
            editor={editorInstance}
          />
          <ToolBarMenu editor={editorInstance} />
          <FloatMenu editor={editorInstance} />
        </div>
      )}
    </EditorProvider>
  );
}

export default EditorWrapper;
