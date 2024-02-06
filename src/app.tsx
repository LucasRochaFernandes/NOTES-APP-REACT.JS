import logo from './assets/logo-nlw.svg'

export function App() {
  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <div className="space-y-3 rounded-md bg-slate-700 p-5">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertido para texto
            automaticamente
          </p>
        </div>
        <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
          <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            natus corrupti suscipit vitae quis eaque soluta eum at nemo
            voluptatem totam sint, accusamus voluptatibus iusto minima similique
            cumque! Aliquam, voluptatem!
          </p>
          <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
        <div className=" relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
          <span className="text-sm font-medium text-slate-300">Há 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            natus corrupti suscipit vitae quis eaque soluta eum at nemo
            voluptatem totam sint, accusamus voluptatibus iusto minima similique
            cumque! Aliquam, voluptatem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur natus corrupti suscipit vitae quis
            eaque soluta eum at nemo voluptatem totam sint, accusamus
            voluptatibus iusto minima similique cumque! Aliquam, voluptatem!
          </p>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      </div>
    </div>
  )
}
