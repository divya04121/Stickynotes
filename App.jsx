import React,{useState} from "react";
//import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./createNote";
import Note from "./Note";
function App(){
  const [submit , setSubmit]=useState([]);


  function SubmitNote(newnote){

   setSubmit((prevalue) =>{
    return [...prevalue,newnote];
   })
  }

  function handleRemove(id){
 setSubmit(prevalue=>{
  return prevalue.filter((noteItem,index)=>{
     return index !== id;
   })
 })
}








  return(
    <div>
    <Header/>
    <CreateNote  addNote={SubmitNote}/>
    {submit.map((noteItem,index)=>{
      return <Note  key={index}  add={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={handleRemove}/>
    })}
    <Footer/>

    </div>
  );
}
export default App;
