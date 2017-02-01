import { connect } from 'react-redux';
import MassTab from '../components/MassTab'

const mapStateToProps = (state) => ({
  units: Object.entries(state.mass)
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (unit, value) => {
    dispatch({
      type: 'CHANGE_MASS',
      unit,
      value,
    });
  }
});

const MassContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MassTab);

export default MassContainer;
