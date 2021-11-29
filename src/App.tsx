
import { useState } from 'react';
import './App.css';
import { Note } from './Models/note.model';
import Header from './Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './Components/NotesList';



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
    <Container className="mt-5">
      <Row>
        <Col>
          <NotesList notes={notes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
