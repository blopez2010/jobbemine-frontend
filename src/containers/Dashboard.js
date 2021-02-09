import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { setActiveTab } from '../store/actions/tabActions';

// Components
import Opportunities from '../components/Opportunities/Opportunities';
import TabContainer from '../components/global-components/TabContainer';
import TabsHeader from '../components/global-components/TabsHeader';
import People from '../components/People/People';

const useStyles = makeStyles(theme => ({
  comingSoon: {
    flexGrow: 1,
    margin: '5em 0',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Dashboard = ({ tabIndex, setActiveTab }) => {
  const classes = useStyles();

  return (
    <div >
      <TabsHeader setActiveTab={setActiveTab} />
      <TabContainer value={tabIndex} index={0}>
        <Opportunities />
      </TabContainer>
      <TabContainer value={tabIndex} index={1}>
        <People />
      </TabContainer>
      <TabContainer value={tabIndex} index={2}>
        <Typography variant="h2" className={classes.comingSoon}>Coming Soon</Typography>
      </TabContainer>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  setActiveTab: (route, tabIndex) => dispatch(setActiveTab(route, tabIndex)),
});

const mapStateToProps = ({ activeTabs }) => ({
  tabIndex: activeTabs.tabIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
