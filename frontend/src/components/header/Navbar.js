import '../../assets/styles/Header.css';
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
  }

  const handleChange = (e, newValue) => {
    history.push(getRouteByTab(newValue));
    setTabValue(newValue);
  };

  return (
    <nav>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
        aria-label='navbar'
      >
        <Tab label='New Weighing' {...a11yProps(0)} />
        <Tab label='Weighings' {...a11yProps(1)} />
      </Tabs>
    </nav>
  );
}