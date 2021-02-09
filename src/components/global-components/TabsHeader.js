import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsHeader = ({ setActiveTab }) => {
  const { path } = useRouteMatch();
  const { push } = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 1:
        push('/people');
        break;
      case 2:
        push('/stats');
        break;

      default:
        push('/jobs');
    }
  };

  useEffect(() => {
    switch (path) {
      case '/people':
        setValue(1);
        setActiveTab('/people', 1);
        break;
        case '/stats':
          setValue(2);
          setActiveTab('/stats', 2);
        break;
      default:
        setActiveTab('/jobs', 0);
        setValue(0);
    }
  }, [path]);

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Jobs" {...a11yProps(0)} />
        <Tab label="People" {...a11yProps(1)} />
        <Tab label="Statistics" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
};

export default TabsHeader;
