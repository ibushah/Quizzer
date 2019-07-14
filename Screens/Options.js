import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

export default class Options extends Component {

    constructor(props) {
        super(props);


        let obj = [
            {
                label: this.props.option.incorrect_answers[0],
                value: this.props.option.incorrect_answers[0]
            },
            {
                label: this.props.option.incorrect_answers[1],
                value: this.props.option.incorrect_answers[1]
            },
            {
                label: this.props.option.correct_answer,
                value: this.props.option.correct_answer
            },
            {
                label: this.props.option.incorrect_answers[2],
                value: this.props.option.incorrect_answers[2]
            }
        ]


        this.state = {

            obj,
            score: 0,
            key: 0,
            value: this.props.option.incorrect_answers[0],
            default:0
        }
    }

    static getDerivedStateFromProps(props, state) {
        const obj = [
            {
                label: props.option.incorrect_answers[0],
                value: props.option.incorrect_answers[0]
            },
            {
                label: props.option.incorrect_answers[1],
                value: props.option.incorrect_answers[1]
            },
            {
                label: props.option.correct_answer,
                value: props.option.correct_answer
            },
            {
                label: props.option.incorrect_answers[2],
                value: props.option.incorrect_answers[2]
            }
        ]

        return ({
            obj
        })

    }
    next() {
        console.log(this.state.value)
        const {option} =this.props;
        const {value} =this.state;

        
        if (option.correct_answer === value) {
            this.setState({
                score: this.state.score + 1
            })
        }

        if (this.state.key <= 8) {
            this.props.submit(this.state.key+1)
            this.setState({
                key: this.state.key + 1
            })
           
        }
        else {
            this.props.gotoResultComp(this.state.score);
        }

        console.log("hey")





    }
    checker(value) {
        this.setState({
            value
        })

    }
    render() {
        return (

            <View style={{ marginTop: 30 }}>
                <View style={style.container}>
                    <ScrollView>
                        <RadioForm
                            radio_props={this.state.obj}
                            initial={this.state.default}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#2196f3'}
                            animation={true}
                            selected={this.props.value}
                            style={{ margin: 20 }}
                            labelStyle={{ fontSize: 20 }}
                            labelColor="#0F75BD"
                            onPress={this.checker.bind(this)}
                        />
                    </ScrollView>
                </View>
                <View style={style.subBtnView}>

                    <TouchableOpacity style={style.subBtn} onPress={this.next.bind(this)}>
                        <Text style={{ marginTop: 5, fontSize: 20, textAlign: 'center', color: 'white' }}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    subBtn: {
        width: '90%',
        marginLeft: '5%',
        height: 44,
        borderRadius: 20,
        backgroundColor: '#0F75BD'
    },
    subBtnView: {
        width: '100%', marginTop: 20, padding: 5
    }
})