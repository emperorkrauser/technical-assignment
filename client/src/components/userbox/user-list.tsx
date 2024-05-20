import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function UserList() {
  const handleChangePerson = () => {
    console.log('change person');
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem
        sx={{ cursor: 'pointer' }}
        alignItems='flex-start'
        onClick={handleChangePerson}
      >
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Jane Doll'
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              I'll be in your neighborhood doing errands this…
            </Typography>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem
        sx={{ cursor: 'pointer' }}
        alignItems='flex-start'
        onClick={handleChangePerson}
      >
        <ListItemAvatar>
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Scott Alex'
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              Hello there, wanna hang out?
            </Typography>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem
        sx={{ cursor: 'pointer' }}
        alignItems='flex-start'
        onClick={handleChangePerson}
      >
        <ListItemAvatar>
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='John Doe'
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              Do you have Paris recommendations? Have you ever…
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}
