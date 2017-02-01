import { connect } from "react-redux";
import TimeTab from "../components/TimeTab";

const mapStateToProps = state => ({
  units: Object.entries(state.time)
});

const mapDispatchToProps = dispatch => ({
  changeValue: (unit, value) => {
    dispatch({
      type: "CHANGE_TIME",
      unit,
      value
    });
  }
});

const TimeContainer = connect(mapStateToProps, mapDispatchToProps)(TimeTab);

export default TimeContainer;
