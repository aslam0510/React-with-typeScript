import * as React from 'react';
import { Form , Button, Alert} from 'react-bootstrap';
import { Note } from './../Models/note.model';

interface ICreateNotesProps {
  notes: Note[];
  setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({notes,setNotes}) => {
  const [error ,setError] = React.useState<string>('')
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef =  React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e : any) : void =>{
    e.preventDefault()
    if(titleRef.current?.value === '' || textRef.current?.value ==='') {
      return setError('All feilds are Required')
    }
    const newNote = {
      id : (new Date()).toString(),
      title : (titleRef.current as HTMLInputElement).value,
      text : (textRef.current as HTMLTextAreaElement).value,
      color : (colorRef.current as HTMLInputElement).value,
      date : (new Date()).toString()
    }

    setError('')
    setNotes([...notes, newNote]);

    (titleRef.current as HTMLInputElement).value = '';
    (textRef.current as HTMLTextAreaElement).value = '';
    (colorRef.current as HTMLInputElement).value = '';
  }
  return (
    <>
    <h2 className="mb-2 mt-3">Create Notes</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <form className="mt-3 mb-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' name="title" placeholder="Enter title for the note" ref={titleRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Text</Form.Label>
        <Form.Control name="text" placeholder="Enter your notes" as='textarea' rows={3} ref={textRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
        <Form.Control name="color" ref={colorRef} type='color' id="colorInput" defaultValue="#dfdfdf" title="Choose your Color" />
        <Button type="submit" variant="primary" className="mt-3">Submit</Button>
      </Form.Group>
    </form>
    </>
  )
};

export default CreateNotes;
