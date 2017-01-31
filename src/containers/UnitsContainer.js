import { connect } from 'react-redux';
import UnitsComponent from '../components/UnitsComponent';

const activeTab = (state) => state.find(t => t.active);
const unit = (tab) => Object.entries(tab.units);

const mapStateToProps = (state) => ({
  units: unit(activeTab(state)),
  name: activeTab(state).name
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (tab, unit, value) => {
    dispatch({
      type: 'CHANGE_VALUE',
      tab,
      unit,
      value
    });
  }
});

const UnitsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitsComponent);

export default UnitsContainer;
