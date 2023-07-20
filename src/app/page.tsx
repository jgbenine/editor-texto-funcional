"use client";

import CommandMenu from "./componentes/CommandMenu";
import Editor from "./componentes/Editor";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-amber-200 to-white-100h- p-8">
      <div className="bg-white border-xl mx-auto rounded-lg max-w-[1100px] border-black/20 overflow-hidden grid grid-cols-[1fr]">
        <main className="flex gap-8">
          <div className="flex border-slate-50 bg-zinc-50 p-4">
            <CommandMenu />
          </div>
          <Editor />
        </main>
      </div>
    </main>
  );
}
