import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { getRouteByPath, getRouteByTab } from '../../util/helpers';

export const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [tabValue, setTabValue] = useState(getRouteByPath(location.pathname));

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const handleChange = (_, newValue) => {
    history.push(getRouteByTab(newValue));
    setTabValue(newValue);
  };

  return (
    <nav style={{ backgroundColor: '#a8dac5' }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Scale" {...a11yProps(0)} />
        <Tab label="Grid" {...a11yProps(1)} />
        <Tab label="Chart" {...a11yProps(2)} />
      </Tabs>
    </nav>
  );
};
