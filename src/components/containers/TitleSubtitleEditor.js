import { connect } from 'react-redux';
import Control from '../components/Control';
import { getTitle, getSubTitle } from '../selectors/titleSelector';
import { updateTitle, updateSubtitle } from '../actions/titleAction';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
});

const mapDispatchProps = (dispatch) => ({
  onChange({ target }) {
    const factoryCreate = {
      title: updateTitle,
      subtitle: updateSubtitle
    };
    dispatch(factoryCreate[target.name](target.value));
  },
});

const TitleContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(Control);

export default TitleContainer;
