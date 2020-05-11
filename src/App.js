import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from "./component/ListComponent"
import Paper from '@material-ui/core/Paper';


import './App.css';

const App = () =>{

const [items,setItems]=useState([])
const [currentItem,setCurrentItem]=useState({text:"",key:""})

const handleChange = (e) =>{
  setCurrentItem({text:e.target.value,key:Date.now()})
console.log(currentItem)
}

const addButton = (e) =>{
  e.preventDefault()
  console.log("it click add")
if(currentItem.text !== "" ){
  const newItems = [...items,currentItem] 
  setItems(newItems)
}
setCurrentItem({text:""})
}

const setUpdate = (text,key) =>{
 items.map(item=>{
   if(item.key === key){
   item.text = text
   }

   setCurrentItem({text:text})
 })
 setCurrentItem({text:""})

}

const deleteButton =(key) => {
const filterItem = items.filter(item=>(item.key !== key))


setItems(filterItem)
}


  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        width: theme.spacing(16),
      height: theme.spacing(16),
      height: 'auto',
      },
    },
  }));
  
 
    const classes = useStyles();








  return(
    <div>
        <Paper>
     <form className={classes.root} noValidate autoComplete="off" onSubmit={addButton}>
      <TextField id="standard-basic" label="Add Task" className ="input_task" value = {currentItem.text} onChange={handleChange}/>
      <Button variant="contained" color="secondary" className="addButton" type="submit" disabled = {currentItem.text ===""}>
      ADD
      </Button> 
    </form>

<List items = {items} setUpdate={setUpdate} deleteButton = {deleteButton}/>



</Paper>
    </div>
  )
}


export default App;
