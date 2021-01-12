import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { colors } from '@material-ui/core';
import '../App.css';
import Buttons from './Buttons'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{fontSize:"20px"}}  label="Name" />

      <br />
      <TextField style={{fontSize:"20px",fontWeight:"5px"}} className='ch' label="TODO"  />
      <br/>
      
     <Buttons/>
    </form>
  );
}
