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
        push('/jobs');
        break;
      case 2:
        push('/stats');
        break;

      default:
        push('/people');
    }
  };

  useEffect(() => {
    switch (path) {
      case '/jobs':
        setValue(1);
        setActiveTab('/jobs', 1);
        break;
        case '/stats':
          setValue(2);
          setActiveTab('/stats', 2);
        break;
      default:
        setActiveTab('/people', 0);
        setValue(0);
    }
  }, [path]);

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="People" {...a11yProps(0)} />
        <Tab label="Jobs" {...a11yProps(1)} />
        <Tab label="Statistics" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
};

export default TabsHeader;
