import { ChangeEvent, useState } from 'react'

import logo from './assets/logo-nlw.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState<string>('')

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }
    return []
  })

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setSearch(q)
  }

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    const notesArray = [newNote, ...notes]
    setNotes([newNote, ...notes])
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((notes) =>
          notes.content
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
        )
      : notes

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} date={note.date} content={note.content} />
          )
        })}
      </div>
    </div>
  )
}
