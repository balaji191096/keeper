
import './App.css';
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import {useState} from 'react';


function App() {
  const [notes, setNotes] = useState([])

function addNote(newNote){
  setNotes((prevNotes) => {
    return [...prevNotes,newNote]
  })

}
function deleteNote(id){
  setNotes((prevNotes) => {
    return prevNotes.filter((noteItems, index)=>{
      return id!== index 
    })
  })
}


  return (
    <>
    <div className="App">
      <Header/>
      <CreateArea onAdd ={addNote}/>
      <div className='container'>
      {
       notes.map((noteItems, index) => {
         return (
         <Note  key={index} title={noteItems.title} content={noteItems.content} id ={index} onDelete={deleteNote}/>)
       })
      }</div>
    </div>
  </>);
}

export default App;
