import React from 'react';
import NameList from './NameList';
import { Button , IconButton, ThemeProvider } from '@mui/material';
import { Pause, Camera, } from '@mui/icons-material';
import Counter from './Counter';



const About = () => {
  const namesArray = ['1','2','3'];
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page content.</p>
      <NameList names={namesArray} />
      <Button variant="contained" color="primary" size="large">Button</Button>
      <Button variant="outlined" color="secondary">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
      <IconButton color="secondary">
        <Camera/>
      </IconButton>
      <Counter></Counter>
    </div>
  );
};

export default About;
