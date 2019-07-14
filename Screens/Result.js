import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';


export default class Result extends Component
{

    render()
    {
        const score=this.props.navigation.getParam('score',0);
        return (
            <View style={{flex:1}}>
                <Text>{score}</Text>
            </View>
        )
    }
}