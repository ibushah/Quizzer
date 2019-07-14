import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';



export default class Result extends Component {

    render() {
        const { score } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: '100%', resizeMode: 'contain', height: 300 }} source={{ uri: score >= 6 ? 'http://www.sclance.com/pngs/party-popper-png/party_popper_png_990099.jpg' : 'http://www.westfield.ma.edu/personalpages/draker/edcom/final/webprojects/fa11/sectionb/statescapitals/text_sorry_try_again.gif' }} />
                <Text style={{ color: '#191F26', fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', marginTop: 10 }}>Your score is : {score}</Text>
                <TouchableOpacity onPress={this.props.playAgain} style={style.btn} >
                    <View>
                        <Text style={style.txt}>Play Again</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    btn: {

        margin: 10,
        borderWidth: 0.7,
        borderColor: 'blue',
        borderRadius: 20,
        backgroundColor: '#2196f3',
        padding: 10,
        elevation: 1,
        width: '90%',
        marginLeft: '5%'


    },
    txt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
})