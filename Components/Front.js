import React, { Component } from 'react';
import { ScrollView, Image, Button, Text, View, TouchableOpacity } from 'react-native';
import CardView from './CardView'

export default class Main extends Component {


    constructor(props) {
        super(props);

        this.state = {
            images:  this.props.imgArray
        }

    }
    openCam = () => {
        this.props.openCam();
    }

    static getDerivedStateFromProps(props, state) {
        return {
            images: props.imgArray
        }
    }

    

    render() {
        console.log(this.props.images)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 45, width: 100 + '%', backgroundColor: '#2c2c54' }}>

                </View>

                <View style={{ marginTop: 5 }}>
                    <Button title="Open Camera" onPress={this.openCam.bind(this)} />
                </View>


                <ScrollView>
                    {this.state.images.map((value, index) => {
                        console.log(value.id)
                        return (
                            <View  key={index}>
                                <CardView  id={value.id} update={this.props.update} delete={this.props.delete} url={value.url} />


                            </View>
                        )
                    })}

                    

                </ScrollView>

            </View>
        )
    }

}