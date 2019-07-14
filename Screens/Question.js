import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';



export default class Question extends Component {

    render()
    {
        return (
            
                <Text style={style.container}>
                    {this.props.ques}
                </Text>
            
        )
    }

}


const style=StyleSheet.create({
    container:{
        color:'#0F75BD',textAlign:'center',fontSize:20,fontStyle:'italic',fontWeight:'bold'
    }
})
