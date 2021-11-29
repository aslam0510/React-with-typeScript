
import { useState } from 'react';
import './App.css';
import { Note } from './Models/note.model';
import Header from './Components/Header';



function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title : "meetings",
    text: "meeting with bde tea",
    color: '#dfdfdf',
    date : (new Date()).toString()
  }])
  return (
    <>
    <Header />
    </>
  );
}

export default App;
