import React from 'react';
import { StyleSheet, View, Fragment, Text, Image, TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import MyComponent from './Appbar';
import TabNavigator from './Navigation';
const styles = StyleSheet.create({
  cardstyle: {
    padding: 10,
  },
  cardview: {
    backgroundColor:"lightgray",
    borderRadius: 10,
  },
  cardbutton: {
    marginBottom: 20,
  },
});

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //   title: 'Welcome',
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <MyComponent/>
          <TabNavigator/>
          <Card style={styles.cardstyle}>
          <View style={styles.cardview}>
              <Card.Content>
                <Title>Home</Title>
              <Text style={{textAlign:"center", color: "red"}}>
                Click on image for login
              </Text>
                <Button style={{padding:10}} onPress={() => navigate('Login')}>
                <Image 
                  style={{resizeMode: 'contain'}}
                  source={require('./ariveguru.png')} 
                />
                </Button>
              </Card.Content>
            </View>
          </Card>
        </View>
      );
    }
  }
  export default HomeScreen; 