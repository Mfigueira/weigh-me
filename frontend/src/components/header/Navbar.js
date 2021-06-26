import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { getRouteByTab } from '../../util/helpers';

export const Navbar = ({ tabValue, setTabValue }) => {
  const history = useHistory();

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const handleChange = (_e, newValue) => {
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
