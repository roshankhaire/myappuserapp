import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './ErrorModal.module.css'
const ErrorModal=(props)=>{
    return<Card className={classes.modal}>
        <header>
            <h2 className={classes.header}>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>

        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>

        </footer>

    </Card>
}
export default ErrorModal;