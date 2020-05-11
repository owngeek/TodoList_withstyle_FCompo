import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import FlipMove from "react-flip-move"

const List = (props) =>{

const items = props.items
 const itemList = items.map(item=>{
 return   <div className="box_newtask" >
 <TextField id="standard-basic" label="Edit Task" key={item.key} value={item.text} onChange={(e)=>props.setUpdate(e.target.value,item.key)}   />
<Button variant="contained" color="secondary" className="deleteButton" type="submit" onClick={()=>props.deleteButton(item.key)}>

<Grid item xs={8}>
<DeleteIcon />

</Grid>

</Button> 







</div>

})




    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },

            color: theme.palette.text.primary,
        
        },
      }));

      const classes = useStyles();
    return(
        <div>
          <FlipMove duration={300} easing="ease-in-out">
          {itemList}
          </FlipMove>
          
        </div>
    )
}
export default List