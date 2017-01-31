import { connect } from 'react-redux';
import TabsComponent from '../components/TabsComponent'

const tabs = (state) => {
  return state.map(s => {
    return {
      'name': s.name,
      'active': s.active
    };
  });
};

const mapStateToProps = (state) => ({
  'tabs': tabs(state)
});

const mapDispatchToProps = (dispatch) => ({
  active: (name) => {
    dispatch({
      type: 'ACTIVE_TAB',
      name
    });
  }
});

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsComponent);

export default TabsContainer;
