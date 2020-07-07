import React,{useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props){


  function handleDelete(id){
    props.onDelete(props.id);
  }

  return(
    <div className="note">
    <p>{props.add}</p>
    <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteIcon/></button>
    </div>

  );
}
export default Note;
