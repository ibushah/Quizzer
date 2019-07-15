import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';



export default class Question extends Component {

    render() {
        const {ques,index}=this.props
        
        return (

            <Text style={style.container}>
        Q{index+1}) {ques}
            </Text>

        )
    }

}


const style = StyleSheet.create({
    container: {
        color: '#0F75BD', textAlign: 'center', fontSize: 20, fontStyle: 'italic', fontWeight: 'bold'
    }
})
