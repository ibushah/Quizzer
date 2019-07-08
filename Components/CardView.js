import React, { Component } from 'react';
import { Container, Grid, Col, Card, Body, CardItem, Thumbnail, Left, Right, View } from 'native-base';
import { Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';



export default class CardView extends Component {

    constructor(props) {
        super(props);


    }

    delete() {
       this.props.delete(this.props.id)
    }
    update(){
        this.props.update(this.props.id)
    }

    render() {
      
        return (
            <Grid>
                <Col>
                    <Card>

                        <View style={{ marginTop: 30 }}>

                            <Grid>
                                <Col>


                                    <Image source={{ uri: this.props.url }} style={{ height: 200, resizeMode: 'cover', width: "100%" }} />
                                </Col>

                            </Grid>
                            <Grid style={{ marginTop: 5 }}>
                                <Col>
                                    <TouchableOpacity onPress={this.delete.bind(this)} style={style.btn}>
                                        <Text style={{color:'white', textAlign: 'center' }}>  Delete</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col >

                                    <TouchableOpacity onPress={this.update.bind(this)}  style={{ backgroundColor: '#4b7bec', width: '100%' }}>
                                        <Text style={{color:'white', textAlign: 'center' }}> Update</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>










                        </View>


                    </Card>
                </Col>
            </Grid>
        )
    }


}

const style = StyleSheet.create({
    btn: {
        backgroundColor: '#ED4C67',
        width: '100%'
    }
})