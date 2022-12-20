import React ,{useState,useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from './ErrorMadal';
import Wrapper from '../Helper/Wrapper';

const AddUser=(props)=>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collageInputRef=useRef();
    const [error,setError]=useState()

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredCollage=collageInputRef.current.value;

       
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title:"invalid Name",
                message:"please enter a valid name and age"
            })
         return;
        }
        if(+enteredUserAge<1){
            setError({
                title:"invalid Age",
                message:"please enter a valid age"
            })
            return;
        }
       props.onAddUser(enteredName,enteredUserAge,enteredCollage);}

   

const errorHandler=()=>{
    setError(null)
}
    return(
        <Wrapper>
      { error && <ErrorModal title={error.title}
       message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
                 <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input  id='username'
             type="text" 
                    ref={nameInputRef}/>
            <label htmlFor='age'>Age(Years)</label>
            <input  id='age' type="number"
           ref={ageInputRef}/>
            <label htmlFor='collage'>Collage</label>
            <input  id='collage' type="text"
           ref={collageInputRef}/>
            <Button type='submit'>Add User</Button>
        </form>
        
        </Card>
        </Wrapper>
       
      
    )

}
export default AddUser;