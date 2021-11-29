import * as React from 'react';
import { Note } from './../Models/note.model';
import Notes from './Notes';

interface INotesListsProps {
  notes: Note[]
}

const NotesList: React.FC<INotesListsProps> = ({notes}) => {

  const handleDelete = (id : string) =>{
      console.log(id);
      
  }
  const renderNotes = () =>{
    return notes.map(note =>{
      return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
    })
  }
  return (
   <>
   <h2 className="mt-5">Notes</h2>
  <div>
    {renderNotes()}
  </div>
   </>
  )
};

export default NotesList;
