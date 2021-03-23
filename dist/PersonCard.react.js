import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './person-card.css';

const PersonCard = (props) => {
  const { person } = props;
  const { name, surname, age, avatar } = person;

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Card className='person-card'>
      <CardMedia image={avatar} className='person-avatar' />

      <div className='person-card__content-container'>
        <CardContent className='person-card__content'>
          <Typography component="h5" variant="h5">
            { name + ' ' + surname }
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            Age: { age }
          </Typography>
        </CardContent>
        <div className='person-card_button-contaier'>
          <Button variant='outlined' onClick={() => setOpen(true)}>Learn more</Button>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert elevation={6} variant='filled' severity='info'>
          Maybe later :)
        </MuiAlert>
      </Snackbar>
    </Card>
  );
}

export default PersonCard;