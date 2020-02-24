import React from 'react';
import { StyleSheet, View, Fragment, Text, TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  cardstyle: {
    padding: 10,
  },
  cardview: {
    backgroundColor:"lightgray",
    borderRadius: 10,
    marginTop: '51%',
  },
  cardbutton: {
    marginBottom: 20,
  },
});

class LoginScreen extends React.Component {
    state = {
      text: '',
      text1:''
    };
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
      //   <Button
      //     title="Go to Jane's profile"
      //     onPress={() => navigate('Profile')}
      //   >
      //  </Button>
      
        
        <Card style={styles.cardstyle}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            accessibilityRole="button"
            onPress={() => navigate('Home')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign:"center", color: "red"}}>
              Logo Image
            </Text>
          </View>
          <View style={styles.cardview}>
            <Card.Content>
            <Title style={{marginTop:'3%', marginBottom:"3%"}}>Login</Title>
            
              <TextInput
                label='Email'
                value={this.state.text}
                // keyboardType='numeric'
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                label='Password'
                value={this.state.text}
                onChangeText={text1 => this.setState({ text1 })}
              />
            </Card.Content>
            <Card.Cover style={{margin:20}} source={require('./ariveguru.png')} />
            <Card.Actions style={styles.cardbutton}>
            <Button>Cancel</Button>
            <Button onPress={() => navigate('Profile')}>Ok</Button>
            </Card.Actions>
          </View>
        </Card>
      );
    }
  }
  export default LoginScreen; 