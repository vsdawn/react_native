import React from 'react';
import {Button, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  },
});

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myButtonOpacity: 1, };
  }
    static navigationOptions = {
      title: 'Dashboard',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5},() => {navigate('Home')})}
                            onPressOut={() => this.setState({myButtonOpacity: 1})}>
            <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
              <Text>Press me!</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  export default DashboardScreen; 