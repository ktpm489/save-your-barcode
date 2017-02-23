import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
class TestScreenView extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  };

  onNextPress = () => {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `TestScreen_${index + 1}`,
      title: `Test Screen #${index + 1}`
    }));
  };

  render() {
    const index = this.props.index;
    const text = `Hello man xxx #${index}`;
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress}>
          {text}
        </Text>
      </View>
    );
  };
}

/*const TestScreenView = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  },

  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `TestScreen_${index + 1}`,
      title: `Test Screen #${index + 1}`
    }));
  },

  render() {

    const index = this.props.index;
    const text = `Hello man #${index}`;
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress}>
          {text}
        </Text>
      </View>
    );
  }
});*/



export default TestScreenView;


