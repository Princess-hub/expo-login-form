import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity,StyleSheet, ScrollView} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        Username: "",
        Password: "",
      }
  }
  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.login}>
          <Text style= {styles.loginText}>Log in</Text>
        </View>
        <View>
          <TextInput style={styles.TextInput} placeholder="Username" 
          placeholderTextColor="grey" 
          value={this.state.Username}
          onChangeText = {(Username) => {
            this.setState({Username})
          }}
          />
          <TextInput style={styles.TextInput} 
          placeholder="Password" 
          placeholderTextColor="grey"
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.state.Password}
          onChangeText = {(Password) => {
            this.setState({Password})
          }}
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.opacity}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.cont}>
            <Text style={styles.account}>Do not have an account?</Text>
            <TouchableOpacity style={styles.signup}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 80
  },
  login: {
    marginBottom: 50
  },
  loginText: {
    color: "#5100ad",
    fontSize: 50
  },
  TextInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    marginBottom: 20,
    fontSize: 20,
    paddingBottom: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#0853a8",
    marginBottom: 20
  },
  opacity: {
    backgroundColor: "#5100ad",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  account: {
    paddingRight: 10,
  },
  signup: {
    color: "#5100ad",
    borderBottomWidth: 1,
    
  }
})

export default App;
