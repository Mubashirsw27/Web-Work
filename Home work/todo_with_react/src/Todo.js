import React, { useState } from 'react'
import { List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core';
import db from './firebase';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    // const handleOpen = () => {
    //     setOpen(true);
    // }

    const updateTodo = () => {
        //for updating the value
        db.collection("todo").doc(props.todo.id).set({
            task : input
        }, { merge: true })
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                className={''}
            >
                <div className={classes.paper}>
                    <h1>Hello World</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={updateTodo}>Update</button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={props.todo.id} />
                    <HighlightOffRoundedIcon onClick={event => db.collection('todo').doc(props.todo.id).delete()}
                        color="primary" />
                    <button onClick={e => setOpen(true)}>Edit</button>

                </ListItem>
            </List>
        </>

    )
}

export default Todo;
