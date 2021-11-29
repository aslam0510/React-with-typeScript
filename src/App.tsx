
import { useState } from 'react';
import './App.css';
import { Note } from './Models/note.model';
import Header from './Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './Components/NotesList';
import CreateNotes from './Components/CreateNotes';



function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title : "React TypeScript",
    text: "This is a React TypeScript Basic App Using React Bootstrap and React TypeScript",
    color: '#dfdfdf',
    date : (new Date()).toString()
  }])
  return (
    <>
    <Header />
    <Container className="mt-5">
    <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <NotesList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
