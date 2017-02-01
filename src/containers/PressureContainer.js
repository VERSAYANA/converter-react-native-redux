import { connect } from "react-redux";
import PressureTab from "../components/PressureTab";

const mapStateToProps = state => ({
  units: Object.entries(state.pressure)
});

const mapDispatchToProps = dispatch => ({
  changeValue: (unit, value) => {
    dispatch({
      type: "CHANGE_PRESSURE",
      unit,
      value
    });
  }
});

const PressureContainer = connect(mapStateToProps, mapDispatchToProps)(
  PressureTab
);

export default PressureContainer;
