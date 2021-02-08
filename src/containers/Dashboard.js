import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

// Actions
import { setActiveTab } from '../store/actions/tabActions';

// Components
import TabContainer from '../components/global-components/TabContainer';
import TabsHeader from '../components/global-components/TabsHeader';

const Dashboard = ({ tabIndex, setActiveTab }) => (
  <div>
    <TabsHeader setActiveTab={setActiveTab} />
    <TabContainer value={tabIndex} index={0}>
      <Typography>Item One</Typography>
    </TabContainer>
    <TabContainer value={tabIndex} index={1}>
      <Typography>Item Two</Typography>
    </TabContainer>
    <TabContainer value={tabIndex} index={2}>
      <Typography>Item Three</Typography>
    </TabContainer>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setActiveTab: (route, tabIndex) => dispatch(setActiveTab(route, tabIndex)),
});

const mapStateToProps = ({ activeTabs }) => ({
  tabIndex: activeTabs.tabIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
