import React from 'react'
import {Delete} from "@material-ui/icons"
import '../App.css';

function Note(props) {
    function handleClick(){
        props.onDelete(props.id)
    }
    
    return (
            <div className ="note">
                <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p></div>
                <button onClick={handleClick}>
                    <Delete/>
                </button>
            </div>
     
    )
}

export default Note;

