import Editor from "./componentes/Editor";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-amber-200 to-white-100h- p-8" >
      <div className="bg-white border-xl mx-auto rounded-lg max-w-[1100px]  border-black/20 overflow-hidden grid grid-cols-[1fr]">
        {/* <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-green-700 hover:opacity-25"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-400 hover:opacity-25"></button>
            <button className="w-3 h-3 rounded-full bg-blue-600 hover:opacity-25"></button>
          </div>
        </aside> */}
        <main className="p-4">
         <Editor />
        </main>
      </div>
    </main>
  )
}
