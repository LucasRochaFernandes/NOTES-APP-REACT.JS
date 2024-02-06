export function NoteCard() {
  return (
    <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        natus corrupti suscipit vitae quis eaque soluta eum at nemo voluptatem
        totam sint, accusamus voluptatibus iusto minima similique cumque!
        Aliquam, voluptatem!
      </p>
      <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </div>
  )
}
