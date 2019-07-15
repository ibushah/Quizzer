import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Thumbnail } from 'native-base';
import * as FaceDetector from 'expo-face-detector';
import { getQuestions } from '../Config/getQuestions'





export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      flashMode: Camera.Constants.FlashMode.off,
      img: 'https://img.icons8.com/material-outlined/42/000000/camera.png',
      questions:[]
    };


  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    getQuestions().then((data) => {
      this.setState({
        questions: data.results
      })
     
    })
      .catch((error) => {
        console.log(error)
      })

  }


  snap = async () => {
    if (this.cam) {
      let photo = await this.cam.takePictureAsync();
      await this.detectFaces(photo.uri)


      // this.setState({
      //   img: photo.uri
      // })

      

    }

  };


    async detectFaces( imageUri) {
    const options = { mode: FaceDetector.Constants.Mode.fast };
    const detection = await FaceDetector.detectFacesAsync(imageUri, options);

    if (detection.faces.length) {

      this.props.navigation.navigate('Quiz',{questions:this.state.questions})
      
    } else {
      alert("No face found,try again!");

    }


  };
 

  


  render() {
    const { hasCameraPermission } = this.state;


    if (hasCameraPermission === null) {
      return <View />;
    }

    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;

    }


    else {



      return (

        <View style={{ flex: 1 }}>
          <Camera ref={ref => {
            this.cam = ref;
          }}
            flashMode={this.state.flashMode}
            style={{ flex: 1 }} type={this.state.type}>


            <View style={{ flex: 1 }}>

              <View style={{

                top: 30,
                left: 10,
                position: "absolute",
                width: '100%',
                height: 70,
                opacity: 0.4,
                flexDirection: "row"
              }} >

                <TouchableOpacity onPress={() => {
                  this.setState({
                    flashMode: this.state.flashMode === Camera.Constants.FlashMode.on
                      ? Camera.Constants.FlashMode.off
                      : Camera.Constants.FlashMode.on,
                  })
                }}>
                  <MaterialIcons color="white" name={this.state.flashMode === Camera.Constants.FlashMode.on ? "flash-on" : "flash-off"} size={42} />
                </TouchableOpacity>

              </View>

              <View style={styles.subView} >




                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>


                    <Text style={{ color: 'white' }}><MaterialCommunityIcons name="camera-switch" size={42} /></Text>
                  </TouchableOpacity>
                </View>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={this.snap.bind(this)}>
                    <Text style={{ color: 'white' }}>
                      <Entypo name="circle" size={52} />
                    </Text>
                  </TouchableOpacity>
                </View>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Thumbnail style={{ borderWidth: 2, borderColor: 'white' }} small source={{ uri: this.state.img }} />
                </View>


              </View>
            </View>
          </Camera>
        </View>


      );
    }

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subView:{

    bottom: 0,
    position: "absolute",
    width: '100%',
    height: 70,
    opacity: 0.4,
    flexDirection: "row"
  }
});
