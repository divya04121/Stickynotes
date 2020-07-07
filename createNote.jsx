import React,{useState} from "react";
import dateFormat from "dateformat";
import AddIcon from '@material-ui/icons/Add';

 function CreateNote(props){
   const date = new Date();
   const d = dateFormat("mmmm dS,yyyy");
   const [note, setNote] = useState({
   title: "",
   content: ""
   });


function handleChange(event){

  const{name,value} = event.target;
  setNote(prenote=>{
    return{
      ...prenote,
      [name]:value
    };
  });
}
function HandleClick(event){
  
  props.addNote(note);
  setNote({
    title:"",
    content:""
  });
  event.preventDefault();
}
return(
  <div>

  <form>

     <p> {d}</p>

      <input onChange={handleChange} type="text" placeholder="Title" name="title" value =  {note.title} />
      <textarea onChange={handleChange} name="content" placeholder="Place Content" value={note.content}/>
     <button onClick={HandleClick}><AddIcon/></button>
  </form>
  </div>
    );
 }
 export default CreateNote;
