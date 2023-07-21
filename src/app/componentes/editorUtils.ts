import { Editor } from "@tiptap/react";

export function handleLink(editor: Editor) {
  const previousUrl = editor.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  if (url !== null) {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }
}

export function handleBlockquote(editor: Editor) {
  editor.chain().focus().toggleBlockquote().run();
}
export function handleStrike(editor: Editor) {
  editor.chain().focus().toggleStrike().run();
}
export function handleItalic(editor: Editor) {
  editor.chain().focus().toggleItalic().run();
}
export function handleBold(editor: Editor) {
  editor.chain().focus().toggleBold().run();
}
export function handleCodeBlock(editor: Editor) {
    editor.chain().focus().toggleCodeBlock().run();
}

export function handleTitle(editor: Editor) {
  editor.chain().focus().toggleHeading({ level: 1 }).run();
}

export function handleBulletList(editor: Editor) {
  editor.chain().focus().toggleBulletList().run();
}
export function handleOrderedList(editor: Editor) {
  editor.chain().focus().toggleOrderedList().run()
}

export function handleTextCenter(editor: Editor) {
  editor.chain().focus().setTextAlign("center").run();
}
export function handleTextLeft(editor: Editor) {
  editor.chain().focus().setTextAlign("left").run();
}

export function handleTextRight(editor: Editor){
  editor.chain().focus().setTextAlign("right").run();
}

export function handleCheckbox(editor: Editor){
  editor.chain().focus().toggleTaskList().run();
}

export function addHorizontalRule(editor: Editor){
 editor.chain().focus().setHorizontalRule().run();
}

export function handleHighlight(editor: Editor){
  editor.chain().focus().toggleHighlight().run();
}
