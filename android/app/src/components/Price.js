import React from 'react';
import {Button} from 'react-native';

class PriceScreen extends React.Component {
    static navigationOptions = {
      title: 'Food Price',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go To Login Page"
          onPress={() => navigate('Login')}
        />
      );
    }
  }
  export default PriceScreen; 