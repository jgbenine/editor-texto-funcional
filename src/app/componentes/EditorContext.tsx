import { createContext, useState, useContext, useEffect ,ReactNode } from "react";
import { Editor, EditorOptions } from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import StarterKit from "@tiptap/starter-kit";
import { content } from "./initialContent";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { lowlight } from "lowlight/lib/core";

import "highlight.js/styles/stackoverflow-dark.css";
lowlight.registerLanguage("js", js);

interface EditorContextProps {
  editorInstance: Editor | null;
  setEditorInstance: (newEditorInstance: Editor | null) => void;
}

const EditorContext = createContext<EditorContextProps | null>(null);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [editorInstance, setEditorInstance] = useState<Editor | null>(null);

  useEffect(() => {
    const createEditorInstance = () => {
      const editorOptions: Partial<EditorOptions> = {
        extensions: [
          StarterKit,
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
          Link.configure({
            protocols: ["ftp", "mailto"],
          }),
          CodeBlockLowlight.configure({
            lowlight,
          }),
        ],
        editorProps: {
          attributes: {
            class: "outline-none",
          },
        },
        content: content,
      };

      const newEditorInstance = new Editor(editorOptions);
      setEditorInstance(newEditorInstance);
    };

    // Chama a função para criar a instância do editor
    createEditorInstance();
  }, []);
  const updateEditorInstance = (newEditorInstance: Editor | null) => {
    setEditorInstance(newEditorInstance);
  };

  return (
    <EditorContext.Provider
      value={{ editorInstance, setEditorInstance: updateEditorInstance }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorContext() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("Utilização de contexto inválido");
  }
  return context;
}
