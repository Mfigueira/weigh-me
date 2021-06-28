import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { getRouteByTab } from '../../util/helpers';
import { useContext } from 'react';
import AppContext from '../../store/app-context';

export const Navbar = () => {
  const ctx = useContext(AppContext);
  const history = useHistory();

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const handleChange = (_, newValue) => {
    history.push(getRouteByTab(newValue));
    ctx.setTabValue(newValue);
  };

  return (
    <nav style={{ backgroundColor: '#a8dac5' }}>
      <Tabs
        value={ctx.tabValue}
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
