import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

import { Ionicons, Feather } from 'react-native-vector-icons';
import Cam from './Screens/Cam'
import Navigation from './Config/Navigation'




class App extends Component {


  constructor(props) {
    super(props);

  }


  render() {
    return (
    <Navigation />
    );
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;