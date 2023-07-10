export default function Home() {
  return (
    <main className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-zinc-900 h-screen p-8" >
      <div className="bg-white border-xl mx-auto rounded-lg max-w-[1100px] min-h-[500px] border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-green-700 hover:opacity-25"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-400 hover:opacity-25"></button>
            <button className="w-3 h-3 rounded-full bg-blue-600 hover:opacity-25"></button>
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16">
          <h1>Editor</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam corrupti nemo molestias inventore placeat quasi cumque iste alias in eius nostrum magni? In eius nisi perspiciatis vitae, quo quam?</p>
          </div>
        </main>
      </div>
    </main>
  )
}
