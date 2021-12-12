import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import '../App.css';


function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value,
            }
        })
    }
    
    function expand(){
        setIsExpanded(true);
    }

    function handleSubmit(){
        props.onAdd(note)
        setNote({
            title:"",
            content:"",
        })
    }
    return (
        <div className="createArea">
             <div>
            {isExpanded && <input 
            name = "title"
            type="text" 
            placeholder ="Title"
            value ={note.title}
            onChange={handleChange}/>}
           
            <textarea name="content" 
            className ="textArea" 
            placeholder="Take a note..." 
            rows={3}
            value = {note.content}
            onClick={expand}
            onChange ={handleChange}>
           
            </textarea>
            </div>
            <Zoom  className ="fab" in={isExpanded}>
            <Fab onClick={handleSubmit}>
                <AddIcon  className="add"/>
            </Fab>
            </Zoom>
            
        </div>
    )
}

export default CreateArea;
