import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button, Text, Image, View } from 'react-native';
import { getQuestions } from '../Config/getQuestions'
import Question from './Question'
import Options from './Options';
import Result from './Result';






export default class Test extends Component {


  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      key: 0,
      showResultComponent: false,
      score: 0

    }


  }

  componentDidMount() {
    getQuestions().then((data) => {
      this.setState({
        questions: data.results
      })
      console.log(data.results)
    })
      .catch((error) => {
        console.log(error)
      })
  }





  next(score) {
    if (this.state.key <= 8) {
      this.setState({
        key: this.state.key + 1
      })
    }
    else {
      console.log(score)
      this.setState({
        score,
        showResultComponent: true
      })
    }
  }

  playAgain()
  {
    this.setState({
      showResultComponent:false,
      key:0,
      score:0
    })
  }

  render() {
    const { key } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        {!!this.state.questions.length && !!!this.state.showResultComponent && <View style={{ flex: 1 }}>
          <View style={{ marginTop: 30, width: '100%' }}>
            <Image style={styles.img} source={{ uri: 'data:image/png;base64,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' }} />


          </View>
          <View style={{ marginTop: 30, padding: 5 }}>

            <Question index={this.state.key} ques={this.state.questions[key].question} />
          </View>

          <Options next={this.next.bind(this)} option={this.state.questions[key]} />

        </View>}
        {!!this.state.questions.length && !!this.state.showResultComponent && <Result playAgain={this.playAgain.bind(this)} score={this.state.score} />}


      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 100, resizeMode: 'contain'
  },
  header: {
    height: 35, width: '100%', backgroundColor: '#191F26'
  }

});
