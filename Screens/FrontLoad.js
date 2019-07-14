import React, { Component } from 'react';
import { StyleSheet,SafeAreaView ,Image, TextInput, Button, Text, View } from 'react-native';





export default class Home extends Component {

  
  constructor(props) {
    super(props);
   

  }


  componentDidMount()
  {
    setInterval(()=>
    {
      this.props.navigation.navigate("Quiz")
    },4000)
  }


  render() {
    return (
      <SafeAreaView  style={styles.container}>
         <View style={styles.header}>
           <Text style={{color:'#25EFFD',fontSize:26,fontWeight:'bold',textAlign:'center'}}>Q u i z A p p</Text>
           </View> 
           <View style={styles.bottom}>
          <Image style={{height:350,width:'100%'}} source={{uri:'https://media3.giphy.com/media/11FuEnXyGsXFba/source.gif'}}  />
           </View>
      </SafeAreaView >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191F26'
   
  },
  header:{
    height:100,
    marginTop:100
    
 
  },
  bottom:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
