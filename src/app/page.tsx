"use client";
import Sidebar from "./componentes/Sidebar";
import EditorWrapper from "./componentes/EditorWrapper";
import { EditorProvider } from "./componentes/EditorContext";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-amber-200 to-white-100h- p-8 min-h-screen ">
      <div className="bg-white border-xl mx-auto rounded-lg border-black/20 overflow-hidden grid grid-cols-[1fr]">
        <EditorProvider>
          <main className="flex gap-16 min-h-[805px]">
            <div className="flex border-slate-50 bg-zinc-50 p-4">
              <Sidebar />
            </div>
            <EditorWrapper />
          </main>
        </EditorProvider>
      </div>
    </main>
  );
}
