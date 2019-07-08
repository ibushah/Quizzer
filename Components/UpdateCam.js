import React, { Component } from 'react';

import { StyleSheet, TextInput, Button, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Thumbnail } from 'native-base';



export default class UpdateCam extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
        }

    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo)
           let obj={
               id:this.props.updateImgId,
               url:photo.uri
           }
            this.props.sendImg(obj);
           
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <Camera ref={ref => {
                    this.camera = ref;
                }} style={{ flex: 1 }} type={this.state.type}>
                    <View style={{ flex: 1 }}>


                        <View
                            style={{

                                bottom: 0,
                                position: "absolute",
                                width: '100%',
                                height: 70,
                                opacity: 0.4,
                                flexDirection: "row"
                            }}
                        >




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

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
