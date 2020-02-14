import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    marginTop: 10,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  iconButton: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  disabled: {
    pointerEvents: "none"
  }
}));

export default function TextEditor(props) {
  const classes = useStyles();
  const IconClassName = props.editMode
   ? clsx(classes.iconButton, classes.disabled) 
   : classes.iconButton;
  return (
    <div className={classes.search} onClick={props.submit}>
      <IconButton className={IconClassName}>
        {props.editMode ? <EditIcon /> : <SendIcon />}
      </IconButton>
      <InputBase
        placeholder="Message"
        rowsMax='10'
        fullWidth={true}
        multiline={true}
        value={props.value}
        onChange={props.handleOnChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
