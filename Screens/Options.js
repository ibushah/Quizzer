import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

export default class Options extends Component {

    constructor(props) {
        super(props);




        this.state = {


            score: 0,

            opt: {
                opt1: this.props.option.incorrect_answers[0],
                opt2: this.props.option.incorrect_answers[1],
                opt3: this.props.option.correct_answer,
                opt4: this.props.option.incorrect_answers[2]
            },

            correct: this.props.option.correct_answer

        }
    }

    static getDerivedStateFromProps(props, state) {
        let obj = {
            opt1: props.option.incorrect_answers[0],
            opt2: props.option.incorrect_answers[1],
            opt3: props.option.correct_answer,
            opt4: props.option.incorrect_answers[2]
        }

        return ({
            opt: obj,
            correct: props.option.correct_answer

        })

    }





    checker(chosen) {

        if (chosen === this.props.option.correct_answer)
            this.setState({
                score: this.state.score + 1
            })

        this.props.next(this.state.score)
    }



    render() {
        const { opt } = this.state;
        return (

            <View style={{ marginTop: 30 }}>
                <View style={style.container}>
                    <ScrollView>

                        <TouchableOpacity onPress={this.checker.bind(this, opt.opt1)}>
                            <View style={style.option}>
                                <Text style={style.txt}>
                                    {opt.opt1}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.checker.bind(this, opt.opt2)}>
                            <View style={style.option}>
                                <Text style={style.txt}>
                                    {opt.opt2}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.checker.bind(this, opt.opt3)}>
                            <View style={style.option}>
                                <Text style={style.txt}>
                                    {opt.opt3}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.checker.bind(this, opt.opt4)}>
                            <View style={style.option}>
                                <Text style={style.txt}>
                                    {opt.opt4}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
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
    },
    option: {
        margin: 10,
        borderWidth: 0.7,
        borderColor: 'blue',
        borderRadius: 20,
        backgroundColor: '#2196f3',
        padding: 10,
        elevation: 1
    },
    txt: {
        color: 'white',
        fontSize: 16
    }


})