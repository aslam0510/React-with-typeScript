import * as React from 'react';
import { Note } from './../Models/note.model';
import Notes from './Notes';

interface INotesListsProps {
  notes: Note[];
  setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListsProps> = ({ notes, setNotes }) => {

  //delete notes
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))

  };

  const renderNotes = () => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3 mb-2 text-danger">Notes</h2>
      <div>{renderNotes().length ? renderNotes() : <h3>No Notes Available</h3>}</div>
    </>
  );
};

export default NotesList;
