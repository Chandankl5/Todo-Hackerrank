import React, { useCallback, useState } from 'react';
import { Note } from '../../types/Note';
import NoteForm from '../NoteForm';
import NoteTable from '../NoteTable';

const NoteManager: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

  const onSubmit = useCallback((note: Note) => {
    let updatedNotes = notes.map((curNote) => {
      console.log(note.id, curNote.id)

      return curNote.id === note.id ? note : curNote
    })
    console.log("🚀 ~ file: index.tsx:13 ~ onSubmit ~ noteToEdit:", noteToEdit, note)
    if(noteToEdit) {
      setNotes(updatedNotes);
    }
    else {
      setNotes([
        ...notes,
        note
      ])
    }
  }, [notes, noteToEdit])

  const onEdit = useCallback((note: Note) => {
    setNoteToEdit(note);
  }, [])

  const onDelete = useCallback((noteIdToDelete: number) => {
    let currentNotes = notes.filter((note) => note.id !== noteIdToDelete);
    setNotes(currentNotes);
  }, [notes])

  return (
    <div className="layout-column align-items-center justify-content-start" data-testid="note-manager">
      <NoteForm onSubmit={onSubmit} noteToEdit={noteToEdit ?? undefined} />
      <NoteTable notes={notes} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default NoteManager;
