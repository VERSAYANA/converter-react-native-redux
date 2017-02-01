import { connect } from 'react-redux';
import LengthTab from '../components/LengthTab'

const mapStateToProps = (state) => ({
  units: Object.entries(state.length)
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (unit, value) => {
    dispatch({
      type: 'CHANGE_LENGTH',
      unit,
      value,
    });
  }
});

const LengthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LengthTab);

export default LengthContainer;
