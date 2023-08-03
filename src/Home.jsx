import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Typography variant="h6" align="center" >
        Tabs Example
      </Typography>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      {selectedTab === 0 && <Typography>Content for Tab 1</Typography>}
      {selectedTab === 1 && <Typography>Content for Tab 2</Typography>}
      {selectedTab === 2 && <Typography>Content for Tab 3</Typography>}
    </div>
  );
};

export default Home;