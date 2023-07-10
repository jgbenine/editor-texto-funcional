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
          <div className="max-w-[700px] mx-auto pt-16 flex flex-col">
            <h1>Editor</h1>

            <h1>Título de Nível 1</h1>
            <h2>Título de Nível 2</h2>
            <h3>Título de Nível 3</h3>
            <h4>Título de Nível 4</h4>
            <h5>Título de Nível 5</h5>
            <h6>Título de Nível 6</h6>

            <p>Parágrafo de texto.</p>

            <strong>Texto em negrito</strong>

            <em>Texto em itálico</em>

            <u>Texto sublinhado</u>

            <s>Texto riscado</s>

            <blockquote>Citação em bloco</blockquote>

            <q>Citação curta</q>

            <cite>Referência a uma obra citada</cite>

            <code>Trecho de código</code>

            <pre>Texto pré-formatado</pre>

            <abbr title="World Wide Web">WWW</abbr>

            <mark>Texto destacado</mark>

            <del>Texto deletado</del>

            <ins>Texto inserido</ins>

            <sup>Texto sobrescrito</sup>

            <sub>Texto subscrito</sub>

            <small>Texto em tamanho reduzido</small>

            <big>Texto em tamanho ampliado</big>

            <span>Span - um contêiner genérico para estilo de texto</span>

            <a href="https://www.example.com">Link para outro site</a>

          </div>
        </main>
      </div>
    </main>
  )
}
